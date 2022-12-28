import { Select, SelectProps } from 'antd';
import React, { ReactNode } from 'react';

type VSelectProps = SelectProps & {
  label: string;
  children: ReactNode;
  required?: boolean;
  isHorizal?: boolean;
};

export default function VSelect({
  label,
  children,
  isHorizal,
  required,
  ...rest
}: VSelectProps) {
  return isHorizal ? (
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
  ) : (
    <div className='grid grid-cols-[200px_minmax(200px,_1fr)_auto]'>
      <span className='w-[174px] text-sm font-medium sm:w-[112px] '>
        {label} {required && <span className='text-red-700'>*</span>} :
      </span>
      <div className='w-full'>
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
    </div>
  );
}
