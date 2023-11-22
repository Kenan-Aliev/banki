'use client';

import React, { useRef } from 'react';
import s from './OffersInvest.module.scss';
import Image, { StaticImageData } from 'next/image';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import OffersInvestItem from '@/screens/InvestmentPage/components/OffersInvest/OffersInvestItem/OffersInvestItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Props = {
  items: offerT[];
};
type offerT = {
  img: StaticImageData;
  title: string;
  sub: string;
  name: string;
  info: string;
};
const OffersInvest = ({ items }: Props) => {
  const sliderRef = useRef(null);
  const nextSlide = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  const prevSlide = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <div className={s.wrap}>
      <div className={s.title}>
        Предложения <mark>месяца</mark>
      </div>
      <div className={s.cont}>
        <Image src={arr_l} onClick={prevSlide} className={s.arr} alt={'arrow left'} />
        <Swiper ref={sliderRef} id={'swiper'} loop={true} spaceBetween={5} slidesPerView={4}>
          {items.map((el, index) => (
            <SwiperSlide key={index}>
              <OffersInvestItem img={el.img} name={el.name} info={el.info} title={el.title} sub={el.sub} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image src={arr_r} onClick={nextSlide} className={s.arr} alt={'arrow right'} />
      </div>
    </div>
  );
};

export default OffersInvest;
