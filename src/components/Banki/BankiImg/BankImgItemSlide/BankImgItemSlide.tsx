import React from 'react';
import s from './BankImgItemSlide.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
};

const BankImgItemSlide = ({ img }: Props) => {
  return (
    <div className={s.item}>
      <Image src={img} alt={'иконка банка'} />
    </div>
  );
};

export default BankImgItemSlide;
