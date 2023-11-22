import React from 'react';
import HowItWorksItem from '@/components/HowItWorks/HowItWorksItem/HowItWorksItem';
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
  items: itemT[];
};

const HowItWorksItemsMap = ({ items }: Props) => {
  return (
    <>
      {items.map((el, index) => (
        <HowItWorksItem
          height={el.height}
          w_text={el.w_text}
          key={index}
          img={el.img}
          title={el.title}
          sub={el.sub}
          text={el.text}
        />
      ))}
    </>
  );
};

export default HowItWorksItemsMap;
