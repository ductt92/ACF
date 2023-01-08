/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from 'antd';
import React from 'react';

import { renderColumsInfoItem } from '../../../../../utils/contants/columns.contants';
import { BookingDetailPU } from '../../../../../utils/contants/services';

type InfoCheckpoint = {
  data: Array<BookingDetailPU>;
  handleDelete: (id: any) => void;
  handleOpenCreate: () => void;
  handleUpdatePickUp: () => void;
  handleUpdate: (data: any) => void;
  status: any;
};

const InfoCheckpoint = ({
  data,
  handleDelete,
  handleOpenCreate,
  handleUpdatePickUp,
  handleUpdate,
  status,
}: InfoCheckpoint) => {
  return (
    <div className='flex flex-col'>
      <Table
        columns={renderColumsInfoItem({
          handleDelete,
          isDisable: status === 2,
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
          disabled={status === 2}
        >
          Thêm mới kiện hàng
        </Button>
        <Button
          className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
          disabled={status !== 1}
          onClick={handleUpdatePickUp}
        >
          Xác nhận đã xử lý đơn hàng
        </Button>
      </div>
    </div>
  );
};

export default InfoCheckpoint;
