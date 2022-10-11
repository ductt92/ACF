/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';

import Breadcumb from '@/components/Breadcrumb';
import FormTrack from '@/components/FormTrack';
import InputFiled from '@/components/InputFiled';

import { ACCSESS_TOKEN, REFRESH_TOKEN, USER } from '@/contants/Storage';
import { UsersRole } from '@/contants/types';
import { MANAGER_PAGES } from '@/routes/routes';
import AuthenService from '@/services/Authen.service';
import storage from '@/utils/storage';

const LoginPage = () => {
  const { t } = useTranslation('common');
  const [valueName, setValueName] = useState<string>('');
  const [valuePassword, setValuePassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [form] = useForm();
  const router = useRouter();
  const { setItem } = storage();

  const handleChangeName = (e: any) => {
    setValueName(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setValuePassword(e.target.value);
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const requestData = await form.validateFields();
    setLoading(true);
    try {
      const res = await AuthenService.login(requestData);
      if (!res || res.user.role.name !== UsersRole.USER) {
        setLoading(false);
        return notification.error({
          message: 'Đăng nhập không thành công, Vui lòng thử lại',
          placement: 'top',
        });
      }
      setItem(ACCSESS_TOKEN, res.tokens.access.token);
      setItem(REFRESH_TOKEN, res.tokens.refresh.token);
      setItem(USER, JSON.stringify(res.user));
      router.push(MANAGER_PAGES);
      setLoading(false);
    } catch (error) {
      notification.error({
        message: 'Đăng nhập không thành công, Vui lòng thử lại',
        placement: 'top',
      });
      setLoading(false);
    }
  };

  return (
    <div className='m-auto w-[1174px] lg:w-full'>
      <div className='float-left w-[905px] lg:w-full'>
        <div className='relative w-full p-4'>
          <Image
            src='/images/logo-acf.png'
            height={262}
            width={905}
            alt='[image]'
          />
        </div>
        <Breadcumb />
        <Form form={form}>
          <div className='float-left mt-[60px] mb-[42px] w-full rounded-[3px] border-[1px] border-[#d5d5d5] px-[54px] py-[20px] lg:mx-[10px] lg:mb-[20px] lg:w-[calc(100%_-_20px)] lg:p-[18px_20px]'>
            <div className='relative float-left w-[50%] border-r-[1px] border-[#d5d5d5] sm:w-full sm:border-r-0 sm:border-b-[1px] sm:border-[#d5d5d5] sm:pr-0 sm:pb-[40px] lg:pr-[30px]'>
              <h2 className='m-0 p-0 text-[17px] font-semibold text-[#ec3237]'>
                {t('LoginAccount')}
              </h2>
              <Form.Item name='username'>
                <InputFiled
                  label={t('UserName')}
                  type='text'
                  value={valueName}
                  onChange={handleChangeName}
                  placeholder=''
                />
              </Form.Item>

              <Form.Item name='password'>
                <InputFiled
                  label={t('Password')}
                  type='password'
                  value={valuePassword}
                  onChange={handleChangePassword}
                  placeholder=''
                />
              </Form.Item>

              <Button
                type='primary'
                loading={isLoading}
                className='ml-[89px] mt-4 w-[132px] bg-[#008ada] font-semibold sm:left-[50%] sm:ml-[-35px]'
                onClick={handleLogin}
              >
                {t('Login')}
              </Button>
              <i className='absolute right-[-17px] top-[71px] h-[37px] w-[37px] rounded-[50%] border-[1px] border-[#d5d5d5] bg-white text-center text-[11px] italic leading-[38px] text-[#666] sm:bottom-[-18.5px] sm:left-[50%] sm:top-auto sm:right-auto'>
                ||
              </i>
            </div>
            <div className='float-left w-[50%] p-[40px_0_0_81px] lg:pl-[30px]'>
              <Image
                src='/images/logo-acf.png'
                height={157}
                width={315}
                alt=''
              />
            </div>
          </div>
        </Form>
      </div>

      <div className='float-right lg:float-left lg:mb-[40px] lg:w-full'>
        <FormTrack />
      </div>
    </div>
  );
};

export default LoginPage;
