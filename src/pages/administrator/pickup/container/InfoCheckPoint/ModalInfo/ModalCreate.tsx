import { Button, Form, FormInstance, Modal } from 'antd';
import React from 'react';

import VInputNumber from '@/components/common/VInputNumber';

type ModalCreatInfoProps = {
  isUpdate: boolean;
  form: FormInstance;
  handleCancel: () => void;
  handleAddItem: () => void;
};

const ModalCreatInfo = ({
  isUpdate,
  form,
  handleCancel,
  handleAddItem,
}: ModalCreatInfoProps) => {
  return (
    <Modal
      visible={true}
      title={isUpdate ? 'Cập nhập' : 'Tạo mới'}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} className='grid w-full grid-cols-2 gap-4'>
        <Form.Item name='quantity'>
          <VInputNumber label='Nhóm kiện' isHorizal />
        </Form.Item>
        <Form.Item name='longs'>
          <VInputNumber label='Dài' isHorizal />
        </Form.Item>
        <Form.Item name='width'>
          <VInputNumber label='Rộng' isHorizal />
        </Form.Item>
        <Form.Item name='height'>
          <VInputNumber label='Cao' isHorizal />
        </Form.Item>
        <Form.Item name='bulky_weight'>
          <VInputNumber label='TL cồng kềnh' isHorizal />
        </Form.Item>
        <Form.Item name='weight'>
          <VInputNumber label='TL thực' isHorizal />
        </Form.Item>
      </Form>
      <Button
        className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
        onClick={handleAddItem}
      >
        {isUpdate ? 'Cập nhập' : 'Tạo mới'}
      </Button>
    </Modal>
  );
};
export default ModalCreatInfo;
