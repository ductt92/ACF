import { Button, Form, Modal, notification, Select } from 'antd';
import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import {
  CustomerType,
  ICustomer,
  NetWorkCustomerType,
  ServiceEnum,
} from '@/contants/types';
import { createCustomer } from '@/services/customer.services';

interface IProps {
  onClose: (value: boolean) => void;
}
const ModalCreateCustomer = ({ onClose }: IProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { Option } = Select;

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
    mutateCreate({
      ...requestData,
    });
  };

  const OpitionCustomerType = Object.entries(CustomerType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const OpitionServiceEnum = Object.entries(ServiceEnum).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const OpitionNetWorkCustomerType = Object.entries(NetWorkCustomerType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-medium'>
          Tạo mới khách hàng
        </p>
      </div>
      <div>
        <Form form={form}>
          <div className='h-[calc(70vh)] overflow-y-auto p-4'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='fullName'
                rules={[{ required: true, message: 'Vui lòng nhập hàng' }]}
              >
                <VInput
                  label='Tên khách hàng'
                  required
                  placeholder='Nhập tên khách hàng'
                />
              </Form.Item>
              <Form.Item
                name='detailAddress'
                rules={[
                  { required: true, message: 'Vui lòng địa chỉ chi tiết' },
                ]}
              >
                <VInput
                  label='Địa chỉ chi tiết'
                  required
                  placeholder='Nhập địa chỉ chi tiết'
                />
              </Form.Item>

              <Form.Item
                name='commune'
                rules={[{ required: true, message: 'Vui lòng xã/phường' }]}
              >
                <VInput label='Xã' required placeholder='Nhập xã/phường' />
              </Form.Item>

              <Form.Item
                name='district'
                rules={[{ required: true, message: 'Vui lòng quận/huyện ' }]}
              >
                <VInput
                  label='Quận/Huyện '
                  required
                  placeholder='Nhập quận/huyện '
                />
              </Form.Item>
              <Form.Item
                name='province'
                rules={[
                  { required: true, message: 'Vui lòng Tỉnh/Thành phố ' },
                ]}
              >
                <VInput
                  label='Tỉnh/Thành phố'
                  required
                  placeholder='Nhập Tỉnh/Thành phố '
                />
              </Form.Item>
              <Form.Item
                name='country'
                rules={[{ required: true, message: 'Vui lòng Quốc gia ' }]}
              >
                <VInput
                  label='Quốc gia'
                  required
                  placeholder='Nhập Quốc gia '
                />
              </Form.Item>
              <Form.Item
                name='taxCode'
                rules={[{ required: true, message: 'Vui lòng MST ' }]}
              >
                <VInput label='MST' required placeholder='Nhập MST' />
              </Form.Item>
              <Form.Item
                name='contactPerson'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng người liên hệ của khách hàng ',
                  },
                ]}
              >
                <VInput
                  label='Người liên hệ của khách hàng'
                  required
                  placeholder='Nhập người liên hệ của khách hàng'
                />
              </Form.Item>
              <Form.Item
                name='phoneNumber'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập sđt ',
                  },
                ]}
              >
                <VInput label='SĐT' required placeholder='Nhập SĐT' />
              </Form.Item>
              <Form.Item
                name='phoneCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mã vùng',
                  },
                ]}
              >
                <VInput label='Mã vùng' required placeholder='Nhập mã vùng' />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập email',
                  },
                ]}
              >
                <VInput label='Email' required placeholder='Nhập mã email' />
              </Form.Item>
              <Form.Item
                name='typeCustomer'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Loại khách hàng',
                  },
                ]}
              >
                <VSelect
                  label='Loại khách hàng'
                  required
                  placeholder='Nhập  Loại khách hàng'
                >
                  {OpitionCustomerType.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='service'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Dịch vụ sử dụng',
                  },
                ]}
              >
                <VSelect
                  label='Dịch vụ sử dụng'
                  required
                  placeholder='Nhập loại Dịch vụ sử dụng'
                >
                  {OpitionServiceEnum.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='type'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Loại khách hàng vào mạng',
                  },
                ]}
              >
                <VSelect
                  label='Loại khách hàng vào mạng'
                  required
                  placeholder='Nhập Loại khách hàng vào mạng'
                >
                  {OpitionNetWorkCustomerType.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
              <Form.Item name='postalCode'>
                <VInput label='Mã bưu chính' placeholder='Nhập Mã bưu chính' />
              </Form.Item>
              <Form.Item name='state'>
                <VInput label='Tiểu bang' placeholder='Nhập Tiểu bang' />
              </Form.Item>
              <Form.Item name='note'>
                <VInput label='Ghi chú' placeholder='Nhập ghi chú' />
              </Form.Item>
            </div>
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
        </Form>
      </div>
    </Modal>
  );
};

export default ModalCreateCustomer;
