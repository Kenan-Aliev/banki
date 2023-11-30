import React from 'react';
import s from './BankImgItemSlide.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: string | StaticImageData;
};

const BankImgItemSlide = ({ img }: Props) => {
  return (
    <div className={s.item}>
      <Image src={img} width={200} height={200} alt={'иконка банка'} />
    </div>
  );
};

export default BankImgItemSlide;
