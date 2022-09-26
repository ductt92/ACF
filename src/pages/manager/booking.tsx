import React from 'react';

import ManageContainer from '@/container/MangerContainer';

import NewLayout from '@/layout/NewLayout';

const BookingContainer = () => {
  return (
    <div>
      <ManageContainer />
    </div>
  );
};
BookingContainer.Layout = NewLayout;

export default BookingContainer;
