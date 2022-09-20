import { Select, SelectProps } from 'antd';
import React, { ReactNode } from 'react';

type VSelectProps = SelectProps & {
  label: string;
  children: ReactNode;
  required?: boolean;
};

export default function VSelect({
  label,
  children,
  required,
  ...rest
}: VSelectProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm font-medium'>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <Select
        // showSearch
        showArrow
        filterOption={(input, option) =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        {...rest}
      >
        {children}
      </Select>
    </div>
  );
}
