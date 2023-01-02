import { Divider, Form, FormInstance, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { countries } from '@/contants/types/Country';
const { Option } = Select;
const AddressDetails = ({ form }: { form: FormInstance }) => {
  return (
    <div className='mb-24'>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Địa chỉ người gửi</p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item name='senderNameVi'>
            <VInput
              label='Tên công ty gửi (Tiếng Việt)'
              required
              disabled
              isHorizal
            />
          </Form.Item>

          <Form.Item name='senderNameEn'>
            <VInput label='Tên công ty gửi (Tiếng Anh)' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderAddressVi'>
            <VInput
              label='Địa chỉ chi tiết (Tiếng Việt)'
              required
              disabled
              isHorizal
            />
          </Form.Item>

          <Form.Item name='senderAddressEn'>
            <VInput label='Địa chỉ chi tiết (Tiếng Anh)' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderContactPerson'>
            <VInput label='Tên người gửi hàng' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderDepartment'>
            <VInput label='Phòng ban gửi' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderPhoneNumber'>
            <VInput label='Số điện thoại gửi' required disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderProvince'>
            <VInput label='Tỉnh/Thành phố' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderCountry'>
            <VSelect label='Quốc gia' required disabled isHorizal>
              {countries.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='senderPostalCode'>
            <VInput label='Mã bưu chính (postcode)' disabled isHorizal />
          </Form.Item>

          <Form.Item name='senderNote'>
            <VInput label='Ghi chú' disabled isHorizal />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.Địa chỉ người nhận</p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item name='receiverName'>
            <VInput label='Tên công ty nhận' required disabled isHorizal />
          </Form.Item>
          <Form.Item name='receiverAddress'>
            <VInput
              label='Địa chỉ nhận hàng chi tiết'
              required
              disabled
              isHorizal
            />
          </Form.Item>

          <Form.Item name='receiverProvince'>
            <VInput label='Thành phố' disabled isHorizal />
          </Form.Item>

          <Form.Item name='receiverPostalCode'>
            <VInput
              label='Mã bưu chính (postcode)'
              required
              disabled
              isHorizal
            />
          </Form.Item>

          <Form.Item name='receiverCountry'>
            <VSelect label='Quốc gia' required showSearch disabled isHorizal>
              {countries.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='receiverContactPerson'>
            <VInput label='Người nhận hàng' required disabled isHorizal />
          </Form.Item>

          <Form.Item name='receiverPhoneNumber'>
            <VInput
              label='Số điện thoại người nhận'
              required
              disabled
              isHorizal
            />
          </Form.Item>

          <Form.Item name='receiverDepartment'>
            <VInput label='Phòng ban nhận hàng' disabled isHorizal />
          </Form.Item>
          <Form.Item name='receiverNote'>
            <VInput label='Ghi chú' disabled isHorizal />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddressDetails;
