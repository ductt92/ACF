/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';

import {
  DATA_MOCK_FIELDS_EN,
  DATA_MOCK_FIELDS_VI,
} from '@/contants/mock-data/mock-data';

function OperationFieldsMobile() {
  const { lang, t } = useTranslation('common');
  const dataField = lang === 'vi' ? DATA_MOCK_FIELDS_VI : DATA_MOCK_FIELDS_EN;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className='mt-[22px] w-full snMin:hidden'>
      <div className={styles.wrappers}>
        <h1 className={styles.title}>
          <span className=' border-b-[1px] border-[#fff] font-semibold xs:text-[20px]'>
            {t('Field')}
          </span>
        </h1>
        <Slider {...settings}>
          {/* <div className={styles.wrappersSilder}> */}
          {dataField.map((value, index) => {
            return (
              <div key={index} className='px-[10px]'>
                <div className={styles.itemSlide}>
                  <Link href='/#'>
                    <a className={styles.itemText}>
                      <div
                        style={{
                          display: 'block',
                          height: '160px',
                          width: '206px',
                        }}
                      >
                        <img
                          src={value.src}
                          alt='[ico]'
                          style={{
                            display: 'block',
                            height: '160px',
                            width: '206px',
                          }}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className='mt-[15px] block h-auto w-full p-0'>
                    <b className='w-full text-[21px] font-bold text-[#222]'>
                      {value.title}
                    </b>
                    <p className='h-[36px] text-[13px] font-medium leading-[18px]'>
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default OperationFieldsMobile;
