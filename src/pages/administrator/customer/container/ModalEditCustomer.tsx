/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Modal, notification, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import { ICustomer } from '@/contants/types';
import { generateOrderCode } from '@/services/booking.services';
import { updateCustomer } from '@/services/customer.services';

import ContractCustomer from '../components/ContractCustomer/ContractCustomer';
import InfoCustomer from '../components/InfoCustomer/InfoCustomer';
import InFoNew from '../components/InfoNew/InforNew';
import InfoStaff from '../components/InfoStaff/InfoStaff';
import OrdersCode from '../components/OrdersCode/OrdersCode';

interface IProps {
  onClose: (value: boolean) => void;
  value?: ICustomer;
}
const ModalEditCustomer = ({ onClose, value }: IProps) => {
  const [form] = Form.useForm();
  const [detailsContract, setDetailsContract] = useState<Array<any>>([]);
  const [infoStaff, setInfoStaff] = useState<Array<any>>([]);
  const [detailsOrder, setDetailsOrder] = useState<Array<any>>([]);

  const queryClient = useQueryClient();

  const { mutate: genOrderCode, isLoading: generateSmallBillLoading } =
    useMutation(generateOrderCode, {
      onSuccess: () => {
        queryClient.invalidateQueries(['generateInVoice']);
        notification.success({
          message: 'Tải xuống thành công',
          placement: 'top',
        });
      },
      onError: () => {
        notification.error({
          message: 'Tải xuống thất bại',
          placement: 'top',
        });
      },
    });
  const handleAddContract = (data: any) => {
    setDetailsContract((prev) => [...prev, data]);
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
    const requestData: any = await form.validateFields();
    const res = {
      ...value,
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

    const {
      previousCosing,
      id,
      customerCode,
      staffId,
      userId,
      gender,
      dob,
      createdAt,
      updatedAt,
      user,
      staff,
      unit,
      ...resNew
    } = res;
    mutateCreate({
      id: value?.id || '',
      data: resNew,
    });
  };

  const handleAddStaff = (data: any) => {
    setInfoStaff((prev) => [...prev, data]);
  };

  useEffect(() => {
    form.setFieldsValue({
      ...value,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    const contactF = value.contract.map((v) => ({
      ...v,
      contactTerm: [v.contractTermFrom, v.contractTermTo],
    }));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setInfoStaff(value?.managementStaff || []);
    setDetailsContract(contactF);

    setDetailsOrder(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      value?.priceList.map((v: any) => ({
        ...v,
        timeApply: [v.timeApplyFrom, v.timeApplyTo],
      }))
    );
  }, [form, value]);

  const handleDeleteStaff = (id: any) => {
    const res = infoStaff.filter((x, index) => id !== index);
    setInfoStaff(res);
  };
  const handleUpdateContract = (data: any) => {
    setDetailsContract(data);
  };
  const handleDeleteContract = (id: any) => {
    console.log(id);
    const res = detailsOrder.filter((x, index) => id !== index);
    setDetailsOrder(res);
  };

  const handleUpdateStaff = (data: any) => {
    setInfoStaff(data);
  };

  const handleAddOrder = (data: any) => {
    setDetailsOrder((prev) => [...prev, data]);
  };

  const handleUpdateOrder = (data: any) => {
    setDetailsOrder(data);
  };

  const handleGenOrderCode = () => {
    if (value?.id) {
      genOrderCode(value?.id);
    }
  };

  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        Sửa thông tin khách hàng
      </div>
    );
  };

  return (
    <Modal
      footer={null}
      visible={true}
      title={renderHeader()}
      closeIcon={<CloseOutlined className='text-[24px]' />}
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
              generateSmallBillLoading={generateSmallBillLoading}
              detailsOrder={detailsOrder}
              handleGenOrderCode={handleGenOrderCode}
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
              handleUpdateStaff={handleUpdateStaff}
              form={form}
              infoStaff={infoStaff}
              handleAddStaff={handleAddStaff}
              handleDelete={handleDeleteStaff}
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
