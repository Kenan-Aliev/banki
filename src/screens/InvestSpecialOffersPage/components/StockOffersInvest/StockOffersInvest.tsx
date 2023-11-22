import React from 'react';
import s from './StockOffersInvest.module.scss';
import InvestSpecialOfferItem from '@/screens/InvestSpecialOffersPage/components/InvestSpecialOffers/InvestSpecialOfferItem/InvestSpecialOfferItem';
import Image, { StaticImageData } from 'next/image';
import image from '@/assets/icons/image.png';

type OffersT = {
  img: StaticImageData;
  imgBank: StaticImageData;
  name: string;
  sub: string;
  info: string;
  t1?: string;
  t2?: string;
  c1?: string;
  c2?: string;
};

type Props = {
  data: OffersT[];
};

const StockOffersInvest = ({ data }: Props) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Акции</h1>
      <div className={s.items_wrapper}>
        {data.map((el, index) => (
          <InvestSpecialOfferItem
            key={index}
            t1={el.t1}
            c1={el.c1}
            img={el.img}
            imgBank={el.imgBank}
            name={el.name}
            sub={el.sub}
            info={el.info}
          />
        ))}
        <Image src={image} alt={'asd'} style={{ height: '418px', marginTop: '40px' }} />
        <Image src={image} alt={'asd'} style={{ height: '418px', marginTop: '40px' }} />
        <Image src={image} alt={'asd'} style={{ height: '418px', marginTop: '40px' }} />
      </div>
    </div>
  );
};

export default StockOffersInvest;
