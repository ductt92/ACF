/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormInstance } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';

import { IContract } from '@/contants/types';

import ModalCreateContract from './ModalCreateContract';
const ContractCustomer = ({
  form,
  expertise,
  onChangeEx,
}: {
  form: FormInstance;
  expertise: number;
  onChangeEx: (value: any) => void;
}) => {
  const [detailsContract, setDetailsContract] = useState<Array<any>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contractFrom] = useForm<IContract>();
  const [servicesId, setServicesId] = useState<string>();

  const handleChangeServices = (value: string) => {
    setServicesId(value);
  };
  const handleAddContract = async () => {
    const res = await contractFrom.getFieldsValue();
    console.log(res);
  };

  return (
    <div className='h-[calc(70vh)] overflow-y-auto p-4'>
      <Button onClick={() => setIsOpen(true)} type='primary'>
        Thêm hợp đồng mới
      </Button>

      <ModalCreateContract
        form={contractFrom}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        expertise={expertise}
        handleChangeEx={onChangeEx}
        servicesId={servicesId}
        handleChangeServices={handleChangeServices}
        handleAddContract={handleAddContract}
      />
    </div>
  );
};

export default ContractCustomer;
