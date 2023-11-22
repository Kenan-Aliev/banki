import React from 'react';
import styles from './Item.module.scss';
import alfaImg from '@/assets/icons/alfa_strahovanie.svg';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <Image src={alfaImg} alt={'альфа страхование'} />
        <div className={styles.text_cont}>
          <p className={styles.text}>9 781 ₽</p>
          <p className={styles.text_grey}>9 781 ₽</p>
        </div>
      </div>
      <div className={styles.text_container}>
        <p>BMW X5 2008 г.в., 355 л.с</p>
        <p>Водитель 43 года, стаж 18 лет</p>
        <p>г. Москва</p>
      </div>
      <BlueBtn text={'Купить в АЛЬФАСТРАХОВАНИЕ'} width={231} fSize={14} height={40} />
    </div>
  );
};

export default Item;
