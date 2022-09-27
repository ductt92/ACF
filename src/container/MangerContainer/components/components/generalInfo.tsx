import { Divider, Form, FormInstance, Select } from 'antd';
import React from 'react';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTimePicker from '@/components/common/VTimePicker';

import {
  DeliveryConditions,
  FORMAT_DATE_DD_MM_YYYY,
} from '@/contants/common.constants';
import { BookingType, ServiceEnum, TypeOfPayment } from '@/contants/types';
const { Option } = Select;
interface GeneralInfomationProps {
  form: FormInstance;
}

const GeneralInfomation = ({ form }: GeneralInfomationProps) => {
  const OpitionServiceBooking = Object.entries(ServiceEnum).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionDeliveryConditions = Object.entries(DeliveryConditions).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const OpitionTypePayment = Object.entries(TypeOfPayment).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  return (
    <div>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Thông tin chung </p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item name='partnerBillCode'>
            <VInput label='Mã bill đối tác' />
          </Form.Item>

          <Form.Item
            name='serviceBooking'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VSelect label='Dịch vụ' required>
              {OpitionServiceBooking.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='deliveryConditions'>
            <VSelect label='Điều kiện giao hàng' required>
              {OpitionDeliveryConditions.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='type'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại booking (Chứng từ, hàng hóa)',
              },
            ]}
          >
            <VSelect label='Loại booking (Chứng từ, hàng hóa)' required>
              {OpitionType.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <div className='grid grid-cols-2 gap-x-6'>
            <Form.Item
              name='estimatedDate'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thời gian dự kiến lấy hàng',
                },
              ]}
            >
              <VDatePicker
                label='Ngày dự kiến lấy hàng'
                format={FORMAT_DATE_DD_MM_YYYY}
                required
              />
              {/* <TimePicker format={HH_MM} /> */}
            </Form.Item>

            <Form.Item
              name='estimateHour'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thời gian dự kiến lấy hàng',
                },
              ]}
            >
              <VTimePicker
                format='HH:mm'
                label='Giờ dự kiến lấy hàng'
                required
              />
            </Form.Item>
          </div>

          <Form.Item name='note'>
            <VInput label='Note' />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.Hình thức thanh toán </p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='typeOfPayment'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại thanh toán',
              },
            ]}
          >
            <VSelect label='Loại hình thanh toán' required>
              {OpitionTypePayment.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          {/* Chi Tiết booking */}
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfomation;
