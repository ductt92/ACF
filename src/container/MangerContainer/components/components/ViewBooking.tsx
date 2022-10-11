/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  AddressCustomer,
  BookingPost,
  DetailsBookingPost,
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
  OpitionType,
  ReceiverCustome,
} from '@/contants/types';
import {
  fetchCurrentUnit,
  fetchServicesBooking,
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
  const [selected, setSelected] = useState();

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

  const { data: dataCurrenUnit } = useQuery(['fetchCurrentUnit2', {}], () =>
    fetchCurrentUnit()
  );

  const { data: dataSerivicesBooknig } = useQuery(
    ['dataSerivicesBooknig', {}],
    () => fetchServicesBooking()
  );

  const OpitionCurrencyUnit = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataCurrenUnit?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataCurrenUnit?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [dataCurrenUnit]);

  const OpitionInvoiceItemType = Object.entries(InvoiceItemType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const OpitionInvoiceType = Object.entries(InvoiceType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  useEffect(() => {
    const typeItemInvoice = OpitionInvoiceItemType.find(
      (x) => x.value === data?.invoice?.typeItemInvoice
    );

    const invoiceType = OpitionInvoiceType.find(
      (x) => x.value === data?.invoice?.invoiceType
    );

    const currencyId = OpitionCurrencyUnit?.find(
      (x: OpitionType) => x.value === data?.invoice?.currencyId
    );

    viewBooking.setFieldsValue({
      ...data,
      typeItemInvoice,
      invoiceType,
      currencyId,
      reasonExport: data?.invoice?.reasonExport,
      invoiceNumber: data?.invoice?.invoiceNumber,
      estimatedDate: moment(data?.estimatedDate),
      invoiceDate: moment(data?.invoice?.invoiceDate),
      estimateHour: moment(data?.estimateHour, 'HH:mm'),
      importProceduresPerson: data?.invoice?.importProceduresPerson,
      totalNetWeight: data?.invoice?.totalNetWeight,
      totalBulkyWeight: data?.invoice?.totalBulkyWeight,
      goodsSize: data?.invoice?.goodsSize,
      totalBaleNumber: data?.invoice?.totalBaleNumber,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      serviceId: dataSerivicesBooknig?.find(
        (x: { id: any }) => x.id === data.serviceBookingId
      ).name,
    });
    const detailBooking = data?.bookingDetail?.map((v: any) => {
      const { updatedAt, createdAt, ...res } = v;
      return res;
    });

    setDetailsBooking(detailBooking || []);
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

  console.log(data);

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

  const onSelect = (e: any) => {
    setSelected(e);
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
    const estimatedDate = moment(dataCreateBooking.estimatedDate).format(
      'YYYY-MM-DD'
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
      senderPostalCode,
      senderProvince,
      senderCountry,
      receiverProvince,
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
        senderPostalCode,
        senderProvince,
        senderCountry,
        receiverName,
        isCustomsDeclaration: false,
        bookingDetail: detailsBooking,
        isInvoice: true,
        receiverProvince,
      },
      invoice: {
        invoiceDetail: configDetailsInvoice,

        typeItemInvoice:
          dataCreateBooking?.typeItemInvoice ||
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          dataCreateBooking?.typeItemInvoice?.value,
        invoiceType:
          dataCreateBooking?.invoiceType ||
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          dataCreateBooking?.invoiceType?.value,
        senderInformation: senderAddressVi,
        receiverInformation: receiverAddress,
        importers: importProceduresPerson,
        invoiceDate: moment(dataCreateBooking?.invoiceDate).format(
          'YYYY-MM-DD'
        ),
        invoiceNumber: dataCreateBooking?.invoiceNumber,
        serviceId: dataCreateBooking?.serviceBookingId,
        totalNetWeight: dataCreateBooking?.totalNetWeight
          ? +dataCreateBooking.totalNetWeight
          : 0,
        totalBulkyWeight: dataCreateBooking?.totalBulkyWeight
          ? +dataCreateBooking?.totalBulkyWeight
          : 0,
        goodsSize: dataCreateBooking?.goodsSize
          ? +dataCreateBooking.goodsSize
          : 0,
        totalBaleNumber: dataCreateBooking?.totalBaleNumber
          ? +dataCreateBooking?.totalBaleNumber
          : 0,
        currencyId:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          dataCreateBooking?.currencyId || dataCreateBooking?.currencyId.value,
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
              serivcesSelected={selected}
              handleServicesSelected={onSelect}
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
              serivcesSelected={selected}
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
