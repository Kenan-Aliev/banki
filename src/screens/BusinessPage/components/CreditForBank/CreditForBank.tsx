import React from 'react';
import styles from './CreditForBank.module.scss';
import aks_bars from '@/assets/icons/bank_icons/ak_bars_bank.svg';
import sper_factoring from '@/assets/icons/bank_icons/sber_factoring_bank.svg';
import Image from 'next/image';

const CreditForBank = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_container}>
        <p className={styles.main_text}>Кредиты для бизнеса</p>
        <p className={styles.text}>
          Лучшие кредитные предложения для юридических лиц от крупнейших банков. Полное описание условий и
          экспертный анализ на (НАЗВАНИЕ СЕРВИСА)
        </p>
      </div>
      <div className={styles.right_container}>
        <div className={styles.item_container}>
          <Image src={aks_bars} alt={''} />
          <p className={styles.text}>«Кредит для бизнеса без залога»</p>
          <p className={styles.blue_text}>Ставка от 15,5%</p>
        </div>
        <div className={styles.item_container}>
          <Image src={sper_factoring} alt={''} />
          <p className={styles.text}>«Факторинг на любые цели без залога»</p>
          <p className={styles.blue_text}>Ставка от 15,5%</p>
        </div>
      </div>
    </div>
  );
};

export default CreditForBank;
