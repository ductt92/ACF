import { Button, Col, Form, Input, notification } from 'antd';
import { Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { companyRegister } from '@/services/register.services';

const Coprorate = () => {
  const { t } = useTranslation('common');

  const queryClient = useQueryClient();

  const [company] = Form.useForm();
  const { mutate: companyRegis } = useMutation(companyRegister, {
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
  const onSubmit = async () => {
    const value = await company.validateFields();
    companyRegis({ ...value });
  };
  return (
    <div className='w-full'>
      <Form form={company}>
        <h3 className='mb-[14px] border-b-[1px] border-[#ccc] font-sans text-[16px] font-bold leading-[26px]'>
          {t('CInformation')}
        </h3>
        <Row>
          <Col xs={24} sm={12}>
            <Form.Item
              name='fullName'
              label={t('CompanyName')}
              rules={[{ required: true, message: 'Vui lòng nhập tên công ty' }]}
            >
              <Input placeholder='Cong ty TNHH' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='detailAddress'
              label={t('Address')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập địa chỉ công ty',
                },
              ]}
            >
              <Input placeholder={t('Address')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='tel'
              label={t('Tel')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập sddt công ty',
                },
              ]}
            >
              <Input placeholder={t('Tel')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='taxCode'
              label={t('TaxCode')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tax code',
                },
              ]}
            >
              <Input placeholder={t('TaxCode')} />
            </Form.Item>
          </Col>
        </Row>
        <h3 className='mb-[14px] border-b-[1px] border-[#ccc] font-sans text-[16px] font-bold leading-[26px]'>
          {t('ContactInformation')}
        </h3>
        <Row>
          <Col xs={24} sm={12}>
            <Form.Item
              name='contactPerson'
              label={t('ContactName')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên',
                },
              ]}
            >
              <Input placeholder={t('Name')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='phoneNumber'
              label={t('PhoneNumber')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập sđt',
                },
              ]}
            >
              <Input placeholder={t('Phonenumber')} type='text' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='position'
              label={t('Position')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập chức danh',
                },
              ]}
            >
              <Input placeholder={t('Position')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='email'
              label={t('Email')}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
              ]}
            >
              <Input placeholder={t('Email')} type='email' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{ textAlign: 'center', marginTop: 20 }}>
          <Button type='primary' htmlType='submit' onClick={onSubmit}>
            {t('Register')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Coprorate;
