import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

interface SliderCarouselProps {
  itemSlide: Array<{ img_src: string }>;
}

const SliderCarousel = ({ itemSlide }: SliderCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider autoplay {...settings}>
      {itemSlide.map((value, index) => (
        <div key={index} className='bg-cover sn:w-full'>
          <Image src={value.img_src} alt='' width={905} height={444} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderCarousel;
