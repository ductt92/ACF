/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QueryParams } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { DetailsBookingPost, IMyBooking } from '@/contants/types';
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

  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

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

  const handleAddBookingDetails = (form: any) => {
    const {
      bulkyWeight,
      calculationUnit,
      commoditiesTypeId,
      description,
      height,
      longs,
      note,
      originItem,
      quantity,
      shippingItemEn,
      shippingItemViId,
      weight,
      width,
    } = form;
    const resForm = {
      bulkyWeight,
      calculationUnit,
      commoditiesTypeId,
      description,
      height,
      longs,
      note,
      originItem,
      quantity,
      shippingItemEn,
      shippingItemViId,
      weight,
      width,
    };
    setDetailsBooking((prev) => [...prev, resForm]);
  };
  const onSubmit = async () => {
    const dataCreateBooking: Partial<
      IMyBooking & { estimateHour: string | Date; estimatedDate: string | Date }
    > = await form.validateFields();

    const estimatedDate = moment(dataCreateBooking.estimatedDate).format(
      'YYYY/MM/DD'
    );
    const estimateHour = moment(dataCreateBooking.estimateHour).format('HH:mm');
    const booking = {
      ...dataCreateBooking,
      estimatedDate,
      estimateHour,
      bookingDetail: detailsBooking,
      //fake data
      isCustomsDeclaration: false,
    };
    mutateCreate(booking);
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
          <TabsBooking
            form={form}
            detailsBooking={detailsBooking}
            handleAddBookingDetails={handleAddBookingDetails}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Invoice' key='invoice'>
          <InVoice form={form} dataUser={userData} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
