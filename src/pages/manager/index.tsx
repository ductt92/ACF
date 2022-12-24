import React from 'react';

import ManageContainer from '@/container/MangerContainer';

import HomeLayout from '@/layout/HomeLayout';

const ManagePage = () => {
  return (
    <div>
      <ManageContainer />
    </div>
  );
};

ManagePage.Layout = HomeLayout;
export default ManagePage;
