import { DatePicker, Form, FormInstance, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { EServiceRequest } from '@/contants/types';
const { Option } = Select;
const { RangePicker } = DatePicker;

const PriceCustomer = ({ form }: { form: FormInstance }) => {
  const EServiceRequestOpition = Object.entries(EServiceRequest).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  return (
    <Form form={form}>
      <div className='h-[calc(70vh)] overflow-y-auto p-4'>
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='service'
            rules={[{ required: true, message: 'Vui lòng dịch vụ' }]}
          >
            <VSelect label='Dịch vụ' required>
              {EServiceRequestOpition.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='priceListCode'
            rules={[{ required: true, message: 'Vui lòng nhập mã bảng giá' }]}
          >
            <VInput label='Mã bảng giá' required />
          </Form.Item>

          <Form.Item
            name='timePrice'
            rules={[{ required: true, message: 'Vui lòng nhập mã bảng giá' }]}
          >
            <p className='m-0 p-0'>
              Thời gian áp dụng mã bảng giá{' '}
              <span className='text-[red]'>*</span>
            </p>
            <RangePicker
              placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
              format='DD/MM/YYYY'
              className='w-full'
            />
          </Form.Item>

          <Form.Item
            name='surcharge'
            rules={[{ required: true, message: 'Vui lòng nhập mã bảng giá' }]}
          >
            <VInput label='Phụ phí xăng dầu áp dụng' required />
          </Form.Item>

          <Form.Item
            name='applicableRate'
            rules={[{ required: true, message: 'Vui lòng nhập mã bảng giá' }]}
          >
            <VInput label='Tỷ giá áp dụng' required />
          </Form.Item>
          <Form.Item name='note'>
            <VInput label='Note' required />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default PriceCustomer;
