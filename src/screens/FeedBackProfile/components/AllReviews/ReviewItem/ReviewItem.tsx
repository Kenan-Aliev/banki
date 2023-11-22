'use client';

import React, { useEffect, useState } from 'react';
import s from './ReviewItem.module.scss';
import star from '@/assets/icons/Star.svg';
import pencil from '@/assets/icons/pencil.svg';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  date: string;
  rating: number;
  text: string;
};

const ReviewItem = ({ title, date, rating, text }: Props) => {
  const [images, setImages] = useState<StaticImageData[]>([]);
  useEffect(() => {
    images.length < rating && setImages((prevState) => [...prevState, star]);
  }, [images.length]);

  return (
    <div className={s.wrapper}>
      <Image className={s.pencil} src={pencil} alt={'pencil icon'} />
      <div className={s.info}>
        <div className={s.date}>{date}</div>
        <h1 className={s.title}>{title}</h1>
        <div className={s.star_cont}>
          {images.map((el, index) => (
            <Image src={el} alt={'star'} key={index} />
          ))}
        </div>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
