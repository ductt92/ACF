import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input } from 'antd';

import FormWrapper from '../FormWrapper';

export type FormValueType = {
  username: string;
  password: string;
};

type LoginFormType = {
  loading: boolean;
  errorMsg: string | null;
  onSubmit: (values: FormValueType) => void;
};

export default function LoginForm({
  loading,
  onSubmit,
  errorMsg,
}: LoginFormType) {
  const [form] = Form.useForm();

  const handleOnFinish = (values: FormValueType) => onSubmit(values);

  const rules = {
    username: [
      { required: true, message: 'Please input your username' },
      { whitespace: true },
    ],
    password: [
      { required: true, message: 'Password should not empty.' },
      { whitespace: true },
    ],
  };

  return (
    <div>
      <div className='w-[400px] rounded-lg border-[1px] bg-white p-10 drop-shadow-2xl'>
        <p className='text-center text-2xl'>ACF Admin Login</p>
        <div className='form__wrapper '>
          {errorMsg && <Alert message={errorMsg} type='error' showIcon />}
          <FormWrapper loading={loading}>
            <Form
              className='flex-col gap-4'
              form={form}
              name='login_form'
              layout='inline'
              onFinish={handleOnFinish}
              autoComplete='off'
            >
              <Form.Item name='username' rules={rules.username as never}>
                <Input
                  prefix={<UserOutlined />}
                  size='middle'
                  placeholder='username'
                  allowClear
                />
              </Form.Item>
              <Form.Item
                className='w-100 mt-8'
                name='password'
                rules={rules.password}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  size='middle'
                  placeholder='password'
                  type='password'
                  allowClear
                />
              </Form.Item>
              <Form.Item className='w-100 mt-12'>
                <Button type='primary' htmlType='submit' size='middle' block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </FormWrapper>
        </div>
      </div>
    </div>
  );
}
