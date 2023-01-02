import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import React from 'react';
const { TextArea } = Input;

type VInputProps = TextAreaProps & {
  label: string;
};

export default function VTextArea({ label, ...rest }: VInputProps) {
  return (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm'>{label}:</span>
      <TextArea {...rest} />
    </div>
  );
}
