import React from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.nav}>
        <p>Главная</p>
        <p>/</p>
        <p>Страхование</p>
        <p>/</p>
        <p className={styles.grey_text}>КАСКО</p>
      </div>
      <div className={styles.main_text_container}>
        <p className={styles.blue}>Калькулятор КАСКО онлайн</p>
        <div>Узнайте стоимость КАСКО в 11 страховых компаниях за 1 минуту</div>
      </div>
      <div className={styles.bottom_blocks_container}>
        <div className={styles.left_block}>
          <p className={styles.main_text}>Введите госномер — данные заполнятся автоматически</p>
          <div className={styles.text_container}>
            <input placeholder={'Гос номер'} />
            <BlueBtn text={'Рассчитать'} width={173} height={60} fSize={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
