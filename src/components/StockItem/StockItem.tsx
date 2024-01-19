import React from 'react';
import s from './StockItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  sup: string;
  onClick: () => void;
  isMobile: boolean
  img: StaticImageData
};

const StockItem = ({ title, sup, img, onClick, isMobile }: Props) => {

  const getItemLink = (subtitle: string) => {
    if (subtitle.toLowerCase().includes('кредит')) {
      return '/credits'
    }
    else if (subtitle.toLowerCase().includes('ипот')) {
      return '/ipoteka/offers'
    }
    else if (subtitle.toLowerCase().includes('карт')) {
      return '/cards/select-cards'
    }
    else {
      return '/deposits'
    }
  }

  if (isMobile) {
    return <Link href={getItemLink(sup)}>
      <div className={s.stock_item}>
        <div className={s.title}>{title}</div>
        <div className={s.sup}>{sup}</div>
        <div className={s.img}>
          <Image src={img} alt='image' />
        </div>
      </div>
    </Link>

  }

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
