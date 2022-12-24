import React from 'react';

import CreateBookingContainer from '@/container/MangerContainer/CreateBookingContainer';

import HomeLayout from '@/layout/HomeLayout';

const CreateBooking = () => {
  return <CreateBookingContainer />;
};

CreateBooking.Layout = HomeLayout;
export default CreateBooking;
