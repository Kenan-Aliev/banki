import React from 'react';
import styles from './Navigation.module.scss';
import Parametrs from './Parametrs/Parametrs';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <div className={styles.top_container}>
          Главная / Карты / <mark>Кредитные карты</mark>
        </div>
        <div className={styles.middle_container}>
          Кредитные карты <mark>в Бишкеке</mark>
        </div>
        <div className={styles.bottom_container}>
          В данном разделе можно найти предложения банков, сравнить условия, изучить отзывы и оформить
          онлайн-заявку.
        </div>
        <Parametrs />
      </div>
    </div>
  );
};

export default Navigation;
