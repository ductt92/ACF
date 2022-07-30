/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './style.module.scss';
interface SliderPartnerProps {
  dataImage: Array<{ src: string }>;
}
const Partner = ({ dataImage }: SliderPartnerProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {dataImage.map((value, index) => (
          <div key={index} className={styles.sliderCustom}>
            <img
              src={value.src}
              style={{
                margin: '10px',
                maxHeight: '50px',
                maxWidth: '150px',
                verticalAlign: 'middle',
              }}
              alt=''
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
