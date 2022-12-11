/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Table } from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { columnsContract } from '@/contants/columns/my-booking.columns';
import { EFixedPriceCode, ETypeContract, IContract } from '@/contants/types';
import {
  getCountry,
  getSmallServices,
  getStaff,
} from '@/services/customer.services';

import ModalCreateContract from './ModalCreateContract';
interface ContractCustomer {
  form: FormInstance;
  detailsContract: Array<any>;
  handleAddContract: (data: any) => void;
}
const ContractCustomer = ({
  form,
  detailsContract,
  handleAddContract,
}: ContractCustomer) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contractFrom] = Form.useForm<IContract>();
  const [isExpertise, setExpertise] = useState<any>(0);
  const [servicesId, setServicesId] = useState<string>();
  const { data: dataSmallServices } = useQuery(['smallSerices', {}], () =>
    getSmallServices()
  );
  const { data: countryContract, isLoading: countryContractLoading } = useQuery(
    ['countryContract', { servicesId }],
    () => getCountry(servicesId)
  );
  const handleChangeExpertise = (value: any) => {
    setExpertise(value);
  };

  const { data: dataStaff } = useQuery(['getStaff', {}], () => getStaff());

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

  const CountryZoneOpition = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (countryContract?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return countryContract?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [countryContract]);

  const OpitionSmallServices = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSmallServices?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSmallServices?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [dataSmallServices]);
  const EFixedPriceOpition = Object.entries(EFixedPriceCode).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const ETypeContractOpition = Object.entries(ETypeContract).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const handleChangeServices = (value: string) => {
    setServicesId(value);
  };
  const onHandleAddContract = async () => {
    const res = await contractFrom.validateFields();
    handleAddContract({ ...res, expertise: isExpertise });
    setIsOpen(false);
    setExpertise(0);
    contractFrom.resetFields();
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
            opitionServices: OpitionSmallServices || [],
            opitionTypeContract: ETypeContractOpition || [],
            opitionFixedPriceCode: EFixedPriceOpition || [],
            opitionCountryZone: CountryZoneOpition || [],
            opitionStaff: OpitionStaff || [],
          })}
          dataSource={detailsContract}
          bordered
          scroll={{ y: 700, x: 800 }}
        />
      </div>

      <ModalCreateContract
        form={contractFrom}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        expertise={isExpertise}
        handleChangeEx={handleChangeExpertise}
        opitonServices={OpitionSmallServices}
        handleChangeServices={handleChangeServices}
        handleAddContract={onHandleAddContract}
        opitionTypeContract={ETypeContractOpition}
        opitionFixedPriceCode={EFixedPriceOpition}
        opitionCountryZone={CountryZoneOpition}
        countryContractLoading={countryContractLoading}
        opitionStaff={OpitionStaff}
      />
    </div>
  );
};

export default ContractCustomer;
