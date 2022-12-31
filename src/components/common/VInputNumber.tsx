import { InputNumber, InputNumberProps } from 'antd';
import React from 'react';

import { numberWithCommas } from '@/utils/helpers';

type VInputNumberProps = InputNumberProps & {
  label: string;
  required?: boolean;
  isHorizal?: boolean;
};

export default function VInputNumber({
  label,
  required,
  isHorizal,
  ...rest
}: VInputNumberProps) {
  return isHorizal ? (
    <div className='space-y-1'>
      <span className='text-sm font-medium'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <InputNumber
        formatter={(value) => numberWithCommas(value)}
        {...rest}
        className='w-full'
      />
    </div>
  ) : (
    <div className='grid grid-cols-[150px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm font-medium'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <InputNumber
        formatter={(value) => numberWithCommas(value)}
        {...rest}
        className='w-full'
      />
    </div>
  );
}
