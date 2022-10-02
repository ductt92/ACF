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
      senderNameVi: dataUser?.fullName,
      senderPhoneNumber: dataUser?.phoneNumber,
      senderContactPerson: dataUser?.contactPerson,
      senderMobile: dataUser?.phoneNumber,
      senderCountry: dataUser?.country,
      senderCommune: dataUser?.commune,
      senderDistrict: dataUser?.district,
      senderProvince: dataUser?.province,
      senderPostalCode: dataUser?.postalCode,
      senderState: dataUser?.state,
      senderAddressVi: dataUser?.detailAddress,
    });
  }, [dataUser, form]);

  return (
    <div className='mb-24'>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Địa chỉ người gửi</p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='senderNameVi'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Tên công ty gửi (Tiếng Việt)',
              },
            ]}
          >
            <VInput label='Tên công ty gửi (Tiếng Việt)' required />
          </Form.Item>

          <Form.Item name='senderNameEn'>
            <VInput label='Tên công ty gửi (Tiếng Anh)' />
          </Form.Item>

          <Form.Item
            name='senderAddressVi'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Địa chỉ chi tiết (Tiếng Việt)',
              },
            ]}
          >
            <VInput label='Địa chỉ chi tiết (Tiếng Việt)' required />
          </Form.Item>

          <Form.Item name='senderAddressEn'>
            <VInput label='Địa chỉ chi tiết (Tiếng Anh)' />
          </Form.Item>

          <Form.Item name='senderContactPerson'>
            <VInput label='Tên người gửi hàng' />
          </Form.Item>

          <Form.Item name='senderDepartment'>
            <VInput label='Phòng ban gửi' />
          </Form.Item>

          <Form.Item
            name='senderPhoneNumber'
            rules={[
              {
                required: true,
                message: 'Số điện thoại gửi',
              },
            ]}
          >
            <VInput label='Số điện thoại gửi' required />
          </Form.Item>

          <Form.Item name='senderNote'>
            <VInput label='Ghi chú' />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.Địa chỉ người nhận</p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='receiverName'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Tên công ty nhận',
              },
            ]}
          >
            <VInput label='Tên công ty nhận' required />
          </Form.Item>
          <Form.Item
            name='receiverAddress'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Địa chỉ nhận hàng chi tiết',
              },
            ]}
          >
            <VInput label='Địa chỉ nhận hàng chi tiết' required />
          </Form.Item>

          <Form.Item
            name='receiverPostalCode'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Mã bưu chính (postcode)',
              },
            ]}
          >
            <VInput label='Mã bưu chính (postcode)' required />
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

          <Form.Item
            name='receiverContactPerson'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Người nhận hàng',
              },
            ]}
          >
            <VInput label='Người nhận hàng' required />
          </Form.Item>

          <Form.Item
            name='receiverPhoneNumber'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Số điện thoại người gửi',
              },
            ]}
          >
            <VInput label='Số điện thoại người gửi' required />
          </Form.Item>

          <Form.Item name='receiverDepartment'>
            <VInput label='Phòng ban nhận hàng' />
          </Form.Item>
          <Form.Item name='receiverNote'>
            <VInput label='Ghi chú' />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Address;
