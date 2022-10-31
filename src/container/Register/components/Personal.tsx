/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { Button, Form, Input, notification, Select } from 'antd';
import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';

import { personRegister } from '@/services/register.services';

const { Option } = Select;

const Personal = () => {
  const { t } = useTranslation('common');
  const queryClient = useQueryClient();

  const [personForm] = Form.useForm();
  const { mutate: personRegis } = useMutation(personRegister, {
    onSuccess: () => {
      queryClient.invalidateQueries(['generateBill']);
      notification.success({
        message:
          'Yêu cầu của quý khách đã được gửi đến nhân viên.Nhân viên sẽ liên hệ cho quý khách ngay bây giờ. ACF xin cảm ơn',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'lỗi, vui lòng thử lại sau',
        placement: 'top',
      });
    },
  });
  const handleSubmit = async () => {
    const value = await personForm.getFieldsValue();
    personRegis({ ...value });
  };

  return (
    <div className='mt-[10px] w-full p-[20px_0]'>
      <Form form={personForm}>
        <Row>
          <Col xs={24} sm={12}>
            <Form.Item
              name='fullName'
              label={t('FLname')}
              rules={[
                {
                  required: true,
                  message: `${t('MFLname')}`,
                },
              ]}
            >
              <Input placeholder={t('MrA')} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name='gender'
              label={t('Gender')}
              rules={[{ required: true }]}
            >
              <Select placeholder={t('SelectGender')}>
                <Option value='Male'>{t('Male')}</Option>
                <Option value='Female'>{t('Female')}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='detailAddress'
              label={t('Address')}
              rules={[{ required: true }]}
            >
              <Input placeholder={t('EnterAddress')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='dob'
              label={t('Birthday')}
              rules={[{ required: true }]}
            >
              <VDatePicker format='DD/MM/YYYY' placeholder='Nhập ngày sinh' />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name='email'
              label='Email:'
              rules={[
                {
                  type: 'email',
                  message: `${t('MVemail')}`,
                },
                {
                  required: true,
                  message: `${t('MIemail')}`,
                },
              ]}
            >
              <Input type='text' placeholder={t('EnterEmail')} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name='phoneNumber'
              label={t('PhoneNumber')}
              rules={[
                {
                  required: true,
                  message: `${t('Mphone')}`,
                },
              ]}
            >
              <Input type='text' placeholder={t('EnterPhone')} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ textAlign: 'center', marginTop: 20 }}>
          <Button type='primary' htmlType='submit' onClick={handleSubmit}>
            {t('Register')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Personal;
