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
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>{' '}
      <TimePicker className='block' {...rest} />
    </div>
  );
}
