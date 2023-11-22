import React from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation_container}>
        <p>Главная</p>
        <p>/</p>
        <p>Ипотека</p>
        <p>/</p>
        <p className={styles.grey}>Мастер подбора ипотеки</p>
      </div>
      <div className={styles.text_Container_main}>
        <p className={styles.main_text}>Мастер подбора ипотеки</p>
        <p className={styles.text}>
          Заполните одну анкету и получите лучшие предложения от банков по ипотеке.
        </p>
      </div>
      <BlueBtn text={'Подобрать ипотеку'} width={269} height={60} fSize={20} />
    </div>
  );
};

export default Navigation;
