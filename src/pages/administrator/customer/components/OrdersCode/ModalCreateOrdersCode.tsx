/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Modal, Select, Spin } from 'antd';
import React from 'react';
const { Option } = Select;

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { OpitionType } from '@/contants/types';
import { mockdataDemo } from '@/utils/ultils';
interface ModalCreateStaffProps {
  form: FormInstance;
  isOpen: boolean;
  isUpdate: boolean;
  otherPrice: any;
  handleClose: () => void;
  opitonServices: Array<OpitionType>;
  servicesId?: string;
  opitionFixedPriceCode: Array<OpitionType>;
  handleAddOrder: (data: any) => void;
  handleChangeServices: (id: string) => void;
  handleChangeOtherPrice: (value: any) => void;
}
const ModalCreateOrdersCode = ({
  form,
  isOpen,
  otherPrice,
  handleChangeOtherPrice,
  handleClose,
  opitonServices,
  isUpdate,
  opitionFixedPriceCode,
  servicesId,
  handleChangeServices,
  handleAddOrder,
}: ModalCreateStaffProps) => {
  return (
    <Modal
      footer={null}
      visible={isOpen || isUpdate}
      onCancel={handleClose}
      destroyOnClose
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <Form form={form}>
        <Spin spinning={false}>
          <div className='h-[calc(70vh)] overflow-y-auto p-4'>
            <p className='text-center text-xl'>
              {isUpdate ? 'Cập nhật bảng giá' : 'Thêm mới bảng giá'}
            </p>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='serviceRequestId'
                rules={[
                  { required: true, message: 'Vui lòng chọn dịch vụ yêu cầu' },
                ]}
              >
                <VSelect
                  label='Dịch vụ yêu cầu'
                  required
                  onChange={handleChangeServices}
                >
                  {opitonServices?.map((v: OpitionType) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='potentialRevenueFrom'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập Doanh thu tiềm năng từ (triệu đồng)',
                  },
                ]}
              >
                <VInputNumber
                  label='Doanh thu tiềm năng từ (triệu đồng)'
                  placeholder='Nhập Doanh thu tiềm năng từ'
                  required
                />
              </Form.Item>

              <Form.Item
                name='potentialRevenueTo'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập Doanh thu tiềm năng đến (triệu đồng)',
                  },
                ]}
              >
                <VInputNumber
                  label='Doanh thu tiềm năng đến (triệu đồng)'
                  placeholder='Nhập Doanh thu tiềm năng đến (triệu đồng)'
                  required
                />
              </Form.Item>

              {servicesId && (
                <Form.Item name='fixedPriceCode'>
                  <VSelect
                    label='Mã bảng giá cố định'
                    onChange={handleChangeOtherPrice}
                  >
                    {opitionFixedPriceCode.map((v) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              )}

              {otherPrice === 'OTHER_PRICE' &&
                mockdataDemo(servicesId).length === 0 && (
                  <Form.Item name='otherPrice'>
                    <VInput label='Giá khác' placeholder='Giá khác' required />
                  </Form.Item>
                )}

              {otherPrice === 'OTHER_PRICE' &&
                mockdataDemo(servicesId).length === 0 && (
                  <Form.Item
                    name='otherPrice'
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng nhập Doanh thu tiềm năng đến (triệu đồng)',
                      },
                    ]}
                  >
                    <VInput
                      label='Tỷ lệ giảm giá (Đánh tỷ lệ %)'
                      placeholder='Tỷ lệ giảm giá (Đánh tỷ lệ %)'
                      required
                    />
                  </Form.Item>
                )}

              {otherPrice === 'OTHER_PRICE' &&
                mockdataDemo(servicesId).length === 0 && (
                  <Form.Item name='notePrice'>
                    <VInput label='Ghi chú' placeholder='Nhập ghi chú' />
                  </Form.Item>
                )}
            </div>

            {otherPrice === 'OTHER_PRICE' &&
              mockdataDemo(servicesId).length > 0 &&
              mockdataDemo(servicesId).map((v) => (
                <div key={v} className='grid grid-cols-2 gap-x-6'>
                  <Form.Item name={v} key={v}>
                    <VInput label={`Nhập Tỷ lệ giảm giá (Đánh tỷ lệ %) ${v}`} />
                  </Form.Item>

                  <Form.Item name='notePrice'>
                    <VInput label={`Ghi chú ${v}`} placeholder='Nhập ghi chú' />
                  </Form.Item>
                </div>
              ))}
          </div>
        </Spin>
        <Button type='primary' onClick={handleAddOrder}>
          {isUpdate ? 'Cập nhật mã bảng giá' : 'Tạo mới mã bảng giá'}
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateOrdersCode;
