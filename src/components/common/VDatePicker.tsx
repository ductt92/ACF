import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

type VDatePickerProps = DatePickerProps & {
  label: string;
  required?: boolean;
};

export default function VDatePicker({
  required,
  label,
  ...rest
}: VDatePickerProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>{' '}
      <DatePicker className='block' {...rest} />
    </div>
  );
}
