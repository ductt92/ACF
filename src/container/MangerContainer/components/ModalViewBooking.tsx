import { CloseOutlined } from '@ant-design/icons';
import { Modal, Spin } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { getBookingById } from '@/services/booking.services';

import Viewbooking from './components/ViewBooking';

type ModalViewBookingProps = {
  onClose: (value: boolean) => void;
  id?: string | undefined;
};
const ModalViewBooking = ({ id, onClose }: ModalViewBookingProps) => {
  const { data, isLoading, isFetching } = useQuery(
    ['ModalViewBooking', { id }],
    () => getBookingById(id)
  );
  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        Chi tiết đơn hàng
      </div>
    );
  };
  return (
    <Modal
      footer={null}
      visible={true}
      title={renderHeader()}
      destroyOnClose
      closeIcon={<CloseOutlined className='text-[24px]' />}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(70vw)] sm:top-0 sm:w-screen'
    >
      <Spin spinning={isLoading || isFetching}>
        <Viewbooking data={data} />
      </Spin>
    </Modal>
  );
};

export default ModalViewBooking;
