import Image from 'next/image';
import React from 'react';

import Breadcumb from '@/components/Breadcrumb';
import ContentLeft from '@/components/ContentLeft';
import FormCustomerRequest from '@/components/FormCustomerRequest';

import BANNER from '~/images/hinh-anh-xam.jpeg';
const AboutForm = () => {
  // const { lang, t } = useTranslation('common');
  // const dataAbout = lang === 'vi' ? DATA_ABOUT_VI : DATA_ABOUT_EN;
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
      <div>
        <ContentLeft />
      </div>
      <div className='float-left w-[905px] lg:w-full lg:px-[10px]'>
        {/* <div className=' mt-[20px] '>
          {dataAbout.map((value, index) => {
            return (
              <ListNew
                title={value?.title}
                key={index}
                img={value?.img}
                desc={value?.desc}
                time={value.time}
                slug={value.slug}
              />
            );
          })}
        </div> */}
        {/* <div className='float-left mb-[15px] flex w-full items-center justify-between'>
          <button className='m-[0_auto] h-[38px] w-[140px]  bg-[#ec3236] text-[16px] font-semibold leading-[39px] text-[#fff]'>
            {t('LoadMore')}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutForm;
