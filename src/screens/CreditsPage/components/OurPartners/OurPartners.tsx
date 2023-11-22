'use client';

import React from 'react';
import s from './OurPartners.module.scss';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import { StaticImageData } from 'next/image';

type Props = {
  items: StaticImageData[];
};
const OurPartners = ({ items }: Props) => {
  return (
    <div className={s.wrapp}>
      <div className={s.title}>
        Наши партнеры больше <mark>50 банков</mark>
      </div>
      <SliderBanksCons data={items} />
    </div>
  );
};

export default OurPartners;
