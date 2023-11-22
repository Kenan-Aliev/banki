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
        <p className={styles.grey_text}>ОСАГО</p>
      </div>
      <div className={styles.main_text_container}>
        <p className={styles.blue}>Калькулятор ОСАГО</p>
        <div>
          Рассчитайте стоимость страховки на машину сразу в топ-15 страховых компаний и купите полис <br />{' '}
          ОСАГО на 2023 год с выгодой до 74%
        </div>
      </div>
      <div className={styles.bottom_blocks_container}>
        <div className={styles.left_block}>
          <p className={styles.main_text}>Введите госномер — данные заполнятся автоматически</p>
          <div className={styles.text_container}>
            <input placeholder={'Гос номер'} />
            <BlueBtn text={'Рассчитать'} width={173} height={60} fSize={20} />
          </div>
          <p className={styles.text}>
            или <span>выберите марку</span> самостоятельно
          </p>
        </div>
        <div className={styles.right_block}>
          <p>Здесь будут показаны ваши последние расчеты и оформленные полисы</p>
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
