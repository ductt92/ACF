import React from 'react';

import OrderDetails from '@/container/OrderContainer';

import AdminLayOut from '@/layout/AdminLayOut';

const OrderContainer = () => {
  return (
    <div>
      <OrderDetails />
    </div>
  );
};
OrderContainer.Layout = AdminLayOut;

export default OrderContainer;
