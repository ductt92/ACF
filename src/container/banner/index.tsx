/* eslint-disable @next/next/no-img-element */
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import TextLink from '@/components/links/TextLink';

import {
  DATA_MOCK_MENU_EN,
  DATA_MOCK_MENU_VI,
} from '@/contants/mock-data/mock-data';

import ItemMenu from './components/ItemMenu';

const BannerContainer = () => {
  const { t, lang } = useTranslation('common');
  const contactPhone = t(`ContactPhone`);
  const hotLine = t(`HotLine`);
  const termsOfUse = t(`TermsOfUse`);
  const policy = t(`Policy`);
  const dataMenu = lang === 'vi' ? DATA_MOCK_MENU_VI : DATA_MOCK_MENU_EN;

  return (
    <div className='flex flex-row bg-[#FBE51D] pt-4 pb-4 pl-10'>
      <img
        src='images/acf-logo.svg'
        alt='logo'
        className='h-[124px] w-[360px]'
      />
      <div className='flex w-full flex-col justify-center '>
        <div className='px-14'>
          <div className='flex h-[60px] flex-row items-center justify-between gap-4'>
            <div className='flex flex-row gap-14'>
              <div className='flex h-[60px] flex-row items-center gap-8'>
                <TextLink href='/' label={policy} />
                <TextLink href='/' label={termsOfUse} />
              </div>
              <div className='flex h-[66px] flex-row items-center gap-8'>
                <img
                  src='images/ic-vi.svg'
                  alt='ic-vi'
                  onClick={() => setLanguage('vi')}
                  width={56}
                  height={39}
                  className='cursor-pointer'
                />
                <img
                  src='images/ic-eng.svg'
                  alt='ic-eng'
                  onClick={() => setLanguage('en')}
                  width={56}
                  className='cursor-pointer'
                  height={39}
                />
              </div>
            </div>
            <div className='flex h-[66px] flex-row items-center gap-8'>
              <div className='text-[16px] font-medium'>
                {contactPhone} :(+84) 968 02 22 57
              </div>
              <div className='text-[16px] font-medium'>{hotLine} :19008972</div>
            </div>
          </div>
        </div>

        <div className='h-[4px] w-full bg-[#000000]' />

        <div className='flex h-[66px] flex-row items-center'>
          {dataMenu.map((v) => (
            <ItemMenu key={v.href} label={v.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
