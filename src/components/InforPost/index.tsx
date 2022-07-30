/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

interface PropsInforPost {
  data: any;
}

const InforPost = (props: PropsInforPost) => {
  const { data } = props;
  return (
    <div className='w-95px float-left lg:w-full'>
      <div className='w-full'>
        <Image src={data} height={262} width={905} alt='[image]' />
      </div>
    </div>
  );
};

export default InforPost;
