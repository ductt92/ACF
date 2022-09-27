/* eslint-disable unused-imports/no-unused-vars */
import { FormInstance, Tabs } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { QueryParams } from '@/contants/common.constants';
import { fetchUser } from '@/services/booking.services';

import AddOnServices from './components/addOnServices';
import Address from './components/address';
import GeneralInfomation from './components/generalInfo';

interface TabsBookingProps {
  form: FormInstance;
}

const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 20,
  search: '',
};

const TabsBooking = ({ form }: TabsBookingProps) => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);

  const { data: userData } = useQuery(['getuser', queries], () => fetchUser());

  return (
    <div>
      <Tabs type='card'>
        <Tabs.TabPane tab='Thông tin chung' key='general-information'>
          <GeneralInfomation form={form} />
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
