/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInstance, Tabs } from 'antd';
import React from 'react';

import { DetailsBookingPost } from '@/contants/types';

import AddressDetails from './AddressDetails';
import General from './General';

const TabsDetailsBooking = ({
  form,
  detailsBooking,
  value,
}: {
  form: FormInstance;
  detailsBooking: Array<DetailsBookingPost>;
  value: any;
}) => {
  return (
    <div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Thông tin chung' key='general-information'>
          <General form={form} dataDetails={detailsBooking} value={value} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Địa chỉ' key='address'>
          <AddressDetails form={form} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabsDetailsBooking;
