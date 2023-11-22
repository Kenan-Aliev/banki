import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './Slide.module.scss';
import arr from '@/assets/icons/white_arr.svg';
import SlideItem from '@/components/SlideItem/SlideItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type iconsSlideT = {
  img: StaticImageData;
  name: string;
  w: number;
  link?: string;
};
type Props = {
  data: iconsSlideT[];
};

const Slide = ({ data }: Props) => {
  const sliderRef = useRef(null);
  const [slideItems, setSlideItems] = useState<React.JSX.Element[]>();
  useEffect(() => {
    const slides = data.map((el, index) => (
      <SwiperSlide key={index}>
        <Link href={el.link}>
          <SlideItem width={el.w} key={index} img={el.img} name={el.name} />
        </Link>
      </SwiperSlide>
    ));
    setSlideItems(slides);
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={s.slide}>
      <Swiper
        id='swiper'
        ref={sliderRef}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideItems}
      </Swiper>
      <div onClick={handleNext} className={s.arr}>
        <Image src={arr} alt={'arr'} />
      </div>
    </div>
  );
};

export default Slide;
