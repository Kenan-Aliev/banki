import React from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.nav_container}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>Карты</p>
        <p className={styles.text}>/</p>
        <p className={styles.grey_text}>Подбор карт</p>
      </div>
      <div className={styles.main_text_container}>
        <p className={styles.big_text}>Мастер подбора карт</p>
        <p className={styles.text}>
          Подберите дебетовую или кредитную карту по вашим параметрам на (НАЗВАНИЕ СЕРВИСА)
        </p>
      </div>
      <Link href={'/cards/select-steps'}>
        <BlueBtn text={'Подобрать карту'} width={245} height={60} fSize={20} />
      </Link>
    </div>
  );
};

export default Navigation;
