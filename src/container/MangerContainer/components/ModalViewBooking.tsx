import { Modal, Spin } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { getBookingById } from '@/services/booking.services';

import Viewbooking from './components/ViewBooking';

type ModalViewBookingProps = {
  onClose: (value: boolean) => void;
  id?: string;
};
const ModalViewBooking = ({ id, onClose }: ModalViewBookingProps) => {
  const { data, isLoading, isFetching } = useQuery(
    ['ModalViewBooking', { id }],
    () => getBookingById(id)
  );

  return (
    <Modal
      footer={null}
      visible={true}
      destroyOnClose
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(70vw)]'
    >
      <div className='h-[calc(80vh)] overflow-y-auto p-5'>
        <p className='text-lg'>Chi tiết đơn hàng</p>
        <Spin spinning={isLoading || isFetching}>
          <Viewbooking data={data} />
        </Spin>
      </div>
    </Modal>
  );
};

export default ModalViewBooking;
