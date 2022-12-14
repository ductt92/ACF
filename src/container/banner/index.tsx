/* eslint-disable @next/next/no-img-element */
import { CloseOutlined, WarningOutlined } from '@ant-design/icons';
import { Divider, Drawer, Modal } from 'antd';
import Hamburger from 'hamburger-react';
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
  const { removeAll } = storage();

  const router = useRouter();
  const hotLine = t(`HotLine`);
  const termsOfUse = t(`TermsOfUse`);
  const policy = t(`Policy`);
  const dataMenu = lang === 'vi' ? DATA_MOCK_MENU_VI : DATA_MOCK_MENU_EN;
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const accessToken = storage().getItem(ACCSESS_TOKEN);
    const isManager = router.pathname.search(MANAGER_PAGES);
    if (accessToken && !isManager) {
      setIsLogin(true);
    }
  }, [router]);
  const handleLogout = async () => {
    removeAll();
    setIsLogin(false);
    await router.push('/');
  };
  const handleOpenLogout = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn đăng xuất tài khoản',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: handleLogout,
    });
  };
  const rendeDrawerHeader = () => {
    return (
      <div>
        <div className='relative'>
          <div className=' flex flex-row items-center justify-around gap-4 bg-[#FBE51D]'>
            <img
              src='/images/acf-logo.svg'
              alt='logo'
              className='h-[108px] w-[284px] cursor-pointer sm:h-[70px] sm:w-[179px]'
              onClick={() => router.push('/')}
            />
            <div className='absolute right-3'>
              <CloseOutlined
                onClick={() => setOpen(false)}
                className='text-6'
              />
            </div>
          </div>
        </div>

        <div className='p-4 text-center'>
          {isLogin ? (
            <button
              className='text-4 h-[33px] w-[130px] rounded-sm border-[1px] border-[#000]  font-bold shadow-2xl outline-0'
              onClick={handleOpenLogout}
            >
              Đăng xuất
            </button>
          ) : (
            <div className='flex flex-row items-center justify-center gap-4'>
              <button
                className='h-[50px] w-[130px] font-bold text-[red] shadow-2xl outline-0'
                onClick={() => router.push('/register')}
              >
                {t('Register')}
              </button>
              <button
                className='h-[50px] w-[130px] font-bold text-[red] shadow-2xl outline-0'
                onClick={() => router.push('/login-home')}
              >
                {t('Login')}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='flex h-[120px] flex-row bg-[#FBE51D] p-1 pb-4 pl-10 sm:grid sm:h-[70px] sm:grid-cols-2 sm:p-0'>
      <img
        src='/images/acf-logo.svg'
        alt='logo'
        className='h-[108px] w-[284px] cursor-pointer sm:h-[70px] sm:w-[179px]'
        onClick={() => router.push('/')}
      />
      <div className='flex w-full flex-col sm:hidden'>
        <div className='px-4'>
          <div className='flex h-[54px] flex-row items-center justify-between gap-4'>
            <div className='flex flex-row gap-4'>
              <div className='flex h-[60px] flex-row items-center gap-4'>
                <TextLink href='/' label={policy} />
                <TextLink href='/' label={termsOfUse} />
              </div>
              <div className='flex h-[66px] flex-row items-center gap-8'>
                <img
                  src='/images/ic-vi.svg'
                  alt='ic-vi'
                  onClick={() => setLanguage('vi')}
                  width={56}
                  height={39}
                  className='cursor-pointer'
                />
                <img
                  src='/images/ic-eng.svg'
                  alt='ic-eng'
                  onClick={() => setLanguage('en')}
                  width={56}
                  className='cursor-pointer'
                  height={39}
                />
              </div>
            </div>
            <div className='flex h-[66px] flex-row items-center gap-8'>
              <div className='text-[16px] font-bold'>
                {contactPhone} :(+84) 968 02 22 57
              </div>
              <div className='text-[16px] font-bold'>{hotLine} :19008972</div>
              {!isLogin && (
                <button
                  className='h-[50px] w-[130px] bg-[#FBE51D] font-bold text-[red] shadow-2xl outline-0'
                  onClick={() => router.push('/login-home')}
                >
                  {t('Login')}
                </button>
              )}
            </div>
          </div>
        </div>

        <Divider className='border-t-1 m-0 border-[#000] bg-[#000]' />
        <div className='w-full] h-[60px]'>
          <div className='flex h-full w-full flex-row items-center justify-between p-4'>
            <div className='flex flex-1 flex-row items-center justify-around p-4'>
              {isLogin
                ? dataMenuManager.map((v) => (
                    <ItemMenu key={v.href} value={v} />
                  ))
                : dataMenu.map((v) => <ItemMenu key={v.href} value={v} />)}
            </div>
            <div>
              {isLogin ? (
                <button
                  className='h-[50px] w-[130px] bg-[#FBE51D] font-bold text-[red] shadow-2xl outline-0'
                  onClick={handleOpenLogout}
                >
                  Đăng xuất
                </button>
              ) : (
                <div>
                  <button
                    className='h-[50px] w-[130px] bg-[#FBE51D] font-bold text-[red] shadow-2xl outline-0'
                    onClick={() => router.push('/register')}
                  >
                    {t('Register')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='hidden h-full sm:block '>
        <div className='flex h-full flex-row items-center justify-center gap-4'>
          <img
            src='/images/ic-vi.svg'
            alt='ic-vi'
            onClick={() => setLanguage('vi')}
            width={56}
            height={39}
            className='cursor-pointer'
          />
          <img
            src='/images/ic-eng.svg'
            alt='ic-eng'
            onClick={() => setLanguage('en')}
            width={56}
            className='cursor-pointer'
            height={39}
          />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <Drawer
          title={rendeDrawerHeader()}
          placement='left'
          destroyOnClose={true}
          visible={isOpen}
          closeIcon={<span></span>}
          onClose={() => setOpen(false)}
        >
          <div>
            {isLogin
              ? dataMenuManager.map((v) => (
                  <div key={v.href} className='flex flex-col'>
                    <ItemMenu value={v} handleAction={() => setOpen(false)} />
                    <Divider />
                  </div>
                ))
              : dataMenu.map((v) => (
                  <div key={v.href} className='flex flex-col'>
                    <ItemMenu
                      key={v.href}
                      value={v}
                      handleAction={() => setOpen(false)}
                    />{' '}
                    <Divider />
                  </div>
                ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default BannerContainer;
