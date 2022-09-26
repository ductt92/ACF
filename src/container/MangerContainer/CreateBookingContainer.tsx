import { Button, Form, Tabs } from 'antd';
import React from 'react';

import InVoice from './components/Invoice';
import TabsBooking from './components/TabsBooking';

const CreateBookingContainer = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    // const res = await form.validateFields();
  };
  return (
    <div>
      <p className='text-2xl font-bold text-yellow-primary'>
        Tạo Booking Hàng xuất
      </p>
      <div className='my-5'>
        <Button onClick={onSubmit}>Click</Button>
      </div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Booking' key='Booking'>
          <TabsBooking form={form} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Invoice' key='invoice'>
          <InVoice />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CreateBookingContainer;
