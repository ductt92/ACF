/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  BookingPost,
  DetailsBookingPost,
  IInvoiceDetails,
} from '@/contants/types';
import { createBooking, fetchUser } from '@/services/booking.services';

import InVoice from './components/Invoice';
import TabsBooking from './components/TabsBooking';

const CreateBookingContainer = () => {
  const [detailsInvoice, setDetailsInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );
  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

  const [form] = Form.useForm();

  const queryClient = useQueryClient();

  const { data: userData } = useQuery(['getuser'], () => fetchUser());

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
        message: 'Vui lòng kiểm tra lại các trường còn thiếu',
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
    const dataCreateBooking: Partial<BookingPost> = await form.validateFields();
    const estimatedDate = moment(dataCreateBooking.estimatedDate).format(
      'YYYY/MM/DD'
    );
    const estimateHour = moment(dataCreateBooking.estimateHour).format('HH:mm');
    const {
      total,
      vat,
      amount,
      receiverNote,
      receiverCountry,
      receiverContactPerson,
      receiverDepartment,
      receiverPhoneNumber,
      otherDeliveryConditions,
      note,
      receiverPostalCode,
      typeOfPaymentId,
      receiverAddress,
      payment,
      partnerBillCode,
      oderAccountForeign,
      customsDeclarationNumer,
      type,
      senderNameVi,
      senderNameEn,
      senderAddressVi,
      senderAddressEn,
      senderContactPerson,
      senderDepartment,
      senderPhoneNumber,
      senderNote,
      deliveryConditionId,
      serviceBookingId,
      receiverName,
      typeItemInvoice,
      invoiceType,
      importProceduresPerson,
    } = dataCreateBooking;

    const booking = {
      booking: {
        total,
        vat,
        amount,
        receiverNote,
        receiverCountry,
        receiverContactPerson,
        receiverDepartment,
        receiverPhoneNumber,
        otherDeliveryConditions,
        note,
        receiverPostalCode,
        receiverAddress,
        payment,
        typeOfPaymentId,
        partnerBillCode,
        oderAccountForeign,
        customsDeclarationNumer,
        type,
        deliveryConditionId,
        serviceBookingId,
        estimatedDate,
        estimateHour,
        senderNameVi,
        senderNameEn,
        senderAddressVi,
        senderAddressEn,
        senderContactPerson,
        senderDepartment,
        senderPhoneNumber,
        senderNote,
        receiverName,
        isCustomsDeclaration: false,
        bookingDetail: detailsBooking,
      },
      invoice: {
        invoiceDetail: detailsInvoice,
        typeItemInvoice,
        invoiceType,
        senderInformation: senderAddressVi,
        receiverInformation: receiverAddress,
        importers: importProceduresPerson,
        invoiceDate: moment(dataCreateBooking?.invoiceDate).format(
          'YYYY/MM/DD'
        ),
        invoiceNumber: dataCreateBooking?.invoiceNumber,
        serviceId: dataCreateBooking?.serviceBookingId,
        totalNetWeight: dataCreateBooking?.totalNetWeight,
        totalBulkyWeight: dataCreateBooking?.totalBulkyWeight,
        goodsSize: dataCreateBooking?.goodsSize,
        totalBaleNumber: dataCreateBooking?.totalBaleNumber,
        currencyId: dataCreateBooking?.currencyId,
        reasonExport: dataCreateBooking?.reasonExport,
        note: dataCreateBooking?.noteInvoice,
      },
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
            userData={userData}
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
