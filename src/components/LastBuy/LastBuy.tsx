'use client';

import React, { useRef } from 'react';
import styles from './LastBuy.module.scss';
import Item from './Item/Item';
import arr from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LastBuy = () => {
  const sliderRef = useRef();
  const nextSlide = () => {
    if (!sliderRef.current) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sliderRef.current.swiper.slideNext();
  };
  return (
    <div className={styles.main_container}>
      <p>Последние купленные полисы</p>
      <div className={styles.items_container}>
        <Swiper id='swiper' ref={sliderRef} spaceBetween={10} slidesPerView={4} loop={true}>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
          <SwiperSlide>
            <Item />
          </SwiperSlide>
        </Swiper>
        <Image onClick={nextSlide} style={{ cursor: 'pointer' }} src={arr} alt={'arr'} />
      </div>
    </div>
  );
};

export default LastBuy;
