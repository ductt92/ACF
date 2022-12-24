import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

type VDatePickerProps = DatePickerProps & {
  label?: string;
  required?: boolean;
};

export default function VDatePicker({
  required,
  label,
  ...rest
}: VDatePickerProps) {
  return (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm'>
        {label && (
          <span>
            {label}
            {required && <span className='text-red-700'>*</span>} :
          </span>
        )}
      </span>
      <DatePicker className='block' {...rest} />
    </div>
  );
}
