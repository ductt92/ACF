/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrinterOutlined } from '@ant-design/icons';
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  AddressCustomer,
  BookingPost,
  BookingStatusPost,
  DetailsBookingPost,
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
  OpitionType,
  ReceiverCustome,
} from '@/contants/types';
import {
  fetchCurrentUnit,
  fetchUser,
  generateBill,
  generateInvoice,
  updateBooking,
  updateStatusBooking,
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

  const [statusBooking, setStatusBooking] = useState<BookingStatusPost>();

  const [receiverCustome, setReceiverCustome] =
    useState<Partial<ReceiverCustome>>();

  const [addressCustome, setAddressCustome] =
    useState<Partial<AddressCustomer>>();

  const { data: userData } = useQuery(['getuser'], () => fetchUser());

  const [isInvoice, setIsInvoice] = useState<boolean>(false);

  const [value, setValue] = useState(1);

  const queryClient = useQueryClient();

  const { mutate: mutateUpdate } = useMutation(updateBooking, {
    onSuccess: () => {
      queryClient.invalidateQueries(['updateBooking']);
      notification.success({
        message: 'Cập nhật đơn hàng thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Some thing when wrong ,Please try again !!',
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

  const { mutate: generatorInvoice } = useMutation(generateInvoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(['generateInVoice']);
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

  const { mutate: mutateUpdateStautsBooking } = useMutation(
    updateStatusBooking,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['updateBooking']);
        notification.success({
          message: 'Cập nhật đơn hàng thành công',
          placement: 'top',
        });
      },
      onError: () => {
        notification.error({
          message: 'Some thing when wrong ,Please try again !!',
          placement: 'top',
        });
      },
    }
  );

  const { data: dataCurrenUnit } = useQuery(['fetchCurrentUnit2', {}], () =>
    fetchCurrentUnit()
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
      ...data?.booking,
      ...data?.invoice,
      typeItemInvoice,
      invoiceType,
      currencyId,
      reasonExport: data?.invoice?.reasonExport,
      invoiceNumber: data?.invoice?.invoiceNumber,
      estimatedDate: moment(data?.booking?.estimatedDate),
      invoiceDate: moment(data?.invoice?.invoiceDate),
      estimateHour: moment(data?.booking?.estimateHour, 'HH:mm'),
      importProceduresPerson: data?.invoice?.importers,
      totalNetWeight: data?.invoice?.totalNetWeight,
      totalBulkyWeight: data?.invoice?.totalBulkyWeight,
      goodsSize: data?.invoice?.goodsSize,
      totalBaleNumber: data?.invoice?.totalBaleNumber,
    });

    const detailBooking = data?.booking?.bookingDetail?.map((v: any) => {
      const { updatedAt, createdAt, ...res } = v;
      const detailsObject = { ...res, numb22: res.bulkyWeight * res.quantity };
      return detailsObject;
    });

    setValue(data?.booking.customsDeclarationNumber ? 2 : 1);
    setDetailsBooking(detailBooking || []);
    setIsInvoice(data?.booking.isInvoice);
    setDetailsInvoice(data?.invoice?.invoiceDetail || []);

    setSelected(data?.booking?.serviceBookingId);

    setAddressCustome((prev) => ({
      ...prev,
      ...data?.booking,
      senderNameVi: data?.booking?.senderNameVi,
      senderAddressVi: data?.booking?.senderAddressVi,
      senderProvince: data?.booking?.senderProvince,
      senderCountry: data?.booking?.senderCountry,
      senderPhoneNumber: data?.booking?.senderPhoneNumber,
      senderPostalCode: data?.booking?.senderPostalCode,
      senderContactPerson: data?.booking?.senderContactPerson,
    }));

    setReceiverCustome((prev) => ({
      ...prev,
      ...data?.booking,
      receiverPostalCode: data?.booking.receiverPostalCode,
      receiverName: data?.booking?.receiverName,
      receiverPhoneNumber: data?.booking?.receiverPhoneNumber,
      receiverCountry: data?.booking?.receiverCountry,
      province: data?.booking?.province,
      receiverAddress: data?.booking?.receiverAddress,
    }));
    setStatusBooking(data?.booking.status);
  }, [OpitionCurrencyUnit, data, viewBooking]);

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
        const { idKey, numb22, ...resetForm } = form;
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
    const estimateHour = moment(
      dataCreateBooking.estimateHour || data?.booking?.estimateHour
    ).format('HH:mm');

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
      customsDeclarationNumber,
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
        total: total || data?.booking?.total,
        vat: vat || data?.booking?.vat,
        amount: amount || data?.booking?.amount,
        receiverNote: receiverNote || data?.booking?.receiverNote,
        receiverCountry: receiverCountry || data?.booking?.receiverCountry,
        receiverContactPerson:
          receiverContactPerson || data?.booking?.receiverContactPerson,
        receiverDepartment:
          receiverDepartment || data?.booking?.receiverDepartment,
        receiverPhoneNumber:
          receiverPhoneNumber || data?.booking?.receiverPhoneNumber,
        otherDeliveryConditions:
          otherDeliveryConditions || data?.booking?.otherDeliveryConditions,
        note: note || data?.booking?.note,
        receiverPostalCode:
          receiverPostalCode || data?.booking?.receiverPostalCode,
        receiverAddress: receiverAddress || data?.booking?.receiverAddress,
        payment: payment || data?.booking?.payment,
        typeOfPaymentId: typeOfPaymentId || data?.booking?.typeOfPaymentId,
        partnerBillCode: partnerBillCode || data?.booking?.partnerBillCode,
        oderAccountForeign:
          oderAccountForeign || data?.booking?.oderAccountForeign,
        customsDeclarationNumber:
          customsDeclarationNumber || data?.booking?.customsDeclarationNumber,
        type: type || data?.booking?.type,
        deliveryConditionId:
          deliveryConditionId || data?.booking?.deliveryConditionId,
        serviceBookingId: serviceBookingId || data?.booking?.serviceBookingId,
        estimatedDate: estimatedDate || data?.booking?.estimatedDate,
        estimateHour: estimateHour,
        senderNameVi: senderNameVi || data?.booking?.senderNameVi,
        senderNameEn: senderNameEn || data?.booking?.senderNameEn,
        senderAddressVi: senderAddressVi || data?.booking?.senderAddressVi,
        senderAddressEn: senderAddressEn || data?.booking?.senderAddressEn,
        senderContactPerson:
          senderContactPerson || data?.booking?.senderContactPerson,
        senderDepartment: senderDepartment || data?.booking?.senderDepartment,
        senderPhoneNumber:
          senderPhoneNumber || data?.booking?.senderPhoneNumber,
        senderNote: senderNote || data?.booking?.senderNote,
        senderPostalCode: senderPostalCode || data?.booking?.senderPostalCode,
        senderProvince: senderProvince || data?.booking?.senderProvince,
        senderCountry: senderCountry || data?.booking?.senderCountry,
        receiverName: receiverName || data?.booking?.receiverName,
        isCustomsDeclaration: false,
        isInvoice,
        receiverProvince: receiverProvince || data?.booking?.receiverProvince,
        bookingDetail: detailsBooking.map((v) => {
          const { numb22, ...res } = v;
          return {
            ...res,
          };
        }),
      },
      invoice: {
        invoiceDetail: configDetailsInvoice,

        typeItemInvoice:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          typeItemInvoice?.value ||
          typeItemInvoice ||
          data?.invoice?.typeItemInvoice,

        invoiceType:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          invoiceType?.value || invoiceType || data?.invoice?.invoiceType,

        senderInformation: senderAddressVi || data?.booking?.senderAddressVi,
        receiverInformation: receiverAddress || data?.booking?.receiverAddress,
        importers: importProceduresPerson,
        invoiceDate: moment(
          dataCreateBooking?.invoiceDate || data?.invoice?.invoiceDate
        ).format('YYYY-MM-DD'),
        invoiceNumber:
          dataCreateBooking?.invoiceNumber || data?.invoice?.invoiceNumber,
        serviceId:
          dataCreateBooking?.serviceBookingId ||
          data?.invoice?.serviceBookingId,
        totalNetWeight: dataCreateBooking?.totalNetWeight
          ? +dataCreateBooking.totalNetWeight
          : +data?.invoice?.totalNetWeight,
        totalBulkyWeight: dataCreateBooking?.totalBulkyWeight
          ? +dataCreateBooking?.totalBulkyWeight
          : +data?.invoice?.totalBulkyWeight,
        goodsSize: dataCreateBooking?.goodsSize
          ? +dataCreateBooking.goodsSize
          : +data?.invoice?.goodsSize,
        totalBaleNumber: dataCreateBooking?.totalBaleNumber
          ? +dataCreateBooking?.totalBaleNumber
          : +data?.invoice?.totalBaleNumber,
        currencyId:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          dataCreateBooking?.currencyId?.value ||
          dataCreateBooking?.currencyId ||
          data?.invoice?.currencyId,
        reasonExport:
          dataCreateBooking?.reasonExport || data?.invoice?.reasonExport,
        noteInvoice:
          dataCreateBooking?.noteInvoice || data?.invoce?.noteInvoice,
      },
    };
    if (moment(`${estimatedDate} ${estimateHour}`).isAfter(Date.now())) {
      mutateUpdate({
        booking,
        id: data?.booking?.id,
      });
      console.log(booking);
    } else {
      notification.error({
        message: 'Vui lòng chọn ngày và giờ giao hàng sau thời gian hiện tại',
        placement: 'top',
      });
    }
  };

  const handleGenerataeBill = () => {
    generatorBill(data?.booking?.id);
  };

  const handleGenerataeInvoice = () => {
    generatorInvoice(data?.booking?.id);
  };

  const handleSetStatus = (value: BookingStatusPost) => {
    setStatusBooking(value);
  };
  const updateStatus = () => {
    const { id } = data?.booking;
    if (id) {
      mutateUpdateStautsBooking({
        id,
        handleSetStatus,
      });
    }
  };

  console.log(data?.booking?.status);

  return (
    <div>
      <div className='flex gap-4'>
        <p className='mb-5 text-lg'>Chi tiết đơn hàng</p>
        <Button
          onClick={handleGenerataeBill}
          type='primary'
          disabled={!data?.booking?.id}
          icon={<PrinterOutlined />}
        >
          In Bill
        </Button>

        <Button
          onClick={handleGenerataeInvoice}
          type='primary'
          disabled={!data?.booking?.id}
          icon={<PrinterOutlined />}
        >
          In Invoice
        </Button>
        <Button
          onClick={updateStatus}
          type='primary'
          disabled={statusBooking === BookingStatusPost.HANDED_OVER}
        >
          Xác nhận đơn hàng
        </Button>
        <Button onClick={() => setIsInvoice(!isInvoice)} type='primary'>
          {isInvoice ? 'Không Invoice' : 'Có Invoice'}
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
              value={value}
              handleSetValue={(e: any) => setValue(e)}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Invoice' key='invoice' disabled={!isInvoice}>
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
