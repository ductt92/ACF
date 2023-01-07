/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from 'antd';
import React from 'react';

import { renderColumsInfoItem } from '../../../../../utils/contants/columns.contants';
import { BookingDetailPU } from '../../../../../utils/contants/services';

type InfoCheckpoint = {
  data: Array<BookingDetailPU>;
  handleDelete: (id: any) => void;
  handleOpenCreate: () => void;
  isDisable: boolean;
  handleUpdatePickUp: () => void;
  handleUpdate: (data: any) => void;
};

const InfoCheckpoint = ({
  data,
  isDisable,
  handleDelete,
  handleOpenCreate,
  handleUpdatePickUp,
  handleUpdate,
}: InfoCheckpoint) => {
  return (
    <div className='flex flex-col'>
      <Table
        columns={renderColumsInfoItem({
          handleDelete,
          isDisable,
          handleUpdate,
        })}
        rowKey='key'
        // onChange={handlePagination}
        className='cursor-pointer px-6'
        dataSource={data}
        pagination={false}
      />
      <div className='mt-4 flex flex-row items-center justify-center gap-4'>
        <Button
          className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
          onClick={handleOpenCreate}
          disabled={isDisable}
        >
          Thêm mới kiện hàng
        </Button>
        <Button
          className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
          disabled={isDisable}
          onClick={handleUpdatePickUp}
        >
          Xác nhận đã xử lý đơn hàng
        </Button>
      </div>
    </div>
  );
};

export default InfoCheckpoint;
