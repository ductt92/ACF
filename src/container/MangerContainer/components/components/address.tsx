/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Form, FormInstance, Select } from 'antd';
import React, { useEffect } from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { AddressCustomer, IUser } from '@/contants/types';
import { countries } from '@/contants/types/Country';

interface AddressProps {
  form: FormInstance;
  dataUser: IUser | undefined;
  addressCustome: Partial<AddressCustomer> | undefined;
  handleChangeInfoSender: (name: string, value: any) => void;
  handleChangeInfoRecei: (name: string, value: any) => void;
}

const { Option } = Select;

const Address = ({
  form,
  dataUser,
  addressCustome,
  handleChangeInfoSender,
  handleChangeInfoRecei,
}: AddressProps) => {
  useEffect(() => {
    form.setFieldsValue({
      senderNameVi: addressCustome?.senderNameVi,
      senderPhoneNumber: addressCustome?.senderPhoneNumber,
      senderContactPerson: dataUser?.contactPerson,
      senderMobile: dataUser?.phoneNumber,
      senderCountry: addressCustome?.senderCountry,
      senderCommune: dataUser?.commune,
      senderDistrict: dataUser?.district,
      senderProvince: addressCustome?.senderProvince,
      senderPostalCode: dataUser?.postalCode,
      senderState: dataUser?.state,
      senderAddressVi: addressCustome?.senderAddressVi,
    });
  }, [addressCustome, dataUser, form]);

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
            <VInput
              label='Tên công ty gửi (Tiếng Việt)'
              required
              onChange={(e) =>
                handleChangeInfoSender('senderNameVi', e.target.value)
              }
            />
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
            <VInput
              label='Địa chỉ chi tiết (Tiếng Việt)'
              required
              onChange={(e) =>
                handleChangeInfoSender('senderAddressVi', e.target.value)
              }
            />
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
            <VInput
              label='Số điện thoại gửi'
              required
              onChange={(e) =>
                handleChangeInfoSender('senderAddressVi', e.target.value)
              }
            />
          </Form.Item>

          <Form.Item name='senderProvince'>
            <VInput
              label='Tỉnh/Thành phố'
              onChange={(e) =>
                handleChangeInfoSender('senderProvince', e.target.value)
              }
            />
          </Form.Item>

          <Form.Item name='senderCountry'>
            <VSelect
              label='Quốc gia'
              required
              showSearch
              onChange={(e) => handleChangeInfoSender('senderCountry', e)}
            >
              {countries.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='senderPostalCode'>
            <VInput
              label='Mã bưu chính (postcode)'
              onChange={(e) =>
                handleChangeInfoSender('senderPostalCode', e.target.value)
              }
            />
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
            <VInput
              label='Tên công ty nhận'
              required
              onChange={(e) =>
                handleChangeInfoRecei('receiverName', e.target.value)
              }
            />
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
            <VInput
              label='Địa chỉ nhận hàng chi tiết'
              required
              onChange={(e) =>
                handleChangeInfoRecei('receiverAddress', e.target.value)
              }
            />
          </Form.Item>

          <Form.Item name='receiverProvince'>
            <VInput
              label='Thành phố'
              onChange={(e) =>
                handleChangeInfoRecei('receiverProvince', e.target.value)
              }
            />
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
            <VInput
              label='Mã bưu chính (postcode)'
              required
              onChange={(e) =>
                handleChangeInfoRecei('receiverPostalCode', e.target.value)
              }
            />
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
            <VSelect
              label='Quốc gia'
              required
              showSearch
              onChange={(e) => handleChangeInfoRecei('receiverPostalCode', e)}
            >
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
                message: 'Vui lòng nhập Số điện thoại người nhận',
              },
            ]}
          >
            <VInput label='Số điện thoại người nhận' required />
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
