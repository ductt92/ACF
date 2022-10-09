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
      <Spin spinning={isLoading || isFetching}>
        <Viewbooking data={data} />
      </Spin>
    </Modal>
  );
};

export default ModalViewBooking;
