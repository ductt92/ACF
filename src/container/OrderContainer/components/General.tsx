/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Form, FormInstance, Radio, Select, Table } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTimePicker from '@/components/common/VTimePicker';

import { renderBookingDetailsNoAction } from '@/contants/columns/my-booking.columns';
import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';
import { BookingType, DetailsBookingPost } from '@/contants/types';
import {
  fetchCommoditiesTypeId,
  fetchDeliveryCondition,
  fetchServicesBooking,
  fetchShippingType,
  fetchTypeOfPayment,
} from '@/services/booking.services';
const { Option } = Select;

const General = ({
  form,
  value,
  dataDetails,
}: {
  form: FormInstance;
  value: any;
  dataDetails: Array<DetailsBookingPost>;
}) => {
  const { data: dataSerivicesBooknig } = useQuery(
    ['dataSerivicesBooknig', {}],
    () => fetchServicesBooking()
  );
  const { data: DataCommoditiesTypeId } = useQuery(
    ['DataCommoditiesTypeId', {}],
    () => fetchCommoditiesTypeId()
  );

  const { data: DataShippingType } = useQuery(['DataShippingType', {}], () =>
    fetchShippingType()
  );

  const OpitionShippingType = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataShippingType?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataShippingType?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [DataShippingType]);

  const OpitionCommoditiesTypeId = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataCommoditiesTypeId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataCommoditiesTypeId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [DataCommoditiesTypeId]);

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

  const { data: dataDelivery } = useQuery(['fetchDeliveryCondition', {}], () =>
    fetchDeliveryCondition()
  );

  const OpitionDeliveryConditions = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataDelivery?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataDelivery?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataDelivery]);

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const { data: fetchTypeOfPaymentId } = useQuery(
    ['fetchTypeOfPaymentId', {}],
    () => fetchTypeOfPayment()
  );

  const OpitionTypePayment = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (fetchTypeOfPaymentId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return fetchTypeOfPaymentId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [fetchTypeOfPaymentId]);

  return (
    <div className='mb-20 h-full'>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Th??ng tin chung </p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='serviceBookingId'
            rules={[
              {
                required: true,
                message: 'Vui l??ng ch???n lo???i d???ch v???',
              },
            ]}
          >
            <VSelect label='D???ch v???' required disabled isHorizal>
              {OpitionServiceBooking?.map((v: any) => (
                <Option key={v.value}>{v.label}</Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='deliveryConditionId'>
            <VSelect label='??i???u ki???n giao h??ng' required disabled isHorizal>
              {OpitionDeliveryConditions?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='type'>
            <VSelect
              label='Lo???i booking (Ch???ng t???, h??ng h??a)'
              required
              disabled
              isHorizal
            >
              {OpitionType.map((v) => (
                <Option key={v.value}>{v.label}</Option>
              ))}
            </VSelect>
          </Form.Item>

          <div className='grid grid-cols-2 gap-x-6'>
            <Form.Item name='estimatedDate'>
              <VDatePicker
                label='Ng??y d??? ki???n l???y h??ng'
                format={FORMAT_DATE_DD_MM_YYYY}
                required
                disabled
                isHorizal
              />
            </Form.Item>

            <Form.Item name='estimateHour'>
              <VTimePicker
                format='HH:mm'
                label='Gi??? d??? ki???n l???y h??ng'
                required
                disabled
                isHorizal
              />
            </Form.Item>
          </div>

          <Form.Item name='note'>
            <VInput label='Note' disabled isHorizal />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.H??nh th???c thanh to??n </p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item name='typeOfPaymentId'>
            <VSelect label='Lo???i h??nh thanh to??n' required disabled isHorizal>
              {OpitionTypePayment?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          {/* Chi Ti???t booking */}
        </div>
        <p className='m-0 p-0 font-bold'>3.T??? khai h???i quan</p>
        <div className='flex flex-col gap-4'>
          <Radio.Group value={value} disabled>
            <Radio value={1}>Kh??ng</Radio>
            <Radio value={2}>C??</Radio>
          </Radio.Group>
          {value === 2 && (
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='isCustomerCreateDeclaration'>
                <VSelect label='Lo???i m??? t??? khai' required disabled isHorizal>
                  <Option value={false}>ACF m??? t??? khai h???i quan</Option>
                  <Option value={true}>Kh??ch h??ng m??? t??? khai h???i quan</Option>
                </VSelect>
              </Form.Item>
              <Form.Item name='customsDeclarationNumber'>
                <VInput label='S??? t??? khai h???i quan' required disabled />
              </Form.Item>
            </div>
          )}
        </div>
        <Divider className='bg-yellow' />

        <p className='m-0 p-0 font-bold'>4.Chi ti???t booking </p>
        <Divider className='bg-yellow' />

        <div>
          <Table
            columns={renderBookingDetailsNoAction(
              OpitionCommoditiesTypeId,
              OpitionShippingType
            )}
            rowKey='key'
            scroll={{ y: 450, x: 500 }}
            className='cursor-pointer'
            dataSource={dataDetails}
            pagination={{
              showSizeChanger: false,
            }}
            bordered
          />
        </div>
      </Form>
    </div>
  );
};
export default General;
