/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormInstance, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VRangePicker from '@/components/common/VRangeDate';
import VSelect from '@/components/common/VSelect';

import { ETypePayment } from '@/contants/types';

const { Option } = Select;
type InFoNew = {
  form: FormInstance;
};
const DirectBeneficiaryOpititon = [
  { value: true, label: 'Trực tiếp' },
  { value: false, label: 'Người thân' },
];
const OpitionTypeofPayment = Object.entries(ETypePayment).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);

const InFoNew = ({ form }: InFoNew) => {
  return (
    <div>
      <Form form={form}>
        <div className='h-[calc(70vh)] overflow-y-auto p-4'>
          <div>
            <p className='text-xl'>1. Thông tin chung</p>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='beneficiary'>
                <VInput
                  label='Tên người thụ hưởng'
                  placeholder='Nhập Tên người thụ hưởng'
                />
              </Form.Item>
              <Form.Item name='jobTitle'>
                <VInput label='Chức vụ' placeholder='Nhập chức vụ' />
              </Form.Item>
              <Form.Item name='beneficiaryPhone'>
                <VInput
                  label='SĐT người thụ hưởng'
                  placeholder='Nhập SĐT người thụ hưởng'
                />
              </Form.Item>

              <Form.Item name='isDirectBeneficiary'>
                <VSelect
                  label='Người trực tiếp hưởng hay người thân'
                  placeholder='Chọn người trực tiếp hưởng hay người thân'
                >
                  {DirectBeneficiaryOpititon.map((v: any) => (
                    <Option value={v.value} key={`${v.value}`}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='relationshipBeneficiaries'>
                <VInput
                  label='Quan hệ với người thụ hưởng'
                  placeholder='Nhập quan hệ với người thụ hưởng'
                />
              </Form.Item>
              <Form.Item name='beneficiaryAccountNumber'>
                <VInput
                  label='Số tài khoản thụ hưởng'
                  placeholder='Nhập Số tài khoản thụ hưởng'
                />
              </Form.Item>
              <Form.Item name='beneficiaryBank'>
                <VInput
                  label='Ngân hàng thụ hưởng'
                  placeholder='Nhập ngân hàng thụ hưởng'
                />
              </Form.Item>
              <Form.Item name='lkdRate'>
                <VInput
                  label='Tỷ lệ LKD/Giá bán gốc chưa phụ phí'
                  placeholder='Nhập tỷ lệ LKD/Giá bán gốc chưa phụ phí'
                />
              </Form.Item>
              <Form.Item name='beneficiaryNote'>
                <VInput label='Ghi chú' placeholder='Nhập Ghi chú' />
              </Form.Item>
            </div>
          </div>
          <div>
            <p className='text-xl'>2. Tài chính</p>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='typeOfPayment'>
                <VSelect label='Loại thanh toán' required>
                  {OpitionTypeofPayment.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='previousCosing'>
                <VRangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  label='Kỳ chốt cước'
                />
              </Form.Item>

              <Form.Item name='financeNote'>
                <VInput label='Ghi chú' placeholder='Nhập ghi chú' />
              </Form.Item>
            </div>
          </div>

          <div>
            <p className='text-xl'>3. Thông tin gửi Bảng kê</p>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='notifyEmail'>
                <VInput
                  label='Email bảng kê theo thông tin KH'
                  placeholder='Nhập Email Bảng kê theo thông tin KH'
                />
              </Form.Item>
              <Form.Item name='notifyOtherEmail'>
                <VInput
                  label='Email bổ sung thêm ngoài email của KH ban đầu'
                  placeholder='Nhập Email bổ sung thêm ngoài email của KH ban đầu'
                />
              </Form.Item>
              <Form.Item name='notifyContactPerson'>
                <VInput
                  label=' Người liên hệ'
                  placeholder='Nhập Người liên hệ'
                />
              </Form.Item>
              <Form.Item name='bookingEmail'>
                <VInput
                  label='Danh sách mail gửi bảng kê tự động'
                  placeholder='Nhập Danh sách mail gửi bảng kê tự động'
                />
              </Form.Item>
              <Form.Item name='bookingPhone'>
                <VInput label='SĐT' placeholder='Nhập SĐT' />
              </Form.Item>
              <Form.Item name='bookingMobile'>
                <VInput label='Số di động' placeholder='Nhập số di động' />
              </Form.Item>
            </div>
          </div>
          <div>
            <p className='text-xl'>4. Thông tin gửi hóa đơn điện tử</p>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='orderEmailCustomer'>
                <VInput
                  label='Email hóa đơn theo thông tin KH'
                  placeholder='Nhập Email hóa đơn theo thông tin KH'
                />
              </Form.Item>
              <Form.Item name='orderOtherEmail'>
                <VInput
                  label='Email bổ sung thêm ngoài email của KH ban đầu'
                  placeholder='Nhập Email bổ sung thêm ngoài email của KH ban đầu'
                />
              </Form.Item>
              <Form.Item name='orderContactPerson'>
                <VInput
                  label='Người liên hệ'
                  placeholder='Nhập Người liên hệ'
                />
              </Form.Item>
              <Form.Item name='orderEmail'>
                <VInput
                  label='Danh sách mail gửi hóa đơn tự động'
                  placeholder='Nhập Danh sách mail gửi hóa đơn tự động'
                />
              </Form.Item>
              <Form.Item name='orderPhone'>
                <VInput label='Số di động' placeholder='Nhập Số di động' />
              </Form.Item>
            </div>

            <div>
              <p className='text-xl'>5. Thông tin thu nợ</p>

              <div className='grid grid-cols-2 gap-x-6'>
                <Form.Item name='debtContactPerson'>
                  <VInput
                    label='Người liên hệ'
                    placeholder='Nhập Người liên hệ'
                  />
                </Form.Item>
                <Form.Item name='debtEmail'>
                  <VInput
                    label=' Email thu nợ'
                    placeholder='Nhập  Email thu nợ'
                  />
                </Form.Item>
                <Form.Item name='debtPhone'>
                  <VInput
                    label='Số điện thoại'
                    placeholder='Nhập Số điện thoại'
                  />
                </Form.Item>
                <Form.Item name='debtMobile'>
                  <VInput label='Số di động' placeholder='Nhập Số di động' />
                </Form.Item>
                <Form.Item name='debtAddress'>
                  <VInput
                    label='Địa chỉ thu nợ'
                    placeholder='Nhập Địa chỉ thu nợ'
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default InFoNew;
