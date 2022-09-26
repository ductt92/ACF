import { FormInstance, Tabs } from 'antd';
import React from 'react';

import AddOnServices from './components/addOnServices';
import Address from './components/address';
import GeneralInfomation from './components/generalInfo';

interface TabsBookingProps {
  form: FormInstance;
}

const TabsBooking = ({ form }: TabsBookingProps) => {
  return (
    <div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Thông tin chung' key='general-information'>
          <GeneralInfomation form={form} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Địa chỉ' key='address'>
          <Address form={form} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Dịch vụ gia tăng' key='tabs-3'>
          <AddOnServices />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabsBooking;
