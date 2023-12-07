'use client';

import React, { useMemo } from 'react';
import s from './OurPartners.module.scss';
import { BankT } from '@/models/Banks/banks';
import BankImgItemSlide from '@/components/Banki/BankiImg/BankImgItemSlide/BankImgItemSlide';
import Slider from '@/components/Slider/Slider';

type Props = {
  items: BankT[];
};
const OurPartners = ({ items }: Props) => {

  const slides = useMemo(() => {
    return items.map((el, index) => (
      {
        link: '/banks/' + el.id,
        node: <BankImgItemSlide img={el.logo} key={el.id} />
      }

    ));
  }, [items])

  return (
    <div className={s.wrapp}>
      <div className={s.title}>
        Наши партнеры больше <mark>{slides?.length} банков</mark>
      </div>
      <Slider
        data={slides}
        infinite={false}
        leftArr={true}
        rightArr={true}
        responsive={{
          "320": 2,
          "480": 3,
          "640": 3,
          "768": 4,
          "1500": 4
        }}
      />
    </div>
  );
};

export default OurPartners;
