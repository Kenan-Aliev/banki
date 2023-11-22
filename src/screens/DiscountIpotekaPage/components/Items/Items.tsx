'use client';

import React, { useRef } from 'react';
import styles from './Items.module.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import arr from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';

const Items = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className={styles.items_container}>
      <Swiper id='swiper' ref={sliderRef} spaceBetween={10} slidesPerView={5} loop={true}>
        <SwiperSlide>
          <div className={styles.item}>
            Ипотека со скидкой <br /> от застройщиков
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>Льготная ипотека</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            Онлайн-заявка <br /> на ипотеку
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            Квартира на <br /> вторичном рынке
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>Семейная ипотека</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            Ипотека со скидкой <br /> от застройщиков
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>Льготная ипотека</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            Онлайн-заявка <br /> на ипотеку
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            Квартира на <br /> вторичном рынке
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>Семейная ипотека</div>
        </SwiperSlide>
      </Swiper>
      <div style={{ flexShrink: '0' }} onClick={next}>
        <Image style={{ cursor: 'pointer' }} src={arr} alt={'arr'} />
      </div>
    </div>
  );
};

export default Items;
