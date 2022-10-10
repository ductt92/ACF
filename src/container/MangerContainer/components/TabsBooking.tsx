/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { FormInstance, Tabs } from 'antd';
import React from 'react';

import { AddressCustomer, DetailsBookingPost } from '@/contants/types';

import AddOnServices from './components/addOnServices';
import Address from './components/address';
import GeneralInfomation from './components/generalInfo';

interface TabsBookingProps {
  form: FormInstance;
  detailsBooking: Array<DetailsBookingPost>;
  handleAddBookingDetails: (form: any) => void;
  userData: any;
  addressCustome?: Partial<AddressCustomer>;
  handleDeleteRow: (id: any) => void;
  handleUpdateBookingDetails: (form: any) => void;
  handleChangeInfoSender: (name: string, value: any) => void;
  handleChangeInfoRecei: (name: string, value: any) => void;
  serivcesSelected: any;
  handleServicesSelected: (e: any) => void;
}

const TabsBooking = ({
  form,
  handleAddBookingDetails,
  handleDeleteRow,
  handleUpdateBookingDetails,
  detailsBooking,
  userData,
  addressCustome,
  handleChangeInfoSender,
  handleChangeInfoRecei,
  serivcesSelected,
  handleServicesSelected,
}: TabsBookingProps) => {
  return (
    <div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Thông tin chung' key='general-information'>
          <GeneralInfomation
            form={form}
            dataDetails={detailsBooking}
            serivcesSelected={serivcesSelected}
            handleServicesSelected={handleServicesSelected}
            handleUpdateBookingDetails={handleUpdateBookingDetails}
            handleAddBookingDetails={handleAddBookingDetails}
            handleDeleteRow={handleDeleteRow}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Địa chỉ' key='address'>
          <Address
            form={form}
            dataUser={userData}
            handleChangeInfoSender={handleChangeInfoSender}
            handleChangeInfoRecei={handleChangeInfoRecei}
            addressCustome={addressCustome}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Dịch vụ gia tăng' key='tabs-3'>
          <AddOnServices />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabsBooking;
