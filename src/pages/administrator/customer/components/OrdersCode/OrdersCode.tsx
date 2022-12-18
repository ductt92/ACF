/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { columsOrdersCode } from '@/contants/columns/my-booking.columns';
import { EFixedPriceCode } from '@/contants/types';
import { getCountry, getSmallServices } from '@/services/customer.services';

import ModalCreateOrdersCode from './ModalCreateOrdersCode';

const OrdersCode = ({
  detailsOrder,
  handleDeleteContract,
  handleAddOrder,
  handleUpdateOrder,
}: {
  detailsOrder: Array<any>;
  handleDeleteContract: (id: any) => void;
  handleAddOrder: (id: any) => void;
  handleUpdateOrder: (data: any) => void;
}) => {
  const [servicesId, setServicesId] = useState<string>();
  const [idUpdate, setIdUpdate] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [otherPrice, setOtherPrice] = useState<any>();
  const [orderForm] = Form.useForm();

  const { data: dataSmallServices } = useQuery(['smallSerices', {}], () =>
    getSmallServices()
  );
  const { data: dataZone } = useQuery(['dataZone', { servicesId }], () =>
    getCountry(servicesId)
  );

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

  const handleSetForm = async (value: any) => {
    orderForm.setFieldsValue({
      otherPrices: value?.map((v: any) => ({
        countryContractId: v?.id,
      })),
    });
  };

  const handleChangeServices = (value: string) => {
    setServicesId(value);
  };
  const handleChangeOtherPrice = (value: any) => {
    setOtherPrice(value);
  };

  const actionUpdate = (record: any) => {
    setIsUpdate(true);
    orderForm.setFieldsValue({
      ...record,
      timeApply: [dayjs(record.timeApplyFrom), dayjs(record.timeApplyTo)],
    });
    setOtherPrice(record.fixedPriceCode);
    setIdUpdate(record.idKey);
    setServicesId(record.serviceRequestId);
  };

  const ActionhandleAddOrder = async () => {
    const res = await orderForm.validateFields();
    if (isUpdate) {
      const updateStaff = detailsOrder.map((x, index) => {
        if (parseInt(idUpdate) === index) {
          const { idKey, ...resetForm } = res;
          return resetForm;
        } else {
          return x;
        }
      });
      handleUpdateOrder(updateStaff);
      setIsOpen(false);
      setIsUpdate(false);
      setIdUpdate('');
      orderForm.resetFields();
    } else {
      handleAddOrder(res);
      orderForm.resetFields();
      setIsOpen(false);
    }
  };
  return (
    <div className='h-[calc(70vh)] overflow-y-auto p-4'>
      <div className='flex flex-col gap-4'>
        <Button
          onClick={() => setIsOpen(true)}
          type='primary'
          className='w-[150px]'
        >
          Thêm mới bảng giá
        </Button>
        <Table
          columns={columsOrdersCode({
            opitionServices: OpitionSmallServices || [],
            opitionFixedPriceCode: EFixedPriceOpition || [],
            handleDelete: handleDeleteContract,
            handleUpdate: actionUpdate,
          })}
          dataSource={detailsOrder}
          bordered
          scroll={{ y: 700, x: 800 }}
        />

        <ModalCreateOrdersCode
          form={orderForm}
          servicesId={servicesId}
          isOpen={isOpen || isUpdate}
          handleClose={() => (isUpdate ? setIsUpdate(false) : setIsOpen(false))}
          opitonServices={OpitionSmallServices || []}
          isUpdate={isUpdate}
          dataZone={dataZone}
          otherPrice={otherPrice}
          handleSetForm={handleSetForm}
          handleChangeOtherPrice={handleChangeOtherPrice}
          opitionFixedPriceCode={EFixedPriceOpition || []}
          handleAddOrder={ActionhandleAddOrder}
          handleChangeServices={handleChangeServices}
        />
      </div>
    </div>
  );
};

export default OrdersCode;
