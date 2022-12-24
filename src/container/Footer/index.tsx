import { Button, Form, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './style.module.scss';

import { MOCK_IMAGE_SOCIAL } from '@/contants/mock-data/mock-data';

import FooterConnect from './components/FooterConnect';
import FooterInformation from './components/FooterInformation';
import FooterNew from './components/FooterNew';
import FooterSupport from './components/FooterSupport';
const Footer = () => {
  const { t } = useTranslation('common');
  const imageSocial = MOCK_IMAGE_SOCIAL;
  const submitEmail = () => {
    alert('Please enter an email address.');
  };
  return (
    <>
      <footer className='footer'>
        <div className='mt-[35px] w-full bg-[url(/images/bg_footer.png)] bg-cover pb-[15px] text-white sm:h-auto'>
          <div className=' sm-h-auto m-auto w-[1174px] lg:w-full'>
            <div className='my-[15px] inline-block w-full pl-[44px] sm:text-center '>
              <Link href='/' passHref>
                <a>
                  <Image
                    src='/images/logo-acf.png'
                    alt='logo'
                    height={84}
                    width={157}
                  />
                </a>
              </Link>
            </div>
            <FooterConnect />
            <FooterSupport />
            <FooterInformation />
            <FooterNew />
            <div className='pl-[37%] sm:pl-0 md:pl-[25%]'>
              <div className=' float-left mt-[15px]  w-[410px] sm:w-full sm:px-[10px]'>
                <h4 className='relative mb-0 pb-[5px] text-[17px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[83px] after:bg-white'>
                  {t('RegisterReceive')}
                </h4>
                <Form>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: 'calc(100% - 100px)',
                        height: '45px',
                        marginTop: '15px',
                        background: 'transparent',
                        color: '#fff',
                        fontStyle: 'italic',
                        border: '1px solid #fff',
                      }}
                      placeholder={t('EnterMail')}
                      maxLength={100}
                      type='email'
                    />

                    <Button
                      style={{
                        width: '100px',
                        height: '45px',
                        marginTop: '15px',
                        color: '#d14248',
                        fontWeight: '600',
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: 'none',
                      }}
                      type='primary'
                      onClick={submitEmail}
                    >
                      {t('Register').toUpperCase()}
                    </Button>
                  </Input.Group>
                </Form>
              </div>
              <div className=' mt-[65px] ml-[50px] inline-block sm:ml-0 sm:flex sm:w-full sm:justify-center sm:py-[20px]  lg:mr-0'>
                {imageSocial.map((value, key) => (
                  <Link href={value.href || value.url} passHref key={key}>
                    <a className='float-left mr-[10px]'>
                      <Image src={value.src} alt='' width={40} height={40} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link href='/#' passHref>
                <a className={styles.messChat}>
                  <div className={styles.numberChat}>1</div>
                  <div className={styles.titleChat}>Bạn cần hỗ trợ ?</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex h-[30px] w-full items-center bg-[#FBE51D] pl-[32px] text-[12px] '>
          <div className='m-auto w-[1174px] text-center italic sm:text-center lg:w-full'>
            Copyright 2018 by ACF Vietnamese
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
