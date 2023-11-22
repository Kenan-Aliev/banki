'use client';

import React, { useEffect, useRef, useState } from 'react';
import s from './SliderBanksCons.module.scss';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BankImgItemSlide from '@/components/Banki/BankiImg/BankImgItemSlide/BankImgItemSlide';
import { nanoid } from 'nanoid';

type Props = {
  data: StaticImageData[];
};

const SliderBanksCons = ({ data }: Props) => {
  const sliderRef = useRef(null);
  const [slideItems, setSlideItems] = useState([<div key={nanoid()}></div>]);

  useEffect(() => {
    const slides = data.map((el, index) => (
      <SwiperSlide style={{ zIndex: '-1' }} key={index}>
        <BankImgItemSlide img={el} />
      </SwiperSlide>
    ));
    setSlideItems(slides);
  }, []);

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className={s.slider}>
      <Swiper
        id='swiperBanksCons'
        ref={sliderRef}
        spaceBetween={5}
        slidesPerView={6}
        loop={true}
        style={{ zIndex: '-1' }}
      >
        {slideItems}
      </Swiper>

      <Image src={arr_r} className={s.arr} alt={'стрелка вправо'} onClick={handleNext} />
    </div>
  );
};

export default SliderBanksCons;
