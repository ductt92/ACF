import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import React from 'react';
const { RangePicker } = DatePicker;
type VRangePickerProps = RangePickerProps & {
  label?: string;
  required?: boolean;
};

export default function VRangePicker({
  required,
  label,
  ...rest
}: VRangePickerProps) {
  return (
    <div className='space-y-1'>
      <span className='text-sm'>
        {label && (
          <span>
            {label}
            {required && <span className='text-red-700'>*</span>} :
          </span>
        )}
      </span>
      <RangePicker className='block' {...rest} />
    </div>
  );
}
