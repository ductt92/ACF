/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Modal, Select, Spin } from 'antd';
import React from 'react';
const { Option } = Select;

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { OpitionType } from '@/contants/types';
interface ModalCreateStaffProps {
  form: FormInstance;
  isOpen: boolean;

  isUpdate: boolean;
  handleClose: () => void;

  opitonServices: Array<OpitionType>;

  opitionFixedPriceCode: Array<OpitionType>;
  handleAddOrder: (data: any) => void;
  handleChangeServices: (id: string) => void;
}
const ModalCreateOrdersCode = ({
  form,
  isOpen,
  handleClose,
  opitonServices,
  isUpdate,
  opitionFixedPriceCode,
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
          <div className='h-[calc(70vh)] '>
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

              <Form.Item name='fixedPriceCode'>
                <VSelect label='Mã bảng giá cố định'>
                  {opitionFixedPriceCode.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='otherPrice'>
                <VInput label='Giá khác' placeholder='Giá khác' required />
              </Form.Item>
            </div>
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
