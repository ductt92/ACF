import { TimePicker, TimePickerProps } from 'antd';
import React from 'react';

type VTimePickerProps = TimePickerProps & {
  label: string;
  required?: boolean;
};

export default function VTimePicker({
  required,
  label,
  ...rest
}: VTimePickerProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>{' '}
      <TimePicker className='block' {...rest} />
    </div>
  );
}
