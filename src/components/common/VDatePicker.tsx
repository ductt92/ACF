import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

type VDatePickerProps = DatePickerProps & {
  label: string;
};

export default function VDatePicker({ label, ...rest }: VDatePickerProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>{label}:</span>
      <DatePicker className='block' {...rest} />
    </div>
  );
}
