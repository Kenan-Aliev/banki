import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';
import 'swiper/css';

interface InstallmentPageAdvantagesProps {
  advantages: {
    title: string;
    text: string;
  }[];
}

const InstallmentPageAdvantages = ({ advantages }: InstallmentPageAdvantagesProps) => {
  const sliderRef = useRef(null);
  const [slideItems, setSlideItems] = useState<React.JSX.Element[]>();

  useEffect(() => {
    const slides = advantages.map((el, index) => (
      <SwiperSlide key={index}>
        <div className={styles.card}>
          <p className={styles.bold_text}>{el.title}</p>
          <p className={styles.text}>{el.text}</p>
        </div>
      </SwiperSlide>
    ));
    setSlideItems(slides);
  }, []);

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className={styles.slider}>
      <Swiper id='swiperAdvantages' ref={sliderRef} spaceBetween={10} slidesPerView={4} loop={true}>
        {slideItems}
      </Swiper>
      <Image src={arr_r} className={styles.arr} alt={'стрелка вправо'} onClick={() => handleNext()} />
    </div>
  );
};

export default InstallmentPageAdvantages;
