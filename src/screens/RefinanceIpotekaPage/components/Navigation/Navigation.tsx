import React from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.nav_cont}>
        <p>Главная</p>
        <p>/</p>
        <p>Ипотека</p>
        <p>/</p>
        <p className={styles.grey_text}>Рефинансирование</p>
      </div>
      <div className={styles.main_text_container}>
        <div className={styles.text}>
          Рефинансирование ипотечного кредита <span>в Бишкеке</span>
        </div>
        <p className={styles.little_text}>
          Получите одобрение ипотеки и самую выгодную ставку. Заполните анкету, чтобы получить предложения
          банков и отправить заявку на одобрение в один клик.
        </p>
      </div>
      <BlueBtn text={'Заполните анкету'} width={251} height={60} fSize={20} />
    </div>
  );
};

export default Navigation;
