import { Input, InputProps } from 'antd';
import React from 'react';

type VInputProps = InputProps & {
  label: string;
  required?: boolean;
  isHorizal?: boolean;
};

export default function VInput({
  label,
  required,
  isHorizal,
  ...rest
}: VInputProps) {
  return isHorizal ? (
    <div className='space-y-1'>
      <span className='text-sm font-medium'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <Input {...rest} />
    </div>
  ) : (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm font-medium'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <Input {...rest} />
    </div>
  );
}
