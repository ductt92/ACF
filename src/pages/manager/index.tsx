import React from 'react';

import ManageContainer from '@/container/MangerContainer';

import NewLayout from '@/layout/NewLayout';

const ManagePage = () => {
  return (
    <div>
      <ManageContainer />
    </div>
  );
};

ManagePage.Layout = NewLayout;
export default ManagePage;
