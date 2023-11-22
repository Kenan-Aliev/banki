import React from 'react';
import styles from './InvestSpecialOfferItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
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

const InvestSpecialOfferItem = ({ img, c1, imgBank, c2, sub, t1, t2, name, info }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt={''} width={279} height={165} />
      <Image src={imgBank} alt={''} width={40} height={40} className={styles.img} />
      <div className={styles.content_container}>
        <p className={styles.text_main}>{name}</p>
        <p className={styles.sub}>{sub}</p>
        <p className={styles.blue_text}>{info}</p>
        <div className={styles.blue_text_container}>
          <div style={{ width: '88px' }}>
            <p className={styles.blue_text}>{t1}</p>
            <p className={styles.text}>{c1}</p>
          </div>
          <div style={{ width: '112px' }}>
            <p className={styles.blue_text}>{t2}</p>
            <p className={styles.text}>{c2}</p>
          </div>
        </div>
        <BlueBtn text={'Посмотреть'} width={231} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default InvestSpecialOfferItem;
