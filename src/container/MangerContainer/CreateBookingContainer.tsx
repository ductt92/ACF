/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  AddressCustomer,
  BookingPost,
  DetailsBookingPost,
  IInvoiceDetails,
  ReceiverCustome,
} from '@/contants/types';
import {
  createBooking,
  fetchUser,
  generateBill,
} from '@/services/booking.services';

import InVoice from './components/Invoice';
import TabsBooking from './components/TabsBooking';

const CreateBookingContainer = () => {
  const [detailsInvoice, setDetailsInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );
  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

  const [id, setId] = useState('');
  const [addressCustome, setAddressCustome] =
    useState<Partial<AddressCustomer>>();

  const [receiverCustome, setReceiverCustome] =
    useState<Partial<ReceiverCustome>>();

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

  const { mutate: generatorBill } = useMutation(generateBill, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_BOOKING.GET_BOOKING]);
      notification.success({
        message: 'Tải xuống thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Tải xuống thất bại',
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

  const handleChangeInfoSender = (name: string, value: any) => {
    setAddressCustome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeInfoRecei = (name: string, value: any) => {
    setReceiverCustome((prev) => ({ ...prev, [name]: value }));
  };
  const handleSetId = (id: string) => {
    setId(id);
  };

  useEffect(() => {
    const custome = {
      senderNameVi: userData?.fullName || '',
      senderPhoneNumber: userData?.phoneNumber || '',
      senderCountry: userData?.country || '',
      senderProvince: userData?.province || '',
      senderAddressVi: userData?.detailAddress || '',
      senderPostalCode: userData?.postalCode || '',
    };
    setAddressCustome(custome);
  }, [userData]);

  const onSubmit = async () => {
    const dataCreateBooking: Partial<BookingPost> = await form.validateFields();

    const estimatedDate = moment(dataCreateBooking.estimatedDate).format(
      'YYYY/MM/DD'
    );
    const estimateHour = moment(dataCreateBooking.estimateHour).format('HH:mm');

    const configDetailsInvoice = detailsInvoice.map(
      ({ totalMoney, ...rest }) => rest
    );
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
        invoiceDetail: configDetailsInvoice,
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

    mutateCreate({
      booking,
      handleSetId,
    });
  };

  const handleUpdateBookingDetails = (form: any) => {
    const res = detailsBooking.map((x, index) => {
      if (form.idKey === index) {
        const { idKey, ...resetForm } = form;
        return resetForm;
      } else {
        return x;
      }
    });

    setDetailsBooking(res);
  };

  const handleDeleteRow = (id: any) => {
    const res = detailsBooking.filter((x, index) => id !== index);
    setDetailsBooking(res);
  };

  const handleDeleteInvoice = (id: any) => {
    const res = detailsInvoice.filter((x, index) => id !== index);
    setDetailsInvoice(res);
  };

  const handleUpdateBookingInvoice = (form: any) => {
    const res = detailsInvoice.map((x, index) => {
      if (form.idKey === index) {
        const { idKey, ...resetForm } = form;
        return resetForm;
      } else {
        return x;
      }
    });

    setDetailsInvoice(res);
  };
  const handleGenerataeBill = () => {
    generatorBill(id);
  };

  return (
    <div>
      <p className='text-2xl font-bold text-yellow-primary'>
        Tạo Booking Hàng xuất
      </p>
      <div className='my-5 flex gap-4'>
        <Button onClick={onSubmit} type='primary'>
          Tạo bookings
        </Button>

        <Button onClick={handleGenerataeBill} type='primary' disabled={!id}>
          Tạo Bill
        </Button>
      </div>

      <Tabs type='card'>
        <Tabs.TabPane tab='Booking' key='Booking'>
          <TabsBooking
            form={form}
            userData={userData}
            addressCustome={addressCustome}
            handleDeleteRow={handleDeleteRow}
            detailsBooking={detailsBooking}
            handleAddBookingDetails={handleAddBookingDetails}
            handleUpdateBookingDetails={handleUpdateBookingDetails}
            handleChangeInfoSender={handleChangeInfoSender}
            handleChangeInfoRecei={handleChangeInfoRecei}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Invoice' key='invoice'>
          <InVoice
            form={form}
            dataUser={userData}
            sendAddress={addressCustome}
            detailsInvoice={detailsInvoice}
            receiverCustome={receiverCustome}
            handleAddInvoiceDetails={handleAddInvoiceDetails}
            handleDeleteInvoice={handleDeleteInvoice}
            handleUpdateBookingInvoice={handleUpdateBookingInvoice}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
