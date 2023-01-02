import React from 'react';

import HomeManager from '@/container/HomeManager';

import HomeLayout from '@/layout/HomeLayout';

const ManagePage = () => {
  return (
    <div>
      <HomeManager />
    </div>
  );
};

ManagePage.Layout = HomeLayout;
export default ManagePage;
