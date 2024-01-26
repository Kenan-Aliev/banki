'use client';

import React, { useMemo } from 'react';
import s from './SliderBanksCons.module.scss';
import 'swiper/css';
import BankImgItemSlide from '@/components/Banki/BankiImg/BankImgItemSlide/BankImgItemSlide';
import { BankT } from '@/models/Banks/banks';
import Slider from '@/components/Slider/Slider';

type Props = {
  data: BankT[];
};

const SliderBanksCons = ({ data }: Props) => {
  const slides = useMemo(() => {
    return data.map((el, index) => (
      {
        link: '/banks/' + el.id,
        node: <BankImgItemSlide img={el.logo} key={el.id} />
      }

    ));
  }, [data])

  return (
    <div className={s.slider}>
      <Slider
        data={slides}
        infinite={false}
        leftArr={true}
        rightArr={true}
        responsive={{
          "320": slides && slides.length > 2 ? 2 : slides?.length,
          "480": slides && slides.length > 3 ? 3 : slides?.length,
          "640": slides && slides.length > 3 ? 3 : slides?.length,
          "768": slides && slides.length > 5 ? 5 : slides?.length,
          "1500": slides && slides.length > 5 ? 5 : slides?.length
        }}
      />
    </div>
  );
};

export default SliderBanksCons;
