import React from 'react';
import styles from './index.module.scss';
import card from '@/assets/icons/card.png';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

interface SelectStepsFinalCardProps {
  //type need
  card: any;
}

const SelectStepsFinalCard = (props: SelectStepsFinalCardProps) => {
  const {
    card: { name, form },
  } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.card_container}>
        <Image src={card} alt={''} />
        <div className={styles.item}>С доставкой</div>
      </div>
      <div className={styles.bank_container}>
        <p className={styles.text}>{name}</p>
        <p className={styles.grey_text}>{form}</p>
        <div className={styles.star_cont}>
          <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
            <path
              d='M7.98343 0.463527C8.13311 0.00287151 8.78481 0.00287032 8.93449 0.463526L10.4704 5.19049C10.5373 5.3965 10.7293 5.53598 10.9459 5.53598H15.9161C16.4005 5.53598 16.6019 6.15579 16.21 6.44049L12.189 9.36191C12.0138 9.48923 11.9404 9.71492 12.0074 9.92093L13.5433 14.6479C13.6929 15.1085 13.1657 15.4916 12.7738 15.2069L8.75285 12.2855C8.57761 12.1582 8.34031 12.1582 8.16507 12.2855L4.14407 15.2069C3.75222 15.4916 3.22498 15.1085 3.37465 14.6479L4.91053 9.92093C4.97747 9.71492 4.90414 9.48923 4.7289 9.36191L0.707905 6.44049C0.316048 6.15579 0.517434 5.53598 1.0018 5.53598H5.97202C6.18863 5.53598 6.38061 5.3965 6.44755 5.19049L7.98343 0.463527Z'
              fill='#F7AE4F'
            />
          </svg>
          1
        </div>
      </div>
      <div className={styles.procent_container}>
        <p className={styles.blue}>Процент на остаток</p>
        <p className={styles.text}>Нет</p>
      </div>
      <div className={styles.bonus_container}>
        <p className={styles.blue}>Бонусы</p>
        <p className={styles.text}>Нет</p>
      </div>
      <div className={styles.service_container}>
        <p className={styles.blue}>Обслуживание</p>
        <p className={styles.text}>0 — 199 ₽ в год</p>
      </div>
      <div className={styles.info_container}>
        <div className={styles.info}>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='19' viewBox='0 0 20 19' fill='none'>
            <g clipPath='url(#clip0_96_1055)'>
              <path d='M10 5.40039V10.0004' stroke='#4DA7FF' strokeWidth='1.15' strokeLinecap='round' />
              <circle cx='10.0001' cy='12.2999' r='0.766667' fill='#4DA7FF' />
              <path
                d='M6.16634 2.59207C7.29401 1.93975 8.60324 1.56641 9.99967 1.56641C14.2339 1.56641 17.6663 4.99889 17.6663 9.23307C17.6663 13.4673 14.2339 16.8997 9.99967 16.8997C5.76549 16.8997 2.33301 13.4673 2.33301 9.23307C2.33301 7.83664 2.70635 6.5274 3.35867 5.39974'
                stroke='#4DA7FF'
                strokeWidth='1.15'
                strokeLinecap='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_96_1055'>
                <rect width='18.4' height='18.4' fill='white' transform='translate(0.799805 0.0332031)' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <BlueBtn text={'Перейти на сайт'} width={241} height={60} />
      </div>
    </div>
  );
};

export default SelectStepsFinalCard;
