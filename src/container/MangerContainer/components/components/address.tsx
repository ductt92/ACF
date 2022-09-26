import { Divider, Form, FormInstance } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';

interface AddressProps {
  form: FormInstance;
}

const Address = ({ form }: AddressProps) => {
  return (
    <div>
      <p className='m-0 p-0 font-bold'>Thông tin chung </p>
      <Divider className='bg-yellow' />

      <Form form={form}>
        <Form.Item
          name='type2'
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn loại booking (Chứng từ, hàng hóa)',
            },
          ]}
        >
          <VInput label='test' />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Address;
