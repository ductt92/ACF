/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Table } from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { columsOrdersCode } from '@/contants/columns/my-booking.columns';
import { EFixedPriceCode } from '@/contants/types';
import { getSmallServices } from '@/services/customer.services';

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

  const [orderForm] = Form.useForm();

  const { data: dataSmallServices } = useQuery(['smallSerices', {}], () =>
    getSmallServices()
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

  const handleChangeServices = (value: string) => {
    setServicesId(value);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const actionUpdate = (record: any) => {
    setIsUpdate(true);
    orderForm.setFieldsValue({ ...record });
    setIdUpdate(record.idKey);
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
          isOpen={isOpen || isUpdate}
          handleClose={() => (isUpdate ? setIsUpdate(false) : setIsOpen(false))}
          opitonServices={OpitionSmallServices || []}
          isUpdate={isUpdate}
          opitionFixedPriceCode={EFixedPriceOpition || []}
          handleAddOrder={ActionhandleAddOrder}
          handleChangeServices={handleChangeServices}
        />
      </div>
    </div>
  );
};

export default OrdersCode;
