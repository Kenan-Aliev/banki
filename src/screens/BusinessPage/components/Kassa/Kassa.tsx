import React from 'react';
import styles from './Kassa.module.scss';
import Image from 'next/image';
import alfa from '@/assets/icons/bank_icons/alfa_bank.svg';
import vtb from '@/assets/icons/bank_icons/vtb_bank.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Kassa = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.text}>Рассчетно-кассовое обслуживание</p>
      <div className={styles.items_container}>
        <div className={styles.item}>
          <Image src={alfa} alt={'bank'} />
          <p className={styles.text}>«Ноль за обслуживание»</p>
          <div className={styles.button_container}>
            <div>
              <p className={styles.blue}>Обслуживание</p>
              <p className={styles.text}>0 ₽</p>
            </div>
            <button className={styles.button}>Подробнее</button>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={vtb} alt={'bank'} width={125} height={50} />
          <p className={styles.text}>«На старте»</p>
          <div className={styles.button_container}>
            <div>
              <p className={styles.blue}>Обслуживание</p>
              <p className={styles.text}>0 ₽</p>
            </div>
            <button className={styles.button}>Подробнее</button>
          </div>
        </div>
      </div>
      <BlueBtn text={'Подобрать тариф'} width={250} fSize={20} height={60} />
    </div>
  );
};

export default Kassa;
