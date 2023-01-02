/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const VButton = ({
  children,
  icon,
  ...props
}: {
  children: any;
  icon: any;
}) => {
  return (
    <button
      className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
      {...props}
    >
      <div className='flex flex-row gap-4'>
        {icon}
        {children}
      </div>
    </button>
  );
};

export default VButton;
