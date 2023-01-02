import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

type VDatePickerProps = DatePickerProps & {
  label?: string;
  required?: boolean;
  isHorizal?: boolean;
};

export default function VDatePicker({
  required,
  label,
  isHorizal,
  ...rest
}: VDatePickerProps) {
  return isHorizal ? (
    <div className='space-y-1'>
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
  ) : (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
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
