/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { Button, Form, Input, Select } from 'antd';
import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';

import styles from '../../../container/Register/style.module.scss';
const { Option } = Select;

const Personal = () => {
  const { t } = useTranslation('common');
  const [selectedMon, setMon] = useState<number>(1);
  const year = new Date().getFullYear();

  return (
    <div className='mt-[10px] w-full p-[20px_0]'>
      <Form>
        <Row>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['user', 'name']}
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
              name={['user', 'city']}
              label={t('City')}
              rules={[{ required: false }]}
            >
              <Select></Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['user', 'gender']}
              label={t('Gender')}
              rules={[{ required: false }]}
            >
              <Select placeholder={t('SelectGender')}>
                <Option value='1'>{t('Male')}</Option>
                <Option value='0'>{t('Female')}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['user', 'address']}
              label={t('Address')}
              rules={[{ required: false }]}
            >
              <Input placeholder={t('EnterAddress')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='birthday'
              label={t('Birthday')}
              rules={[{ required: false }]}
            >
              <Row>
                <Col span={8}>
                  <Form.Item name='day' className={styles.optionWrapper}>
                    <Select placeholder={t('Day')}>
                      {[...Array(new Date(2022, selectedMon, 0).getDate())].map(
                        (_, index) => (
                          <Option key={index.toString()} value={index + 1}>
                            {index + 1}
                          </Option>
                        )
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    name='month'
                    style={{ marginBottom: 0 }}
                    className={styles.optionWrapper}
                  >
                    <Select placeholder={t('Month')}>
                      {[...Array(12)].map((_, index) => (
                        <Option key={index.toString()} value={index}>
                          {index + 1}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name='year'
                    style={{ marginBottom: 0 }}
                    className={styles.optionWrapper}
                  >
                    <Select placeholder={t('Year')}>
                      {Array.from(new Array(70), (v, i) => (
                        <Option key={i} value={year + i}>
                          {year - i}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                {/* </div> */}
              </Row>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='password'
              label={t('Password')}
              rules={[
                {
                  required: true,
                  message: `${t('Mpassword')}`,
                },
              ]}
            >
              <Input type='password' />
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
              name='rpassword'
              label={t('Rpassword')}
              rules={[
                {
                  required: true,
                  message: `${t('Mrpassword')}`,
                },
              ]}
            >
              <Input type='password' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='phone'
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
          <Col xs={24} sm={12}>
            <Form.Item
              name='captcha'
              label='Captcha'
              rules={[
                {
                  required: true,
                  message: 'Please input your Captcha',
                },
              ]}
            >
              <Input type='text' />
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

export default Personal;
