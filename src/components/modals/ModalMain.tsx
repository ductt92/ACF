/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';

import { TYPE_FIELD } from '@/contants/types';

interface Props {
  visible: boolean;
  handleSubmit: (form: any) => void;
  handleCancel: () => void;
  fields: any[];
  initialValue?: any;
}

function ModalMain(props: Props) {
  const { visible, handleSubmit, handleCancel, fields, initialValue } = props;
  const [form] = Form.useForm();

  const renderField = (typeField: TYPE_FIELD) => {
    switch (typeField) {
      case TYPE_FIELD.TEXT:
        return <Input />;
      default:
        return <></>;
    }
  };

  const onFinish = (values: any) => {
    handleSubmit(values);
  };

  useEffect(() => {
    form.resetFields();
  }, [initialValue, form]);

  return (
    <Modal
      visible={visible}
      title={initialValue ? 'Cập nhập' : 'Tạo mới'}
      onCancel={handleCancel}
      footer={[
        <Button key='back' onClick={handleCancel}>
          Trở về
        </Button>,
        <Button
          htmlType='submit'
          key='submit'
          type='primary'
          form='modal-main'
          onClick={handleSubmit}
        >
          Xác nhận
        </Button>,
      ]}
    >
      <Form
        form={form}
        name='modal-main'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValue ? initialValue : {}}
        onFinish={onFinish}
        autoComplete='off'
      >
        {fields.map((field, index) => (
          <Form.Item
            key={index}
            label={field.title}
            name={field.key}
            // rules={[{ required: true, message: 'Please input your username!' }]}
          >
            {renderField(field.field)}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
}

export default ModalMain;
