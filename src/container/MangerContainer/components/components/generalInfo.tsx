import { Divider, Form, FormInstance } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';

interface GeneralInfomationProps {
  form: FormInstance;
}

const GeneralInfomation = ({ form }: GeneralInfomationProps) => {
  return (
    <div>
      <p className='m-0 p-0 font-bold'>Thông tin chung </p>
      <Divider className='bg-yellow' />

      <Form form={form}>
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='type'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại booking (Chứng từ, hàng hóa)',
              },
            ]}
          >
            <VInput label='test' required />
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
            <VInput label='test' required />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfomation;
