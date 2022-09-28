/* eslint-disable unused-imports/no-unused-vars */
import { Button, Form, notification, Tabs } from 'antd';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QueryParams } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { BookingDetails, IMyBooking } from '@/contants/types';
import { createBooking, fetchUser } from '@/services/booking.services';

import InVoice from './components/Invoice';
import TabsBooking from './components/TabsBooking';

const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 20,
  search: '',
};

const CreateBookingContainer = () => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);

  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const { data: userData } = useQuery(['getuser', queries], () => fetchUser());

  const { mutate: mutateCreate, isLoading: isCreating } = useMutation(
    createBooking,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_BOOKING.GET_BOOKING]);
        notification.success({
          message: 'Tạo đơn hàng mới thành công',
          placement: 'top',
        });
      },
      onError: () => {
        notification.error({
          message: 'Something went wrong',
          placement: 'top',
        });
      },
    }
  );
  const onSubmit = async () => {
    const dataCreateBooking: Partial<
      IMyBooking & { estDate: string | Date; estTime: string | Date }
    > = await form.validateFields();

    // console.log(JSON.stringify(dataCreateBooking));

    mutateCreate({
      ...dataCreateBooking,
      total: parseInt(dataCreateBooking.total?.toString() || '') || 0,
      vat: parseInt(dataCreateBooking.vat?.toString() || '') || 0,
      amount: parseInt(dataCreateBooking.amount?.toString() || '') || 0,
      estimatedDate: dataCreateBooking.estDate,
      bookingDetail: dataCreateBooking?.bookingDetail?.map(
        (v: BookingDetails) => ({
          ...v,
          quantity: parseInt(v.quantity?.toString()) || 0,
          weight: parseInt(v.weight?.toString()) || 0,
          height: parseInt(v.height?.toString()) || 0,
          width: parseInt(v.width?.toString()) || 0,
          longs: parseInt(v.longs?.toString()) || 0,
          bulkyWeight: parseInt(v.bulkyWeight?.toString()) || 0,
        })
      ),
    });
  };
  return (
    <div>
      <p className='text-2xl font-bold text-yellow-primary'>
        Tạo Booking Hàng xuất
      </p>
      <div className='my-5'>
        <Button onClick={onSubmit} type='primary'>
          Tạo bookings
        </Button>
      </div>

      <Tabs type='card'>
        <Tabs.TabPane tab='Booking' key='Booking'>
          <TabsBooking form={form} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Invoice' key='invoice'>
          <InVoice form={form} dataUser={userData} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
