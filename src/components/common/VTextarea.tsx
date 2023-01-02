import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import React from 'react';
const { TextArea } = Input;

type VInputProps = TextAreaProps & {
  label: string;
  isHorizal?: boolean;
};

export default function VTextArea({ label, isHorizal, ...rest }: VInputProps) {
  return isHorizal ? (
    <div className='space-y-1'>
      <span className='text-sm'>{label}:</span>
      <TextArea {...rest} />
    </div>
  ) : (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto] gap-1 sm:grid-cols-[150px_minmax(200px,_1fr)_auto]'>
      <span className='text-sm'>{label}:</span>
      <TextArea {...rest} />
    </div>
  );
}
