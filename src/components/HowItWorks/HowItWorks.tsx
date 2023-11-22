import React from 'react';
import s from './HowItWorks.module.scss';
import HowItWorksItemsMap from '@/components/HowItWorks/HowItWorksItemsMap/HowItWorksItemsMap';
import { StaticImageData } from 'next/image';

type itemT = {
  img: StaticImageData;
  title: string;
  sub: string;
  text: string;
  w_text?: number;
  height?: number;
};
type Props = {
  title: string;
  sub: string;
  items: itemT[];
};

const HowItWorks = ({ title, sub, items }: Props) => {
  return (
    <div className={s.howWorks}>
      <div className={s.title}>
        <mark>{title}</mark>
        {sub}
      </div>
      <div className={s.work_items}>
        <HowItWorksItemsMap items={items} />
      </div>
    </div>
  );
};

export default HowItWorks;
