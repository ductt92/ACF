import { Button, Form, FormInstance, Modal, Select } from 'antd';
import React from 'react';
const { Option } = Select;

import { CloseOutlined } from '@ant-design/icons';

import VSelect from '@/components/common/VSelect';

import { ETypeStaff, OpitionType } from '@/contants/types';
interface ModalCreateStaffProps {
  form: FormInstance;
  isOpen: boolean;
  isUpdate: boolean;
  handleClose: () => void;
  handleAddStaff: () => void;
  opitonStaff: Array<OpitionType>;
}
const ModalCreateStaff = ({
  form,
  isOpen,
  handleClose,
  handleAddStaff,
  opitonStaff,
  isUpdate,
}: ModalCreateStaffProps) => {
  const typeStaffOption = Object.entries(ETypeStaff).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        {isUpdate ? 'Cập nhật nhân viên' : 'Thêm mới nhân viên'}
      </div>
    );
  };
  return (
    <Modal
      footer={null}
      visible={isOpen || isUpdate}
      closeIcon={<CloseOutlined className='text-[24px]' />}
      title={renderHeader()}
      onCancel={handleClose}
      destroyOnClose
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <Form form={form}>
        <div className='h-[calc(70vh)] '>
          <div className='grid grid-cols-2 gap-x-6'>
            <Form.Item
              name='staffId'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn tên nhân viên',
                },
              ]}
            >
              <VSelect label='Tên nhân viên' required>
                {opitonStaff?.map((v: OpitionType) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item
              name='typeStaff'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn loại nhân viên',
                },
              ]}
            >
              <VSelect label=' Loại nhân viên' required>
                {typeStaffOption.map((v: OpitionType) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
          </div>
        </div>
        <Button type='primary' onClick={handleAddStaff}>
          {isUpdate ? 'Cập nhật nhân viên' : 'Tạo mới nhân viên'}
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateStaff;
