import React from 'react';

import TrackForm from '@/components/FormTrack';
import CustomerRequest from '@/container/CustomerRequest';
import OperationFields from '@/container/OperationFields';
import OperationFieldsMobile from '@/container/OperationFieldsMobile';
import SliderCarousel from '@/container/Slider';

import { DATA_MOCK_IMG_SLIDER } from '@/contants/mock-data/mock-data';

function HomePage() {
  // const { lang } = useTranslation('common');

  // const dataMockDetails =
  //   lang === 'vi' ? DATA_MOCK_DETAIL_VI : DATA_MOCK_DETAIL_EN;
  const imgSlider = DATA_MOCK_IMG_SLIDER;

  return (
    <>
      <section className='hero'>
        <div className='m-auto flex w-[1170px] sn:flex-col lg:w-full'>
          <div className='col-left w-9/12 sn:w-full'>
            <SliderCarousel itemSlide={imgSlider} />
          </div>
          <div className='col-right sn:w-full'>
            <TrackForm />
          </div>
        </div>
      </section>
      <div className='mt-[40px] mb-10'>
        <div className='m-auto w-[1174px] lg:w-full lg:px-[10px]'>
          <OperationFields />
          <OperationFieldsMobile />
        </div>
      </div>
      <div className='mt-[10px] inline-block h-[338px] w-full bg-[url(/images/chuyen-phat-nhanh-acf.png)] bg-cover bg-no-repeat lg:hidden'>
        <div className=' m-auto w-[1174px]'>
          <CustomerRequest />
        </div>
      </div>
      {/* <div className='m-auto flex w-[1170px] flex-row gap-8 py-10 sm:w-full sm:flex-col sm:gap-0 lg:w-full lg:px-[15px]'>
        {dataMockDetails.map((v, key) => (
          <CardDetails
            key={key}
            title={v.title}
            index={key}
            describe={v.describe}
            src={v.src}
            slug={v.slug}
          />
        ))}
      </div> */}
    </>
  );
}

export default HomePage;
