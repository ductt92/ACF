/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Table } from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { columnsContract } from '@/contants/columns/my-booking.columns';
import { ETypeContract, IContract } from '@/contants/types';
import { getServices, getStaff } from '@/services/customer.services';

import ModalCreateContract from './ModalCreateContract';
interface ContractCustomer {
  form: FormInstance;
  detailsContract: Array<any>;
  handleAddContract: (data: any) => void;
  handleDeleteContract: (id: any) => void;
  handleUpdateContract: (id: any) => void;
}
const ContractCustomer = ({
  form,
  detailsContract,
  handleDeleteContract,
  handleAddContract,
  handleUpdateContract,
}: ContractCustomer) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contractFrom] = Form.useForm<IContract>();
  const [isExpertise, setExpertise] = useState<any>(0);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [idUpdate, setIdUpdate] = useState('');

  const handleChangeExpertise = (value: any) => {
    setExpertise(value);
  };

  const { data: dataStaff } = useQuery(['getStaff', {}], () => getStaff());
  const { data: dataService } = useQuery(['getDataServices', {}], () =>
    getServices()
  );

  const OpitionStaff = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataStaff?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataStaff?.map((v) => ({
        value: v.id,
        label: `${v.staffCode} - ${v.fullName}`,
      }));
    }
  }, [dataStaff]);

  const OpitionServices = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataService?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataService?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [dataService]);

  const ETypeContractOpition = Object.entries(ETypeContract).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const onHandleAddContract = async () => {
    const res = await contractFrom.validateFields();

    if (isUpdate) {
      const updateStaff = detailsContract.map((x, index) => {
        if (parseInt(idUpdate) === index) {
          return { ...res, createdAt: Date.now() };
        } else {
          return x;
        }
      });
      handleUpdateContract(updateStaff);
      setIsOpen(false);
      setIsUpdate(false);
      setIdUpdate('');
    } else {
      handleAddContract({
        ...res,
        expertise: isExpertise,
        createdAt: Date.now(),
      });
      setIsOpen(false);
      setExpertise(0);
      contractFrom.resetFields();
    }
  };

  const actionUpdateContract = (record: any) => {
    setIsUpdate(true);
    contractFrom.setFieldsValue({
      ...record,
    });
    setIdUpdate(record.idKey);
    setExpertise(record.expertise);
  };
  return (
    <div className='h-[calc(70vh)] overflow-y-auto p-4'>
      <div className='flex flex-col gap-4'>
        <Button
          onClick={() => setIsOpen(true)}
          type='primary'
          className='w-[150px]'
        >
          Thêm hợp đồng mới
        </Button>
        <Table
          columns={columnsContract({
            opitionTypeContract: ETypeContractOpition || [],
            opitionStaff: OpitionStaff || [],
            handleDelete: handleDeleteContract,
            handleUpdate: actionUpdateContract,
            opitionServices: OpitionServices || [],
          })}
          dataSource={detailsContract}
          bordered
          scroll={{ y: 700, x: 800 }}
        />
      </div>

      <ModalCreateContract
        form={contractFrom}
        isOpen={isOpen}
        isUpdate={isUpdate}
        onClose={() => (isUpdate ? setIsUpdate(false) : setIsOpen(false))}
        expertise={isExpertise}
        handleChangeEx={handleChangeExpertise}
        handleAddContract={onHandleAddContract}
        opitionTypeContract={ETypeContractOpition}
        opitionStaff={OpitionStaff}
        opitionServices={OpitionServices}
      />
    </div>
  );
};

export default ContractCustomer;
