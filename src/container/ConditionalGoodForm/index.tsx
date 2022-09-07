import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import Breadcumb from '@/components/Breadcrumb';
import ContentLeft from '@/components/ContentLeft';
import FormCustomerRequest from '@/components/FormCustomerRequest';
import ListNew from '@/components/ListNew';

import {
  DATA_CONDTIONAL_EN,
  DATA_CONDTIONAL_LI,
} from '@/contants/mock-data/mock-data';

import BANNER from '~/images/hinh-anh-xam.jpeg';

const ConditionalGoodForm = () => {
  const { lang } = useTranslation('common');
  const dataMockConditional =
    lang === 'vi' ? DATA_CONDTIONAL_LI : DATA_CONDTIONAL_EN;
  return (
    <div className='m-auto w-[1174px] lg:w-full'>
      <div>
        <div className='float-left mb-[30px] w-[905px] lg:mb-[10px] lg:w-full'>
          <div className='relative w-full'>
            <Image src={BANNER} height={262} width={905} alt='[image]' />
          </div>
          <Breadcumb />
        </div>
        <div className='float-right lg:float-left lg:mb-[5px] lg:w-full'>
          <FormCustomerRequest />
        </div>
      </div>
      <div className='float-left'>
        <ContentLeft />
      </div>
      <div className='float-left w-[905px] lg:w-full lg:px-[10px]'>
        <div className='mt-[20px]'>
          {dataMockConditional.map((value) => {
            return (
              <ListNew
                title={value.title}
                slug={value.slug}
                key={value.id}
                img={value.img}
                desc={value.desc}
                time={value.time}
              />
            );
          })}
        </div>
        {/* <div className='float-left mb-[15px] flex w-full items-center justify-between'>
          <button className='m-[0_auto] h-[38px] w-[140px]  bg-[#ec3236] text-[16px] font-semibold leading-[39px] text-[#fff]'>
            LOAD MORE
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ConditionalGoodForm;
