import React from 'react';
import s from './StockItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  sup: string;
  onClick: () => void;
  isMobile: boolean
  img: StaticImageData
};

const StockItem = ({ title, sup, img, onClick, isMobile }: Props) => {
  return (
    <div onClick={onClick} className={s.stock_item}>
      <div className={s.title}>{title}</div>
      <div className={s.sup}>{sup}</div>
      {isMobile && <div className={s.img}>
        <Image src={img} alt='image' />
      </div>}
    </div>
  );
};

export default StockItem;
