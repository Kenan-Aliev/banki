import React from 'react';
import styles from './BankCardItem.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CreditCardT } from '@/models/Cards/Cards';

interface BankCardItemProps {
  item: CreditCardT;
}

const BankCardItem = (props: BankCardItemProps) => {
  const {
    item: { bank_name, name },
  } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        {bank_name}
        <span>{name}</span>
      </div>
      <div className={styles.period_container}>
        <p className={styles.blue_text}>Льготный период</p>
        <p className={styles.text}>до 1095 дней</p>
      </div>
      <div className={styles.time_container}>
        <p className={styles.blue_text}>Обслуживание</p>
        <p className={styles.text}>Бесплатно</p>
      </div>
      <div className={styles.bonus_container}>
        <p className={styles.blue_text}>Бонусная программа</p>
        <p className={styles.text}>до 5 000 баллов/мес</p>
      </div>
      <BlueBtn text={'Оформить'} width={180} height={60} fSize={20} />
    </div>
  );
};

export default BankCardItem;
