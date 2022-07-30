import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import React from 'react';
const { TextArea } = Input;

type VInputProps = TextAreaProps & {
  label: string;
};

export default function VTextArea({ label, ...rest }: VInputProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>{label}:</span>
      <TextArea {...rest} />
    </div>
  );
}
