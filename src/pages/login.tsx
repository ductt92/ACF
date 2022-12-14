import React from 'react';

import LoginContainer from '@/container/login';

import BlankLayout from '@/layout/BlankLayout';

const LoginPage = () => {
  return (
    <div className='bg-container flex h-screen w-screen flex-row items-center justify-center'>
      <LoginContainer />
    </div>
  );
};
LoginPage.Layout = BlankLayout;
export default LoginPage;
