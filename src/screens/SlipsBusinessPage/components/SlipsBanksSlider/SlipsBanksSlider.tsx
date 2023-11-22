'use client';
import React, { useRef } from 'react';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import s from './SlipsBanksSlider.module.scss';
import Image from 'next/image';
import SliderBusinessItem from '@/components/SliderBusinessItem/SliderBusinessItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type SlideItemT = {
  title: string;
  sub: string;
};
type Props = {
  items: SlideItemT[];
};

const SlipsBanksSlider = ({ items }: Props) => {
  const swiperRef = useRef(null);
  const nextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };
  const prevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };
  return (
    <div className={s.cont}>
      <Image onClick={prevSlide} style={{ cursor: 'pointer' }} src={arr_l} alt={'arrow left'} />
      <Swiper id='swiper' slidesPerView={5} ref={swiperRef} loop={true} spaceBetween={5}>
        {items.map((el, index) => (
          <SwiperSlide key={index}>
            <SliderBusinessItem title={el.title} sub={el.sub} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image onClick={nextSlide} style={{ cursor: 'pointer' }} src={arr_r} alt={'arrow right'} />
    </div>
  );
};

export default SlipsBanksSlider;
