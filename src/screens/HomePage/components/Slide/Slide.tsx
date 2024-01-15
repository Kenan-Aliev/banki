import React, { useMemo } from 'react';
import s from './Slide.module.scss';
import SlideItem from '@/components/SlideItem/SlideItem';
import { StaticImageData } from 'next/image';
import Slider from '@/components/Slider/Slider';

type iconsSlideT = {
  img: StaticImageData;
  name: string;
  w: number;
  link?: string;
};
type Props = {
  data: iconsSlideT[];
};

const Slide = ({ data }: Props) => {
  const slides = useMemo(() => {
    return data.map((el, index) => {
      return {
        node: <SlideItem width={el.w} key={index} img={el.img} name={el.name} />,
        link: el.link
      }
    })
  }, [data]);


  return (
    <div className={s.slide}>
      <Slider
        data={slides}
        infinite={false}
        leftArr={true}
        rightArr={true}
        centered={true}
        autoplay={true}
        responsive={{
          "320": 1,
          "480": 2,
          "640": 3,
          "768": 4,
          "1500": 5
        }} />
    </div>
  );
};

export default Slide;
