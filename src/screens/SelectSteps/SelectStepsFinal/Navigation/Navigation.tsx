import React from 'react';
import styles from './Navigation.module.scss';
import Parametrs from '@/screens/SelectSteps/SelectStepsFinal/Navigation/Parametrs/Parametrs';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation_container}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.grey}>Карты</p>
      </div>
      <p className={styles.text_main}>Результат подбора дебетовых карт</p>
      <Parametrs />
    </div>
  );
};

export default Navigation;
