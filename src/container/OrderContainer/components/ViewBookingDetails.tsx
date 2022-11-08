/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrinterOutlined } from '@ant-design/icons';
import { Button, Form, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  DetailsBookingPost,
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
  OpitionType,
} from '@/contants/types';
import {
  fetchCurrentUnit,
  fetchServicesBooking,
  generateBill,
  generateBillPatner,
  generateInvoice,
  generateSmallBill,
} from '@/services/booking.services';
import { updatePartnerBillCode } from '@/services/employee.services';

import TabsDetailsBooking from './TabsDetailsBooking';
import TabsDetailsInvoice from './TabsDetailsInvoice';

const ViewBookingDetails = ({ data }: { data: any }) => {
  const [detailsInVoice, setDetailInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );

  const [billPartner, setBillPartner] = useState<string | null | undefined>();

  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);

  const [value, setValue] = useState(1);

  const [viewBooking] = Form.useForm();
  const { mutate: handleSubmit } = useMutation(updatePartnerBillCode, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_BOOKING.GET_BOOKING]);
      notification.success({
        message: 'Cập nhật bill code thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Cập nhật thất bại',
        placement: 'top',
      });
    },
  });

  const handleSetBillCode = (bill: string) => {
    setBillPartner(bill);
  };
  const onSubmit = async () => {
    const res = await viewBooking.getFieldsValue();
    if (res.partnerBillCode) {
      handleSubmit({
        id: data?.booking?.id,
        partnerBillCode: res.partnerBillCode,
        handleSetBillCode,
      });
    } else {
      notification.error({
        message: 'Vui lòng nhập mã bill đối tác',
        placement: 'top',
      });
    }
  };

  const { data: dataSerivicesBooknig } = useQuery(
    ['dataSerivicesBooknig', {}],
    () => fetchServicesBooking()
  );

  const OpitionServiceBooking = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSerivicesBooknig?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSerivicesBooknig?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataSerivicesBooknig]);

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
  const { data: dataCurrenUnit } = useQuery(['fetchCurrentUnit', {}], () =>
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataCurrenUnit]);

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
      serviceId:
        OpitionServiceBooking?.filter(
          (x: any) => x.value === data?.invoice?.serviceId
        )[0]?.label || undefined,
    });
    const detailBooking = data?.booking?.bookingDetail?.map((v: any) => {
      const { updatedAt, createdAt, ...res } = v;
      const detailsObject = { ...res, numb22: res.bulkyWeight * res.quantity };
      return detailsObject;
    });
    setDetailInvoice(data?.invoice?.invoiceDetail || []);
    setValue(data?.booking.customsDeclarationNumber ? 2 : 1);
    setDetailsBooking(detailBooking || []);
    setBillPartner(data?.booking?.partnerBillCode);
  }, [data]);

  const queryClient = useQueryClient();
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
  const { mutate: genBillPatner } = useMutation(generateBillPatner, {
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
  const { mutate: genBillSmall, isLoading: generateSmallBillLoading } =
    useMutation(generateSmallBill, {
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

  const handleGenerataeBill = () => {
    generatorBill(data?.booking?.id);
  };
  const handleGenerataeInvoice = () => {
    generatorInvoice(data?.booking?.id);
  };

  const handleGeneratorBillPartner = () => {
    genBillPatner(data?.booking?.id);
  };
  const handleGenSmallBill = () => {
    genBillSmall(data?.booking?.id);
  };

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
          loading={generateSmallBillLoading}
          disabled={!data?.booking?.id || !data?.booking?.isInvoice}
          icon={<PrinterOutlined />}
        >
          In Invoice
        </Button>

        {billPartner && (
          <Button
            onClick={handleGeneratorBillPartner}
            type='primary'
            disabled={!data?.booking?.id}
            icon={<PrinterOutlined />}
          >
            In Bill đối tác
          </Button>
        )}
        <Button
          onClick={handleGenSmallBill}
          type='primary'
          loading={generateSmallBillLoading}
          icon={<PrinterOutlined />}
        >
          In Bill nhỏ
        </Button>
      </div>

      <div className='h-[calc(70vh)] overflow-y-auto p-5'>
        <Tabs type='card'>
          <Tabs.TabPane tab='Booking' key='Booking'>
            <TabsDetailsBooking
              form={viewBooking}
              detailsBooking={detailsBooking}
              value={value}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Invoice' key='invoice'>
            <TabsDetailsInvoice
              form={viewBooking}
              detailInVoice={detailsInVoice}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>

      <Button className='mt-5' type='primary' onClick={onSubmit}>
        Cập nhật bill đối tác
      </Button>
    </div>
  );
};

export default ViewBookingDetails;
