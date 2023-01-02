import { Spin } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { myBookingHome } from '@/services/booking.services';

import TableView from './components/TableView';

const HomeManager = () => {
  const { data, isLoading, isFetching } = useQuery(
    ['ModalViewBooking', {}],
    () => myBookingHome()
  );
  return (
    <Spin spinning={isFetching || isLoading}>
      <div className='mx-auto w-[1234px] bg-pussy-color p-4 sm:w-full'>
        <TableView
          data={data?.bookingHandedOver || []}
          title='Đơn hàng đã xác nhận '
        />
      </div>
      <div className='mx-auto w-[1234px] bg-pussy-color p-4 sm:w-full'>
        <TableView
          data={data?.bookingNotYetHandedOver || []}
          title='Đơn hàng chưa xác nhận '
        />
      </div>
    </Spin>
  );
};

export default HomeManager;
