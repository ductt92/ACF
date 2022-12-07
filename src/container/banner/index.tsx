/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useState } from 'react';

import TextLink from '@/components/links/TextLink';

import {
  DATA_MOCK_MENU_EN,
  DATA_MOCK_MENU_VI,
  dataMenuManager,
} from '@/contants/mock-data/mock-data';
import { ACCSESS_TOKEN } from '@/contants/Storage';
import { MANAGER_PAGES } from '@/routes/routes';
import storage from '@/utils/storage';

import ItemMenu from './components/ItemMenu';

const BannerContainer = () => {
  const { t, lang } = useTranslation('common');
  const contactPhone = t(`ContactPhone`);
  const router = useRouter();
  const hotLine = t(`HotLine`);
  const termsOfUse = t(`TermsOfUse`);
  const policy = t(`Policy`);
  const dataMenu = lang === 'vi' ? DATA_MOCK_MENU_VI : DATA_MOCK_MENU_EN;
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const accessToken = storage().getItem(ACCSESS_TOKEN);
    const isManager = router.pathname.search(MANAGER_PAGES);
    if (accessToken && !isManager) {
      setIsLogin(true);
    }
  }, [router]);

  return (
    <div className='flex h-[120px] flex-row bg-[#FBE51D] p-1 pb-4 pl-10'>
      <img
        src='images/acf-logo.svg'
        alt='logo'
        className='h-[108px] w-[284px]'
      />
      <div className='flex w-full flex-col justify-center '>
        <div className='px-14'>
          <div className='flex h-[54px] flex-row items-center justify-between gap-4'>
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

        <div className='flex h-full flex-row items-center justify-start gap-20'>
          {isLogin
            ? dataMenuManager.map((v) => <ItemMenu key={v.href} value={v} />)
            : dataMenu.map((v) => <ItemMenu key={v.href} value={v} />)}
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
