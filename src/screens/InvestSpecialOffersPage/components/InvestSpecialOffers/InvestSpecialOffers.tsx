import React from 'react';
import styles from './InvestSpecialOffers.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Image, { StaticImageData } from 'next/image';
import image from '@/assets/icons/image.png';
import InvestSpecialOfferItem from '@/screens/InvestSpecialOffersPage/components/InvestSpecialOffers/InvestSpecialOfferItem/InvestSpecialOfferItem';

type offerT = {
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
  dataMap: offerT[];
};
const InvestSpecialOffers = ({ dataMap }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.map_cont}>
        {dataMap.map((el, index) => (
          <InvestSpecialOfferItem
            sub={el.sub}
            img={el.img}
            name={el.name}
            c1={el.c1}
            info={el.info}
            t1={el.t1}
            t2={el.t2}
            imgBank={el.imgBank}
            c2={el.c2}
            key={index}
          />
        ))}
        <Image src={image} alt={'asd'} height={307} width={279} className={styles.image} />
      </div>
      <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60} />
    </div>
  );
};

export default InvestSpecialOffers;
