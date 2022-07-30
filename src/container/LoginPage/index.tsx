/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';

import Breadcumb from '@/components/Breadcrumb';
import FormTrack from '@/components/FormTrack';
import InputFiled from '@/components/InputFiled';

import BANNER from '~/images/bg_dangky.png';
const LoginPage = () => {
  const { t } = useTranslation('common');
  const [valueName, setValueName] = useState<string>('');
  const [valuePassword, setValuePassword] = useState<string>('');
  const handleChangeName = (e: any) => {
    setValueName(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setValuePassword(e.target.value);
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='m-auto w-[1174px] lg:w-full'>
      <div className='float-left w-[905px] lg:w-full'>
        <div className='relative w-full'>
          <Image src={BANNER} height={262} width={905} alt='[image]' />
        </div>
        <Breadcumb />
        <Form>
          <div className='float-left mt-[60px] mb-[42px] w-full rounded-[3px] border-[1px] border-[#d5d5d5] px-[54px] py-[20px] lg:mx-[10px] lg:mb-[20px] lg:w-[calc(100%_-_20px)] lg:p-[18px_20px]'>
            <div className='relative float-left w-[50%] border-r-[1px] border-[#d5d5d5] sm:w-full sm:border-r-0 sm:border-b-[1px] sm:border-[#d5d5d5] sm:pr-0 sm:pb-[40px] lg:pr-[30px]'>
              <h2 className='m-0 p-0 text-[17px] font-semibold text-[#ec3237]'>
                {t('LoginAccount')}
              </h2>
              <InputFiled
                label={t('UserName')}
                type='text'
                name='name'
                value={valueName}
                onChange={handleChangeName}
                placeholder=''
              />
              <InputFiled
                label={t('Password')}
                type='password'
                name='password'
                value={valuePassword}
                onChange={handleChangePassword}
                placeholder=''
              />
              <div className='flex items-center sm:justify-between'>
                <label className='mt-[13px] flex w-[150px]  font-semibold leading-[16px] text-[#555]'>
                  <input
                    type='checkbox'
                    className='mr-[6px] h-[15px] w-[15px] rounded-[2px] border-[1px] border-solid border-[#e1e2e1] text-[12px]'
                  />
                  <p className='text-[12px]'>{t('KeepLogin')}</p>
                </label>
                <Link href='/forgot-password'>
                  <a className=' text-[12px] font-semibold text-[#008ada]'>
                    {t('ForgotPassword')}
                  </a>
                </Link>
              </div>
              <p className='p-[14px_57px_13px_0] text-[11px] italic leading-[-.25px] text-[#616161]'>
                {t('Disc1')}
                <Link href='/register'>
                  <a className='mx-[2px] text-[12px] italic text-[#008ada]'>
                    Click here
                  </a>
                </Link>
                {t('Disc2')}
              </p>
              <Button
                type='primary'
                className='ml-[89px] w-[132px] bg-[#008ada] font-semibold sm:left-[50%] sm:ml-[-35px]'
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
                src='/images/banner2-chuyen-phat-nhanh-acf.jpg'
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
