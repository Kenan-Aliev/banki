import React from 'react';
import s from './Bonus.module.scss';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image, { StaticImageData } from 'next/image';

interface BonusProps {
  title?: string;
  img?: StaticImageData;
  text?: string;
  height?: number;
}

const Bonus = (props: BonusProps) => {
  const {
    title = 'Бонус до 2000 рублей за открытие вклада!',
    img,
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    height,
  } = props;

  return (
    <div className={s.bonus} style={{ height: `${height}px` }}>
      {img ? <Image src={img} alt={'logo bank'} /> : <div className={s.logo}>Логотип</div>}
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <p>{text}</p>
      </div>
      <Image src={arr_r} alt={'иконка стрелки вправо'} />
    </div>
  );
};

export default Bonus;
