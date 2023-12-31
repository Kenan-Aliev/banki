import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';
import { baseUrl } from '@/core/const/baseUrl';

interface MortgageSpecialItemProps {
  item: MortgageItemT;
}

const MortgageSpecialItem = (props: MortgageSpecialItemProps) => {
  const {
    item: {
      name,
      bank_title,
      conditions,
      interest_rate,
      bank_logo,
      loan_term
    },
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={baseUrl + bank_logo} alt={''} width={20} height={20} />
      </div>
      <div className={styles.content_container}>
        <p className={styles.text_main}>{bank_title}</p>
        <p className={styles.sub}>{name}</p>
        <p className={styles.blue_text} dangerouslySetInnerHTML={{ __html: conditions }} />
        <div className={styles.blue_text_container}>
          <div style={{ width: '88px' }}>
            <p className={styles.blue_text}>Ставка</p>
            <p className={styles.text}>{interest_rate?.min} - {interest_rate?.max}%</p>
          </div>
          <div style={{ width: '112px' }}>
            <p className={styles.blue_text}>Срок</p>
            <p className={styles.text}>до {loan_term.max} мес.</p>
          </div>
        </div>
        <BlueBtn text={'Посмотреть'} width={231} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default MortgageSpecialItem;
