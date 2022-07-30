import { Divider } from 'antd';
import React from 'react';

const CardItems = ({ title }: { title: string }) => {
  return (
    <>
      <div className='text-xl font-medium'>{title}</div>
      <Divider />
    </>
  );
};
export default CardItems;
