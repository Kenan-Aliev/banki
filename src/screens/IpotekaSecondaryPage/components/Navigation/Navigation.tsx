import React from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>Ипотека</p>
        <p className={styles.text}>/</p>
        <p className={styles.text_grey}>Вторичное жильё</p>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Ипотека на вторичном рынке <br /> жилья <span>в Бишкеке</span>
        </p>
        <p className={styles.little_text}>
          Получите одобрение ипотеки и самую выгодную ставку. <br /> Заполните анкету, чтобы получить
          предложения банков и отправить заявку <br /> на одобрение в один клик.
        </p>
      </div>
      <BlueBtn text={'Заполнить анкету'} width={251} fSize={20} height={60} />
    </div>
  );
};

export default Navigation;
