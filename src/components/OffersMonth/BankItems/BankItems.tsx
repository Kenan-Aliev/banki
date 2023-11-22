import React from 'react';
import styles from './BankItems.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  procent_text: string;
  value: string;
};

const BankItems = ({ img, procent_text, value }: Props) => {
  return (
    <div className={styles.bank_container}>
      <Image src={img} alt='' />
      <div className={styles.text_container}>
        <p className={styles.procent_text}>{procent_text}</p>
        <p className={styles.rub_text}>RUB</p>
        <p className={styles.value_text}>{value}</p>
      </div>
    </div>
  );
};

export default BankItems;
