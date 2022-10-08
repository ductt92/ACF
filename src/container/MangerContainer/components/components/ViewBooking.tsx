/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'antd';
import React, { useEffect } from 'react';

interface ViewBookingProps {
  data: any;
}

const Viewbooking = ({ data }: ViewBookingProps) => {
  const [viewBooking] = Form.useForm();

  useEffect(() => {
    viewBooking.setFieldsValue({
      ...data,
    });
  }, [data, viewBooking]);

  return <div>ViewBooking</div>;
};

export default Viewbooking;
