import React from 'react';

import LoginFormContainer from '@/container/login';

import BlankLayout from '@/layout/BlankLayout';

const LoginPage = () => {
  return (
    <div className='flex h-screen	w-screen flex-col items-center justify-center'>
      <LoginFormContainer />
    </div>
  );
};
LoginPage.Layout = BlankLayout;
export default LoginPage;
