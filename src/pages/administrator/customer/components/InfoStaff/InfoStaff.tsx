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
  handleUpdateStaff: (data: any) => void;
}
const InfoStaff = ({
  form,
  handleAddStaff,
  infoStaff,
  handleDelete,
  handleUpdateStaff,
}: InfoStaffProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createStaff] = Form.useForm();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [idUpdate, setIdUpdate] = useState('');
  const { data: dataStaff } = useQuery(['fetchDeliveryCondition', {}], () =>
    getStaffAll()
  );
  const onHandleAddStaff = async () => {
    const res = await createStaff.validateFields();

    if (isUpdate) {
      const updateStaff = infoStaff.map((x, index) => {
        if (parseInt(idUpdate) === index) {
          const { idKey, ...resetForm } = res;
          return resetForm;
        } else {
          return x;
        }
      });
      handleUpdateStaff(updateStaff);
      setIsOpen(false);
      setIsUpdate(false);
      setIdUpdate('');
    } else {
      handleAddStaff(res);
      createStaff.resetFields();
      setIsOpen(false);
    }
  };
  const handleActionUpdateStaff = (record: any) => {
    setIsUpdate(true);
    createStaff.setFieldsValue({ ...record });
    setIdUpdate(record.idKey);
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
          columns={columsStaff({
            arrayStaff: OptionStaff,
            handleDelete,
            handleUpdate: handleActionUpdateStaff,
          })}
          dataSource={infoStaff}
          bordered
        />
      </div>
      <ModalCreateStaff
        form={createStaff}
        isOpen={isOpen || isUpdate}
        isUpdate={isUpdate}
        opitonStaff={OptionStaff || []}
        handleClose={() => (isUpdate ? setIsUpdate(false) : setIsOpen(false))}
        handleAddStaff={onHandleAddStaff}
      />
    </div>
  );
};

export default InfoStaff;
