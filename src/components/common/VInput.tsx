import { Input, InputProps } from 'antd';
import React from 'react';

type VInputProps = InputProps & {
  label: string;
  required?: boolean;
};

export default function VInput({ label, required, ...rest }: VInputProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <Input {...rest} />
    </div>
  );
}
