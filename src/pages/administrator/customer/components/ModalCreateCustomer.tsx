/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Modal, notification, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import { ICustomer } from '@/contants/types';
import { createCustomer } from '@/services/customer.services';

import ContractCustomer from './ContractCustomer';
import InfoCustomer from './InfoCustomer';
import InFoNew from './InforNew';
import InfoStaff from './InfoStaff';

interface IProps {
  onClose: (value: boolean) => void;
}
const ModalCreateCustomer = ({ onClose }: IProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [detailsContract, setDetailsContract] = useState<Array<any>>([]);
  const [infoStaff, setInfoStaff] = useState<Array<any>>([]);

  const { mutate: mutateCreate, isLoading: isCreating } = useMutation(
    createCustomer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_CUSTOMER.GET_CUSTOMER);
        notification.success({
          message: 'Tạo mới tài khoản thành công',
          placement: 'top',
        });
        onClose(false);
      },
      onError: () => {
        notification.error({
          message: 'Something went wrong',
          placement: 'top',
        });
      },
    }
  );

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form]);

  const onSubmit = async () => {
    const requestData: ICustomer = await form.validateFields();
    const res = {
      ...requestData,
    };
    mutateCreate({
      ...res,
    });
  };

  const handleAddContract = (data: any) => {
    setDetailsContract((prev) => [...prev, data]);
  };

  const handleAddStaff = (data: any) => {
    setInfoStaff((prev) => [...prev, data]);
  };

  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(60vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-medium'>
          Tạo mới khách hàng
        </p>
      </div>
      <div>
        <Tabs type='card'>
          <Tabs.TabPane tab='Thông tin chung' key='infoCustomer'>
            <InfoCustomer form={form} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Hợp đồng' key='Contract'>
            <ContractCustomer
              form={form}
              detailsContract={detailsContract}
              handleAddContract={handleAddContract}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Chi tiết' key='DetailsCustomer'>
            <InFoNew form={form} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Thông tin nhân viên' key='InfoStaff'>
            <InfoStaff
              form={form}
              infoStaff={infoStaff}
              handleAddStaff={handleAddStaff}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>

      <div className='mt-4 flex justify-start'>
        <Button
          onClick={onSubmit}
          loading={isCreating}
          htmlType='submit'
          type='primary'
        >
          Tạo mới khách hàng
        </Button>
      </div>
    </Modal>
  );
};

export default ModalCreateCustomer;
