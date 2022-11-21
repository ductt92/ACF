/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Modal, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import { ICustomer } from '@/contants/types';
import { updateCustomer } from '@/services/customer.services';

import ContractCustomer from './ContractCustomer';
import InfoCustomer from './InfoCustomer';

interface IProps {
  onClose: (value: boolean) => void;
  value?: ICustomer;
}
const ModalEditCustomer = ({ onClose, value }: IProps) => {
  const [isExpertise, setExpertise] = useState<any>(1);

  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const handleChangeExpertise = (value: any) => {
    setExpertise(value);
  };
  const { mutate: mutateCreate, isLoading: isCreating } = useMutation(
    updateCustomer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_CUSTOMER.GET_CUSTOMER);
        notification.success({
          message: 'Cập nhật khách hàng thành công',
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

  const onSubmit = async () => {
    const requestData: ICustomer = await form.validateFields();
    const rs = {
      ...value,
      ...requestData,
      expertise: isExpertise === 1 ? true : false,
      commitmentRate: parseFloat(requestData.commitmentRate.toString()),
    };
    const {
      id,
      customerCode,
      staffId,
      userId,
      gender,
      dob,
      addressDetail,
      createdAt,
      updatedAt,
      user,
      staff,
      unit,
      ...res
    } = rs;
    mutateCreate({
      id: value?.id || '',
      data: res,
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      ...value,
      paymentSchedule: moment(value?.paymentSchedule),
      expertise: value?.expertise ? 1 : 0,
    });
    setExpertise(value?.expertise ? 1 : 0);
    return () => {
      form.resetFields();
    };
  }, [form, value]);

  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-medium'>
          Sửa thông tin khách hàng
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
              expertise={isExpertise}
              onChangeEx={handleChangeExpertise}
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
          Cập nhật thông tin khách hàng
        </Button>
      </div>
    </Modal>
  );
};

export default ModalEditCustomer;
