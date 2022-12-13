/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Table } from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { columsStaff } from '@/contants/columns/my-booking.columns';
import { getStaffAll } from '@/services/booking.services';

import ModalCreateStaff from './ModalCreateStaff';
interface InfoStaffProps {
  form: FormInstance;
  infoStaff: Array<any>;
  handleDelete: (id: any) => void;
  handleAddStaff: (data: any) => void;
}
const InfoStaff = ({
  form,
  handleAddStaff,
  infoStaff,
  handleDelete,
}: InfoStaffProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createStaff] = Form.useForm();
  const { data: dataStaff } = useQuery(['fetchDeliveryCondition', {}], () =>
    getStaffAll()
  );
  const onHandleAddStaff = async () => {
    const res = await createStaff.validateFields();
    handleAddStaff(res);
    createStaff.resetFields();
    setIsOpen(false);
  };

  const OptionStaff = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataStaff?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataStaff?.map((v) => ({
        value: v.id,
        label: `${v.staffCode}- ${v.fullName}`,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataStaff]);

  return (
    <div className='h-[calc(70vh)] gap-4 overflow-y-auto p-4'>
      <div className='flex flex-col gap-4'>
        <Button
          type='primary'
          onClick={() => setIsOpen(true)}
          className='w-[150px]'
        >
          Thêm mới nhân viên
        </Button>
        <Table
          columns={columsStaff(OptionStaff, handleDelete)}
          dataSource={infoStaff}
          bordered
        />
      </div>
      <ModalCreateStaff
        form={createStaff}
        isOpen={isOpen}
        opitonStaff={OptionStaff || []}
        handleClose={() => setIsOpen(false)}
        handleAddStaff={onHandleAddStaff}
      />
    </div>
  );
};

export default InfoStaff;
