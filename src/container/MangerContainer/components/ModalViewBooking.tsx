import { Form } from 'antd';
import React, { useEffect } from 'react';

import { IMyBooking } from '@/contants/types';

type ModalViewBookingProps = {
  value: IMyBooking;
  onClose: (value: boolean) => void;
};
const ModalViewBooking = ({ value }: ModalViewBookingProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...value,
    });
  }, [form, value]);

  return <div></div>;
};

export default ModalViewBooking;
