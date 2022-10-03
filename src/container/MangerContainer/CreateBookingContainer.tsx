/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QueryParams } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  DetailsBookingPost,
  IInvoiceDetails,
  IMyBooking,
} from '@/contants/types';
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

  const [detailsInvoice, setDetailsInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );

  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

  const { mutate: mutateCreate } = useMutation(createBooking, {
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
  });

  const handleAddInvoiceDetails = (resForm: any) => {
    setDetailsInvoice((prev) => [...prev, resForm]);
  };
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
      IMyBooking & {
        estimateHour: string | Date;
        estimatedDate: string | Date;
        invoice_type: string;
        sender_information: string;
        receiver_information?: string;
      }
    > = await form.validateFields();

    const estimatedDate = moment(dataCreateBooking.estimatedDate).format(
      'YYYY/MM/DD'
    );
    const estimateHour = moment(dataCreateBooking.estimateHour).format('HH:mm');

    // const booking = {
    //   booking: {
    //     total: dataCreateBooking?.total,
    //     vat: dataCreateBooking?.vat,
    //     amount: dataCreateBooking?.amount,
    //     receiverNote: dataCreateBooking?.receiverNote,
    //     receiverCountry: dataCreateBooking?.receiverCountry,
    //     receiverContactPerson: dataCreateBooking?.receiverContactPerson,
    //     receiverDepartment: dataCreateBooking?.receiverDepartment,
    //     receiverPhoneNumber: dataCreateBooking?.receiverPhoneNumber,
    //     otherDeliveryConditions: dataCreateBooking?.otherDeliveryConditions,
    //     note: dataCreateBooking?.note,
    //     receiverPostalCode: dataCreateBooking?.receiverPostalCode,
    //     receiverAddress: dataCreateBooking?.receiverAddress,
    //     payment: dataCreateBooking?.payment,
    //     typeOfPaymentId: dataCreateBooking?.typeOfPaymentId,
    //     partnerBillCode: dataCreateBooking?.partnerBillCode,
    //     oderAccountForeign: dataCreateBooking?.oderAccountForeign,
    //     customsDeclarationNumer: dataCreateBooking?.customsDeclarationNumer,
    //     type: dataCreateBooking?.type,
    //     deliveryConditionId: dataCreateBooking?.deliveryConditionId,
    //     serviceBookingId: dataCreateBooking?.serviceBookingId,
    //     estimatedDate,
    //     estimateHour,
    //     senderNameVi: dataCreateBooking?.senderNameVi,
    //     senderNameEn: dataCreateBooking?.senderNameEn,
    //     senderAddressVi: dataCreateBooking?.senderAddressVi,
    //     senderAddressEn: dataCreateBooking?.senderAddressEn,
    //     senderContactPerson: dataCreateBooking?.senderContactPerson,
    //     senderDepartment: dataCreateBooking?.senderDepartment,
    //     senderPhoneNumber: dataCreateBooking?.senderPhoneNumber,
    //     senderNote: dataCreateBooking?.senderNote,
    //     bookingDetail: detailsBooking,
    //     receiverName: dataCreateBooking?.receiverName,
    //     //fake data
    //     isCustomsDeclaration: false,
    //   },
    //   invoice: {
    //     invoiceDetail: detailsInvoice,
    //     invoiceType: dataCreateBooking?.invoice_type,
    //     senderInformation: dataCreateBooking?.sender_information,
    //     receiverInformation: dataCreateBooking?.receiver_information,
    //     importers: dataCreateBooking?.importProceduresPerson,
    //     invoiceDate: dataCreateBooking?.invoice_date,
    //     invoiceNumber: dataCreateBooking?.invoice_number,
    //     serviceId: dataCreateBooking?.service_id,
    //     totalNetWeight: dataCreateBooking?.total_net_weight,
    //     totalBulkyWeight: dataCreateBooking?.total_bulky_weight,
    //     goodsSize: dataCreateBooking?.goods_size,
    //     totalBaleNumber: dataCreateBooking?.total_bale_number,
    //     currencyId: dataCreateBooking?.currency_id,
    //     reasonExport: dataCreateBooking?.reason_export,
    //     note: dataCreateBooking?.note,
    //   },
    // };
    // console.log(dataCreateBooking?.deliveryConditionId);
    // // console.log(JSON.stringify(resData));

    // mutateCreate(booking);
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
          <InVoice
            form={form}
            dataUser={userData}
            detailsInvoice={detailsInvoice}
            handleAddInvoiceDetails={handleAddInvoiceDetails}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
