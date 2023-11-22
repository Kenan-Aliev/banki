import React from 'react';
import styles from './Navigation.module.scss';
import Parametrs from '@/screens/InsuranceIpotekaPage/components/Navigation/Parametrs/Parametrs';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.nav}>
        <p>Главная</p>
        <p>/</p>
        <p className={styles.grey_text}>Страхование</p>
      </div>
      <div className={styles.main_text_container}>
        <p className={styles.blue}>Страхование</p>
        <div>
          Выбирайте и сравнивайте предложения ведущих страховых компаний онлайн. Мы покажем цены, условия и
          реальные отзывы клиентов. Сразу после оплаты направим на email электронный полис — он имеет ту же
          юридическую силу, что и бумажный.
        </div>
      </div>
      <Parametrs />
      <div className={styles.bottom_blocks_container}>
        <div className={styles.left_block}>
          <p className={styles.main_text}>Введите госномер — данные заполнятся автоматически</p>
          <div className={styles.text_container}>
            <p>Гос номер</p>
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
