import { InputNumber, InputNumberProps } from 'antd';
import React from 'react';

import { numberWithCommas } from '@/utils/helpers';

type VInputNumberProps = InputNumberProps & {
  label: string;
  required?: boolean;
};

export default function VInputNumber({
  label,
  required,
  ...rest
}: VInputNumberProps) {
  return (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto]'>
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
