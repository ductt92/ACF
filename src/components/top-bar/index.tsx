import clsx from 'clsx';
import Image from 'next/image';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import HeaderMobile from '@/container/HeaderMobile';

import PrimaryLink from '../links/PrimaryLink';
import TextLink from '../links/TextLink';

const TopBar = ({ styledButton }: { styledButton?: string }) => {
  const { t } = useTranslation('common');
  const termsOfUse = t(`TermsOfUse`);
  const policy = t(`Policy`);

  const DEFAULT_CLASS =
    'flex cursor-pointer items-center justify-center bg-[#fff] px-2 py-1 gap-1 w-[110px] h-[24px]';
  const DEFAULT_IMAGE = '/images/ic_dn.png';
  const DEFAULT_SPAN = 'text-[12px] text-[#ec3337] leading-6 font-medium';
  return (
    <div className='top-bar flex w-[1170px] items-center px-[22px] '>
      <div className='flex w-9/12 gap-4 sm:gap-1'>
        <>
          <TextLink href='/detail-post/chinh-sach-bao-mat' label={policy} />
          <TextLink
            href='/detail-post/dieu-khoan-su-dung-tai-acf'
            label={termsOfUse}
          />
          <Image
            className='cursor-pointer'
            src='/images/vi.svg'
            alt='[ico]'
            width={23}
            height={17}
            onClick={() => setLanguage('vi')}
          />
          <Image
            className='cursor-pointer'
            src='/images/en.svg'
            alt='[ico]'
            width={23}
            height={17}
            onClick={() => setLanguage('en')}
          />
        </>
      </div>

      <div className='flex w-3/12 items-center justify-end gap-2 sm:hidden'>
        <PrimaryLink href='/login-home'>
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
        <PrimaryLink href='/register'>
          <div className={clsx(styledButton, DEFAULT_CLASS)}>
            <Image src={DEFAULT_IMAGE} width={11} height={10} alt='[ico]' />
            <span className={DEFAULT_SPAN}>{t('Register').toUpperCase()}</span>
          </div>
        </PrimaryLink>
      </div>
      <HeaderMobile />
    </div>
  );
};

export default TopBar;
