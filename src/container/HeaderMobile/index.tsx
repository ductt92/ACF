import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

import {
  DATA_MOCK_MENU_EN,
  DATA_MOCK_MENU_VI,
} from '@/contants/mock-data/mock-data';

import HeaderMobileItem from './components/HeaderMobileItem';
import PrimaryLink from '../../components/links/PrimaryLink';
const HeaderMobile = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const { lang, t } = useTranslation('common');
  const dataMenu = lang === 'vi' ? DATA_MOCK_MENU_VI : DATA_MOCK_MENU_EN;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refNav = useRef<any>(null);
  const showSidebar = () => {
    setSideBar(!sidebar);
  };

  const styledButton = 'border border-red-500	flex items-center';
  const DEFAULT_CLASS =
    'flex cursor-pointer items-center justify-center bg-[#fff] px-2 py-1 gap-1 w-[110px] h-[24px]  ';
  const DEFAULT_IMAGE = '/images/ic_dn.png';
  const DEFAULT_SPAN = 'text-[12px] text-[#ec3337] leading-6 font-medium';

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add(styles.menuOn);
      document.body.style.marginLeft = '300px';
      document.body.style.transition = 'all 0.3s ease-in';
    } else {
      document.body.classList.remove(styles.menuOn);
      document.body.style.marginLeft = '0';
      document.body.style.overflow = 'visible';
    }
  }, [sidebar]);

  return (
    <>
      <div className='absolute right-0 h-[34px] w-[63px] pt-[2px] pl-[15px] smMin:hidden sm:inline-block '>
        <UnorderedListOutlined
          style={{ color: '#ec3437', fontSize: '30px' }}
          onClick={showSidebar}
        />
      </div>
      <nav
        ref={refNav}
        className={`${
          sidebar ? styles.activeNavBar : styles.navBar
        } smMin:hidden`}
      >
        <div>
          <div className=' relative block bg-[#eb3337] py-[9px] px-[15px]'>
            <span className='text-[14px] font-semibold uppercase text-white'>
              MENU MOBILE
            </span>
            <div className='relative float-right inline-block h-[20px] w-[20px]'>
              <CloseOutlined
                onClick={() => setSideBar(!sidebar)}
                style={{
                  color: '#fff',
                  fontSize: '23px',
                }}
              />
            </div>
          </div>
          <div className='flex w-full items-center justify-center gap-1 py-[10px]'>
            <Image
              className='cursor-pointer '
              src='/images/vi.svg'
              alt='[ico]'
              width={33}
              height={17}
              onClick={() => setLanguage('vi')}
            />
            <Image
              className='cursor-pointer'
              src='/images/en.svg'
              alt='[ico]'
              width={33}
              height={17}
              onClick={() => setLanguage('en')}
            />
          </div>
          <div className='flex w-full items-center justify-center gap-2'>
            <PrimaryLink
              href='/login-home'
              onClick={() => setSideBar(!sidebar)}
            >
              <div className={clsx(styledButton, DEFAULT_CLASS)}>
                <Image
                  src={DEFAULT_IMAGE}
                  width={11}
                  height={10}
                  alt='[ico]'
                  className='p-0'
                />
                <span className={DEFAULT_SPAN}>{t('Login').toUpperCase()}</span>
              </div>
            </PrimaryLink>
            <PrimaryLink href='/register' onClick={() => setSideBar(!sidebar)}>
              <div className={clsx(styledButton, DEFAULT_CLASS)}>
                <Image src={DEFAULT_IMAGE} width={11} height={10} alt='[ico]' />
                <span className={DEFAULT_SPAN}>
                  {t('Register').toUpperCase()}
                </span>
              </div>
            </PrimaryLink>
          </div>
          <div className='block px-[15px] pt-[20px]'>
            <ul>
              {dataMenu.map((value, index) => {
                const depthLevel = 0;
                return (
                  <HeaderMobileItem
                    item={value}
                    key={index}
                    depthLevel={depthLevel}
                    onClick={showSidebar}
                  />
                );
              })}
            </ul>
          </div>
          <div className='pl-[25px]'>
            <Image
              src='/images/ic_phone.png'
              width={22}
              height={22}
              alt='[ico]'
            />
            <p className='my-[10px] text-[16px]'>{t('ContactPhone')}</p>
            <b className='font-bold'>(024) 3783 4919</b>
          </div>
          <div className='pl-[25px] pt-2'>
            <Image
              src='/images/ic_address.png'
              width={22}
              height={22}
              alt='[ico]'
            />
            <p className='my-[10px] text-[16px]'>{t('HotLine')}</p>
            <b className='font-bold'>1900-545428</b>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderMobile;
