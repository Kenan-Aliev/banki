import React from 'react';
import styles from './Banks.module.scss';
import Item from '@/screens/CreditsIpotekaPage/components/Banks/Item/Item';

const Banks = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.top_cont}>
        <div className={styles.text}>
          <p className={styles.blue}>943 кредитов</p>
          <p>подобранно</p>
        </div>
        <div className={styles.button}>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
            <path
              d='M4.5 6H20.5M4.5 12H20.5M13.5 18H20.5'
              stroke='#121212'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <p>По популярности</p>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
            <path
              d='M19.5 9L12.5 15L10.75 13.5M5.5 9L7.83333 11'
              stroke='#212121'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <div className={styles.items}>
        <Item />
      </div>
    </div>
  );
};

export default Banks;
