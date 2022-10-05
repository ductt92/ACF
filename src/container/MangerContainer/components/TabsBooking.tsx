/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { FormInstance, Tabs } from 'antd';
import React from 'react';

import { DetailsBookingPost } from '@/contants/types';

import AddOnServices from './components/addOnServices';
import Address from './components/address';
import GeneralInfomation from './components/generalInfo';

interface TabsBookingProps {
  form: FormInstance;
  detailsBooking: Array<DetailsBookingPost>;
  handleAddBookingDetails: (form: any) => void;
  userData: any;
  handleDeleteRow: (id: any) => void;
  handleUpdateBookingDetails: (form: any) => void;
}

const TabsBooking = ({
  form,
  handleAddBookingDetails,
  handleDeleteRow,
  handleUpdateBookingDetails,
  detailsBooking,
  userData,
}: TabsBookingProps) => {
  return (
    <div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Thông tin chung' key='general-information'>
          <GeneralInfomation
            form={form}
            dataDetails={detailsBooking}
            handleUpdateBookingDetails={handleUpdateBookingDetails}
            handleAddBookingDetails={handleAddBookingDetails}
            handleDeleteRow={handleDeleteRow}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Địa chỉ' key='address'>
          <Address form={form} dataUser={userData} />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Dịch vụ gia tăng' key='tabs-3'>
          <AddOnServices />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabsBooking;
