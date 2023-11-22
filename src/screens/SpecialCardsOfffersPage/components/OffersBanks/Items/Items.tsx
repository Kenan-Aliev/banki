import React from 'react';
import styles from './Items.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockOfferImage from '@/assets/icons/offer_img1.png';
import mockBankImage from '@/assets/icons/gasprom.svg';
import { CreditCardT } from '@/models/Cards/Cards';

interface ItemsProps {
  item: CreditCardT;
}

const Items = ({ item }: ItemsProps) => {
  return (
    <div className={styles.container}>
      <Image src={mockOfferImage} alt={''} width={279} height={165} />
      <Image src={mockBankImage} alt={''} width={40} height={40} className={styles.img} />
      <div className={styles.content_container}>
        <p className={styles.text_main}>{item.bank_name}</p>
        <p className={styles.sub}>{'Акция «Путешествий с Level.Travel» с картой UnionPay от Газпромбанка'}</p>
        <p className={styles.blue_text}>{'Кэшбек до 10 000 ₽ за покупку тура'}</p>
        <div className={styles.blue_text_container}>
          <div style={{ width: '88px' }}>
            <p className={styles.blue_text}>{'Обслуживание'}</p>
            <p className={styles.text}>{'0 ₽'}</p>
          </div>
          <div style={{ width: '112px' }}>
            <p className={styles.blue_text}>{'Кэшбек на все покупки'}</p>
            <p className={styles.text}>{'1,5%'}</p>
          </div>
        </div>
        <BlueBtn text={'Посмотреть'} width={231} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default Items;
