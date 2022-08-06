import { Select, SelectProps } from 'antd';
import React, { ReactNode } from 'react';

type VSelectProps = SelectProps & {
  label: string;
  children: ReactNode;
};

export default function VSelect({ label, children, ...rest }: VSelectProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>{label}:</span>
      <Select
        // showSearch
        filterOption={(input, option) =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //  @ts-ignore
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        // filterSort={(optionA, optionB) =>
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   //  @ts-ignore
        //   optionA.children
        //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //     //  @ts-ignore
        //     .toLowerCase()
        //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //     //  @ts-ignore
        //     .localeCompare(optionB.children.toLowerCase())
        // }
        {...rest}
      >
        {children}
      </Select>
    </div>
  );
}
