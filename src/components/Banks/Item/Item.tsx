import React from 'react';
import loco from '@/assets/icons/banki_icon/loco.svg';
import Image from 'next/image';
import styles from './Item.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Item = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.img_cont}>
        <Image src={loco} alt={'loco bank'} />
        <div>
          <p>Еще 12</p>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
            <path
              d='M19.5 9L12.5 15L10.75 13.5M5.5 9L7.83333 11'
              stroke='#4DA7FF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <div className={styles.bank_name_container}>
        <p className={styles.text}>Локо-Банк</p>
        <p className={styles.grey_text}>Добро пожаловать. Локо</p>
      </div>
      <div className={styles.stavka_container}>
        <div>
          <div className={styles.cont}>
            <p>Ставка</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox='0 0 15 14' fill='none'>
              <path
                d='M6.40625 5.17773C6.40625 4.57367 6.89594 4.08398 7.5 4.08398C8.10406 4.08398 8.59375 4.57367 8.59375 5.17773C8.59375 5.57874 8.37794 5.92935 8.05613 6.11975C7.77886 6.28379 7.5 6.53265 7.5 6.85482V7.58398'
                stroke='#4DA7FF'
                strokeLinecap='round'
              />
              <circle cx='7.49935' cy='9.33333' r='0.583333' fill='#4DA7FF' />
              <path
                d='M4.58268 1.94641C5.44069 1.45008 6.43684 1.16602 7.49935 1.16602C10.721 1.16602 13.3327 3.77769 13.3327 6.99935C13.3327 10.221 10.721 12.8327 7.49935 12.8327C4.27769 12.8327 1.66602 10.221 1.66602 6.99935C1.66602 5.93684 1.95008 4.94069 2.44641 4.08268'
                stroke='#4DA7FF'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <p>10,10%</p>
        </div>
        <BlueBtn text={'Ставка указана со скидкой'} width={198} height={36} fSize={14} />
      </div>
      <div className={styles.price_cont}>
        <p className={styles.blue_text}>Платеж</p>
        <p className={styles.text}>14 875 ₽</p>
      </div>
      <div className={styles.button_container}>
        <div className={styles.warning}>
          <svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19' fill='none'>
            <g clipPath='url(#clip0_261_12569)'>
              <path d='M9.5 5.40039V10.0004' stroke='#4DA7FF' strokeWidth='1.15' strokeLinecap='round' />
              <circle cx='9.50104' cy='12.2999' r='0.766667' fill='#4DA7FF' />
              <path
                d='M5.66732 2.59207C6.79498 1.93975 8.10422 1.56641 9.50065 1.56641C13.7348 1.56641 17.1673 4.99889 17.1673 9.23307C17.1673 13.4673 13.7348 16.8997 9.50065 16.8997C5.26647 16.8997 1.83398 13.4673 1.83398 9.23307C1.83398 7.83664 2.20733 6.5274 2.85965 5.39974'
                stroke='#4DA7FF'
                strokeWidth='1.15'
                strokeLinecap='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_261_12569'>
                <rect width='18.4' height='18.4' fill='white' transform='translate(0.300781 0.0332031)' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <BlueBtn text={'Отправить заявку'} width={222} height={60} fSize={20} />
      </div>
    </div>
  );
};

export default Item;
