import { Button, Col, Form, Input } from 'antd';
import { Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const Coprorate = () => {
  const { t } = useTranslation('common');
  return (
    <div className='w-full'>
      <Form>
        <h3 className='mb-[14px] border-b-[1px] border-[#ccc] font-sans text-[16px] font-bold leading-[26px]'>
          {t('CInformation')}
        </h3>
        <Row>
          <Col xs={24} sm={12}>
            <Form.Item
              name='name'
              label={t('CompanyName')}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input placeholder='Cong ty TNHH' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='address'
              label={t('Address')}
              rules={[
                {
                  required: false,
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
                  required: false,
                },
              ]}
            >
              <Input placeholder={t('Tel')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='taxcode'
              label={t('TaxCode')}
              rules={[
                {
                  required: false,
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
              name='contactname'
              label={t('ContactName')}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input placeholder={t('Name')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='phone'
              label={t('PhoneNumber')}
              rules={[
                {
                  required: false,
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
                  required: false,
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
                  required: false,
                },
              ]}
            >
              <Input placeholder={t('Email')} type='email' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{ textAlign: 'center', marginTop: 20 }}>
          <Button type='primary' htmlType='submit'>
            {t('Register')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Coprorate;
