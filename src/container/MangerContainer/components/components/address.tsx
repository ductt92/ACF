import { Divider, Form, FormInstance, Select } from 'antd';
import React, { useEffect } from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { IUser } from '@/contants/types';
import { countries } from '@/contants/types/Country';

interface AddressProps {
  form: FormInstance;
  dataUser: IUser | undefined;
}

const { Option } = Select;

const Address = ({ form, dataUser }: AddressProps) => {
  useEffect(() => {
    form.setFieldsValue({
      senderName: dataUser?.fullName,
      senderPhoneNumber: dataUser?.phoneNumber,
      senderContactPerson: dataUser?.contactPerson,
      senderMobile: dataUser?.phoneNumber,
      senderCountry: dataUser?.country,
      senderCommune: dataUser?.commune,
      senderDistrict: dataUser?.district,
      senderProvince: dataUser?.province,
      senderPostalCode: dataUser?.postalCode,
      senderState: dataUser?.state,
      senderAddress: dataUser?.detailAddress,
    });
  }, [dataUser, form]);

  return (
    <div className='mb-24'>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Địa chỉ người gửi</p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='senderName'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập người gửi',
              },
            ]}
          >
            <VInput label='Người gửi' required />
          </Form.Item>

          <Form.Item
            name='senderContactPerson'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập người liên hệ',
              },
            ]}
          >
            <VInput label='Người liên hệ' required />
          </Form.Item>

          <Form.Item
            name='senderPhoneNumber'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập sđt người gửi',
              },
            ]}
          >
            <VInput label='Số điện thoại' required />
          </Form.Item>

          <Form.Item
            name='senderMobile'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mobile',
              },
            ]}
          >
            <VInput label='Mobile' required />
          </Form.Item>

          <Form.Item
            name='senderCountry'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập quốc gia',
              },
            ]}
          >
            <VSelect label='Quốc gia' required showSearch>
              {countries.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='senderCommune'>
            <VInput label='Phường/xã' />
          </Form.Item>

          <Form.Item name='senderDistrict'>
            <VInput label='Quận/Huyện' />
          </Form.Item>

          <Form.Item
            name='senderProvince'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Tỉnh/Thành phố',
              },
            ]}
          >
            <VInput label='Tỉnh/Thành phố' required />
          </Form.Item>

          <Form.Item name='senderPostalCode'>
            <VInput label='Mã bưu chính' />
          </Form.Item>

          <Form.Item name='senderState'>
            <VInput label='Tiểu bang' />
          </Form.Item>
        </div>
        <Form.Item
          name='senderAddress'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập địa chỉ chi tiết người gửi',
            },
          ]}
        >
          <VInput label='Địa chỉ chi tiết người gửi' required />
        </Form.Item>

        <p className='m-0 p-0 font-bold'>2.Địa chỉ người nhận</p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='receiverName'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập người nhận',
              },
            ]}
          >
            <VInput label='Người nhận' required />
          </Form.Item>

          <Form.Item
            name='receiverContactPerson'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập người liên hệ',
              },
            ]}
          >
            <VInput label='Người liên hệ' required />
          </Form.Item>

          <Form.Item
            name='receiverPhoneNumber'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại',
              },
            ]}
          >
            <VInput label='Số điện thoại' required />
          </Form.Item>

          <Form.Item
            name='receiverMobile'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mobile',
              },
            ]}
          >
            <VInput label='Mobile' required />
          </Form.Item>

          <Form.Item
            name='receiverCountry'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập quốc gia',
              },
            ]}
          >
            <VSelect label='Quốc gia' required showSearch>
              {countries.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='receiverCommune'>
            <VInput label='Phường/xã' />
          </Form.Item>

          <Form.Item name='receiverDistrict'>
            <VInput label='Quận/Huyện' />
          </Form.Item>

          <Form.Item
            name='receiverProvince'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Tỉnh/Thành phố',
              },
            ]}
          >
            <VInput label='Tỉnh/Thành phố' required />
          </Form.Item>

          <Form.Item
            name='receiverPostalCode'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mã bưu chính',
              },
            ]}
          >
            <VInput label='Mã bưu chính' required />
          </Form.Item>
          <Form.Item name='receiverState'>
            <VInput label='Tiểu bang' />
          </Form.Item>
        </div>

        <Form.Item
          name='receiverAddress'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Địa chỉ chi tiết người nhận',
            },
          ]}
        >
          <VInput label='Địa chỉ chi tiết người nhận' required />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Address;
