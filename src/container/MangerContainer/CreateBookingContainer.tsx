/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { PrinterOutlined } from '@ant-design/icons';
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  AddressCustomer,
  BookingPost,
  BookingStatusPost,
  DetailsBookingPost,
  IInvoiceDetails,
  ReceiverCustome,
} from '@/contants/types';
import {
  createBooking,
  fetchUser,
  generateBill,
  generateBillPatner,
  generateInvoice,
  updateBooking,
  updateStatusBooking,
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

  const [statusBooking, setStatusBooking] = useState<BookingStatusPost>();

  const [id, setId] = useState<string | null | undefined>();
  const [addressCustome, setAddressCustome] =
    useState<Partial<AddressCustomer>>();

  const [receiverCustome, setReceiverCustome] =
    useState<Partial<ReceiverCustome>>();

  const [isInvoice, setIsInvoice] = useState<boolean>(true);

  const [value, setValue] = useState(1);

  const [selected, setSelected] = useState();

  const [form] = Form.useForm();

  const queryClient = useQueryClient();

  const { data: userData } = useQuery(['getuser'], () => fetchUser());

  const [billPartner, setBillPartner] = useState<string | null | undefined>();

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

  const handleAddInvoiceDetails = (resForm: any) => {
    setDetailsInvoice((prev) => [...prev, resForm]);
  };

  const onSelect = (e: any) => {
    setSelected(e);
  };

  const handleSetValue = (value: any) => {
    setValue(value);
  };

  const handleAddBookingDetails = (detailsForm: any) => {
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
    } = detailsForm;
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

    const prevDetails = [...detailsBooking, resForm];
    const bulkyWeightValue = 0;
    const quantityValue = 0;
    const weightValue = 0;

    const totalNetWeight = prevDetails
      .map(({ weight }) => weight)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        weightValue
      );

    const totalBulkyWeight = prevDetails
      .map(({ bulkyWeight }) => bulkyWeight)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        bulkyWeightValue
      );
    const totalBaleNumber = prevDetails
      .map(({ quantity }) => quantity)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        quantityValue
      );
    const goodsSize = prevDetails.map(({ height, width, longs }, index) => {
      if (index === prevDetails.length - 1) {
        return `${height} x ${width} x ${longs}`;
      }
      return `${height} x ${width} x ${longs},`;
    });
    form.setFieldsValue({
      totalNetWeight,
      totalBulkyWeight,
      totalBaleNumber,
      goodsSize,
    });

    // form
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

  const handleSetStatus = (value: BookingStatusPost) => {
    setStatusBooking(value);
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
      isCustomerCreateDeclaration,
    } = dataCreateBooking;

    const booking2 = {
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
        customsDeclarationNumber,
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
        isInvoice,
        receiverProvince,
        isCustomerCreateDeclaration,
        bookingDetail: detailsBooking.map((v) => {
          const { numb22, ...res } = v;
          return {
            ...res,
          };
        }),
      },
    };
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
        customsDeclarationNumber,
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
        isInvoice,
        receiverProvince,
        isCustomerCreateDeclaration,
        bookingDetail: detailsBooking.map((v) => {
          const { numb22, ...res } = v;
          return {
            ...res,
          };
        }),
      },
      invoice: {
        invoiceDetail: configDetailsInvoice,
        typeItemInvoice,
        invoiceType,
        senderInformation: senderAddressVi,
        receiverInformation: receiverAddress,
        importers: importProceduresPerson,
        invoiceDate: moment(dataCreateBooking?.invoiceDate).format(
          'YYYY-MM-DD'
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

    if (moment(`${estimatedDate} ${estimateHour}`).isAfter(Date.now())) {
      if (id) {
        mutateUpdate({
          booking: isInvoice ? booking : booking2,
          id,
        });
      } else {
        mutateCreate({
          booking: isInvoice ? booking : booking2,
          handleSetId,
          handleSetStatus,
        });
      }
    } else {
      notification.error({
        message: 'Vui lòng chọn ngày và giờ giao hàng sau thời gian hiện tại',
        placement: 'top',
      });
    }
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

    const bulkyWeightValue = 0;
    const quantityValue = 0;
    const weightValue = 0;

    const totalNetWeight = res
      .map(({ weight }) => weight)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        weightValue
      );

    const totalBulkyWeight = res
      .map(({ bulkyWeight }) => bulkyWeight)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        bulkyWeightValue
      );
    const totalBaleNumber = res
      .map(({ quantity }) => quantity)
      .reduce(
        (previousValue, currentValue) =>
          parseFloat(previousValue) + parseFloat(currentValue),
        quantityValue
      );
    const goodsSize = res.map(({ height, width, longs }, index) => {
      if (index === res.length - 1) {
        return `${height} x ${width} x ${longs}`;
      }
      return `${height} x ${width} x ${longs},`;
    });
    form.setFieldsValue({
      totalNetWeight,
      totalBulkyWeight,
      totalBaleNumber,
      goodsSize,
    });
  };

  const handleDeleteRow = (id: any) => {
    const res = detailsBooking.filter((x, index) => id !== index);
    setDetailsBooking(res);
  };

  const handleDeleteInvoice = (id: any) => {
    const res = detailsInvoice.filter((x, index) => id !== index);
    setDetailsInvoice(res);
  };

  const { mutate: genBillPatner } = useMutation(generateBillPatner, {
    onSuccess: () => {
      queryClient.invalidateQueries(['generateBillPatner']);
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
    if (id) {
      generatorBill(id);
    }
  };

  const handleGeneratorInvoice = () => {
    if (id) {
      generatorInvoice(id);
    }
  };

  const handleNewForm = async () => {
    await form.resetFields();

    setId(undefined);
    setDetailsBooking([]);
    setDetailsInvoice([]);

    const custome = {
      senderNameVi: userData?.fullName || '',
      senderPhoneNumber: userData?.phoneNumber || '',
      senderCountry: userData?.country || '',
      senderProvince: userData?.province || '',
      senderAddressVi: userData?.detailAddress || '',
      senderPostalCode: userData?.postalCode || '',
      senderContactPerson: userData?.contactPerson || '',
    };
    await form.setFieldsValue({
      ...custome,
    });
  };

  const updateStatus = () => {
    if (id) {
      mutateUpdateStautsBooking({
        id,
        handleSetStatus,
      });
    }
  };

  const handleGeneratorBillPartner = () => {
    if (id) {
      genBillPatner(id);
    }
  };

  return (
    <div>
      <p className='text-2xl font-bold text-yellow-primary'>
        Tạo Booking Hàng xuất
      </p>
      <div className='my-5 flex gap-4'>
        <Button onClick={onSubmit} type='primary' disabled={id ? true : false}>
          Lưu
        </Button>
        <Button
          onClick={onSubmit}
          type='primary'
          disabled={
            !id || statusBooking !== BookingStatusPost.NOT_YET_HANDED_OVER
          }
        >
          Cập nhật đơn hàng
        </Button>
        {billPartner && (
          <Button
            onClick={handleGeneratorBillPartner}
            type='primary'
            disabled={!id}
            icon={<PrinterOutlined />}
          >
            In Bill đối tác
          </Button>
        )}
        <Button
          onClick={updateStatus}
          type='primary'
          disabled={statusBooking !== BookingStatusPost.NOT_YET_HANDED_OVER}
        >
          Xác nhận đơn hàng
        </Button>
        <Button
          onClick={handleGenerataeBill}
          type='primary'
          disabled={!id}
          icon={<PrinterOutlined />}
        >
          In Bill
        </Button>
        <Button
          onClick={handleGeneratorInvoice}
          type='primary'
          disabled={!id || !isInvoice}
          icon={<PrinterOutlined />}
        >
          In Invoice
        </Button>
        <Button
          onClick={() => setIsInvoice(!isInvoice)}
          type='primary'
          disabled={
            statusBooking === BookingStatusPost.DONE ||
            statusBooking === BookingStatusPost.CANCEL ||
            statusBooking === BookingStatusPost.HANDED_OVER
          }
        >
          {isInvoice ? 'Không Invoice' : 'Có Invoice'}
        </Button>
        <Button onClick={handleNewForm} type='primary'>
          Tạo bookings mới
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
            serivcesSelected={selected}
            handleServicesSelected={onSelect}
            value={value}
            handleSetValue={handleSetValue}
            handleSetBillPartner={(e) => setBillPartner(e)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Invoice' key='invoice' disabled={!isInvoice}>
          <InVoice
            form={form}
            dataUser={userData}
            sendAddress={addressCustome}
            detailsInvoice={detailsInvoice}
            isInvoice={isInvoice}
            receiverCustome={receiverCustome}
            handleAddInvoiceDetails={handleAddInvoiceDetails}
            handleDeleteInvoice={handleDeleteInvoice}
            handleUpdateBookingInvoice={handleUpdateBookingInvoice}
            serivcesSelected={selected}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
