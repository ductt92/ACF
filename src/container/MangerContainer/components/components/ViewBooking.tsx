/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  AddressCustomer,
  BookingPost,
  DetailsBookingPost,
  IInvoiceDetails,
  ReceiverCustome,
} from '@/contants/types';
import {
  fetchUser,
  generateBill,
  updateBooking,
} from '@/services/booking.services';

import InVoice from '../Invoice';
import TabsBooking from '../TabsBooking';

interface ViewBookingProps {
  data: any;
}

const Viewbooking = ({ data }: ViewBookingProps) => {
  const [viewBooking] = Form.useForm();
  const [detailsInvoice, setDetailsInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );
  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

  const [receiverCustome, setReceiverCustome] =
    useState<Partial<ReceiverCustome>>();

  const [addressCustome, setAddressCustome] =
    useState<Partial<AddressCustomer>>();

  const { data: userData } = useQuery(['getuser'], () => fetchUser());

  const queryClient = useQueryClient();

  const { mutate: mutateUpdate } = useMutation(updateBooking, {
    onSuccess: () => {
      queryClient.invalidateQueries(['updateBooking']);
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
      queryClient.invalidateQueries(['generateBill']);
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

  useEffect(() => {
    viewBooking.setFieldsValue({
      ...data,
      estimatedDate: moment(data?.estimatedDate),
      estimateHour: moment(data?.estimateHour, 'HH:mm'),
    });

    setDetailsBooking(data?.bookingDetail || []);
    setDetailsInvoice(data?.invoice?.invoiceDetail || []);
    setAddressCustome((prev) => ({
      ...prev,
      senderNameVi: data?.senderNameVi,
      senderAddressVi: data?.senderAddressVi,
      senderProvince: data?.senderProvince,
      senderCountry: data?.senderCountry,
      senderPhoneNumber: data?.senderPhoneNumber,
      senderPostalCode: data?.senderPostalCode,
    }));

    setReceiverCustome((prev) => ({
      ...prev,
      receiverPostalCode: data?.receiverPostalCode,
      receiverName: data?.receiverName,
      receiverPhoneNumber: data?.receiverPhoneNumber,
      receiverCountry: data?.receiverCountry,
      province: data?.province,
      receiverAddress: data?.receiverAddress,
    }));
  }, [data, viewBooking]);

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

  const handleAddInvoiceDetails = (resForm: any) => {
    setDetailsInvoice((prev) => [...prev, resForm]);
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

  const handleChangeInfoSender = (name: string, value: any) => {
    setAddressCustome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeInfoRecei = (name: string, value: any) => {
    setReceiverCustome((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    const dataCreateBooking: Partial<BookingPost> =
      await viewBooking.validateFields();

    console.log(dataCreateBooking.senderNameVi, 'senderNameVi');

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

    mutateUpdate({
      booking,
      id: data?.id,
    });
  };
  const handleGenerataeBill = () => {
    generatorBill(data?.id);
  };

  return (
    <div>
      <div className='flex gap-4'>
        <p className='mb-5 text-lg'>Chi tiết đơn hàng</p>
        <Button
          onClick={handleGenerataeBill}
          type='primary'
          disabled={!data?.id}
        >
          Tạo Bill
        </Button>
      </div>

      <div className='h-[calc(70vh)] overflow-y-auto p-5'>
        <Tabs type='card'>
          <Tabs.TabPane tab='Booking' key='Booking'>
            <TabsBooking
              form={viewBooking}
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
              form={viewBooking}
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

      <Button className='mt-5' type='primary' onClick={onSubmit}>
        Cập nhật đơn Hàng
      </Button>
    </div>
  );
};

export default Viewbooking;
