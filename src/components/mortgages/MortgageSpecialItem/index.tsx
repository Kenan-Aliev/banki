import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import gazprom from '@/assets/icons/gasprom.svg';
import loco from '@/assets/icons/banki_icon/loco.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';

interface MortgageSpecialItemProps {
  item: MortgageItemT;
}

const MortgageSpecialItem = (props: MortgageSpecialItemProps) => {
  const {
    item: {
      name = 'Газпромбанк',
      description = 'Акция «Путешествий с Level.Travel» с картой UnionPay от Газпромбанка',
      rate,
    },
  } = props;

  return (
    <div className={styles.container}>
      <Image src={loco} alt={''} width={279} height={165} />
      <Image src={gazprom} alt={''} width={40} height={40} className={styles.img} />
      <div className={styles.content_container}>
        <p className={styles.text_main}>{name || 'Газпромбанк'}</p>
        <p className={styles.sub}>{description}</p>
        <p className={styles.blue_text}>{'Кэшбек до 10 000 ₽ за покупку тура'}</p>
        <div className={styles.blue_text_container}>
          <div style={{ width: '88px' }}>
            <p className={styles.blue_text}>Ставка</p>
            <p className={styles.text}>от {rate}%</p>
          </div>
          <div style={{ width: '112px' }}>
            <p className={styles.blue_text}>Выгода</p>
            <p className={styles.text}>до {rate}%</p>
          </div>
        </div>
        <BlueBtn text={'Посмотреть'} width={231} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default MortgageSpecialItem;
