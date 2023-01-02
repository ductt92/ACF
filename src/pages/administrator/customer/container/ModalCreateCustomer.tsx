/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Modal, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import { createCustomer } from '@/services/customer.services';

import ContractCustomer from '../components/ContractCustomer/ContractCustomer';
import InfoCustomer from '../components/InfoCustomer/InfoCustomer';
import InFoNew from '../components/InfoNew/InforNew';
import InfoStaff from '../components/InfoStaff/InfoStaff';
import OrdersCode from '../components/OrdersCode/OrdersCode';

interface IProps {
  onClose: (value: boolean) => void;
}
const ModalCreateCustomer = ({ onClose }: IProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [detailsContract, setDetailsContract] = useState<Array<any>>([]);
  const [infoStaff, setInfoStaff] = useState<Array<any>>([]);

  const [detailsOrder, setDetailsOrder] = useState<Array<any>>([]);
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
    const requestData: any = await form.validateFields();
    const res = {
      ...requestData,
      contract: detailsContract.map((newRes) => {
        const { contactTerm, timeAplly, ...detailsContract } = newRes;
        return {
          ...detailsContract,
          expertise: detailsContract.expertise === 1 ? true : false,
          contractTermFrom: moment(contactTerm[0]).format('YYYY-MM-DD'),
          contractTermTo: moment(contactTerm[1]).format('YYYY-MM-DD'),
        };
      }),

      managementStaff: infoStaff,
      priceList: detailsOrder.map((v) => {
        const { timeApply, ...resDetails } = v;
        return {
          ...resDetails,
          timeApplyFrom: moment(timeApply[0]).format('YYYY-MM-DD'),
          timeApplyTo: moment(timeApply[1]).format('YYYY-MM-DD'),
          surcharge: resDetails.surcharge.toString(),
        };
      }),
    };
    const { ...resNew } = res;
    mutateCreate({
      ...resNew,
    });
  };

  const handleAddContract = (data: any) => {
    setDetailsContract((prev) => [...prev, data]);
  };
  const handleUpdateContract = (data: any) => {
    setDetailsContract(data);
  };

  const handleAddStaff = (data: any) => {
    setInfoStaff((prev) => [...prev, data]);
  };
  const handleUpdateStaff = (data: any) => {
    setInfoStaff(data);
  };

  const handleDeleteStaff = (id: any) => {
    const res = infoStaff.filter((x, index) => id !== index);
    setInfoStaff(res);
  };

  const handleDeleteContract = (id: any) => {
    const res = infoStaff.filter((x, index) => id !== index);
    setInfoStaff(res);
  };

  const handleAddOrder = (data: any) => {
    setDetailsOrder((prev) => [...prev, data]);
  };

  const handleUpdateOrder = (data: any) => {
    setDetailsOrder(data);
  };
  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        Tạo mới khách hàng
      </div>
    );
  };

  return (
    <Modal
      footer={null}
      title={renderHeader()}
      closeIcon={<CloseOutlined className='text-[24px]' />}
      visible={true}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(60vw)]'
    >
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
              handleDeleteContract={handleDeleteContract}
              handleUpdateContract={handleUpdateContract}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab='Bảng giá' key='Orderss'>
            <OrdersCode
              // form={form}
              detailsOrder={detailsOrder}
              handleAddOrder={handleAddOrder}
              handleUpdateOrder={handleUpdateOrder}
              handleDeleteContract={handleDeleteContract}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab='Chi tiết' key='DetailsCustomer'>
            <InFoNew form={form} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Thông tin nhân viên' key='InfoStaff'>
            <InfoStaff
              handleDelete={handleDeleteStaff}
              form={form}
              infoStaff={infoStaff}
              handleAddStaff={handleAddStaff}
              handleUpdateStaff={handleUpdateStaff}
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
