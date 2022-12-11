import { Button, Form, FormInstance, Modal, Select } from 'antd';
import React from 'react';
const { Option } = Select;

import VSelect from '@/components/common/VSelect';

import { ETypeStaff, OpitionType } from '@/contants/types';
interface ModalCreateStaffProps {
  form: FormInstance;
  isOpen: boolean;
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
}: ModalCreateStaffProps) => {
  const typeStaffOption = Object.entries(ETypeStaff).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={handleClose}
      destroyOnClose
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <Form form={form}>
        <div className='h-[calc(70vh)] '>
          <p className='text-center text-xl'>Thêm mới nhân viên</p>
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
          Tạo mới nhân viên
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateStaff;
