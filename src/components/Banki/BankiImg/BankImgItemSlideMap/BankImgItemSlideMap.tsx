import React from 'react';
import BankImgItemSlide from '@/components/Banki/BankiImg/BankImgItemSlide/BankImgItemSlide';
import { StaticImageData } from 'next/image';

type Props = {
  images: StaticImageData[];
};

const BankImgItemSlideMap = ({ images }: Props) => {
  return (
    <>
      {images.map((el, index) => (
        <BankImgItemSlide key={index} img={el} />
      ))}
    </>
  );
};

export default BankImgItemSlideMap;
