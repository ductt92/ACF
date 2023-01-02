import { CloseOutlined } from '@ant-design/icons';
import { Modal, Spin } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { getBookingById } from '@/services/booking.services';

import ViewBookingDetails from './components/ViewBookingDetails';

type ModalViewBookingProps = {
  id?: string;
  onClose: (value: boolean) => void;
};

const ModalViewDetailsBooking = ({ id, onClose }: ModalViewBookingProps) => {
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
      closeIcon={<CloseOutlined className='text-[24px]' />}
      destroyOnClose
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(70vw)]'
    >
      <Spin spinning={isLoading || isFetching}>
        <ViewBookingDetails data={data} />
      </Spin>
    </Modal>
  );
};

export default ModalViewDetailsBooking;
