import React from 'react';
import styles from './Company.module.scss';
import expoBank from '@/assets/icons/bank_icons/expobank.svg';
import smpBank from '@/assets/icons/bank_icons/smp_bank.svg';
import psbBank from '@/assets/icons/bank_icons/psb_bank.svg';
import sberBank from '@/assets/icons/bank_icons/sber_bank.svg';
import tinkofBank from '@/assets/icons/bank_icons/tinkof_bank.svg';
import norvikBank from '@/assets/icons/bank_icons/norvik_bank.svg';
import Image from 'next/image';

const Company = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.text}>Страховые компании</p>
      <div className={styles.search_container}>
        <input placeholder={'Введите название компании'} />
        <button>Найти</button>
      </div>
      <div className={styles.items_container}>
        <div>
          <Image src={expoBank} alt={'Экспобанк'} />
        </div>
        <div>
          <Image src={smpBank} alt={'Экспобанк'} />
        </div>
        <div>
          <Image src={psbBank} alt={'Экспобанк'} />
        </div>
        <div>
          <Image src={sberBank} alt={'Экспобанк'} />
        </div>
        <div>
          <Image src={tinkofBank} alt={'Экспобанк'} />
        </div>
        <div>
          <Image src={norvikBank} alt={'Экспобанк'} />
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' width='44' height='43' viewBox='0 0 44 43' fill='none'>
          <circle cx='22' cy='21.5' r='21.5' fill='#7BBEFF' />
          <path
            d='M10.5 21C9.94772 21 9.5 21.4477 9.5 22C9.5 22.5523 9.94772 23 10.5 23V21ZM35.2071 22.7071C35.5976 22.3166 35.5976 21.6834 35.2071 21.2929L28.8431 14.9289C28.4526 14.5384 27.8195 14.5384 27.4289 14.9289C27.0384 15.3195 27.0384 15.9526 27.4289 16.3431L33.0858 22L27.4289 27.6569C27.0384 28.0474 27.0384 28.6805 27.4289 29.0711C27.8195 29.4616 28.4526 29.4616 28.8431 29.0711L35.2071 22.7071ZM10.5 23H34.5V21H10.5V23Z'
            fill='white'
          />
        </svg>
      </div>
    </div>
  );
};

export default Company;
