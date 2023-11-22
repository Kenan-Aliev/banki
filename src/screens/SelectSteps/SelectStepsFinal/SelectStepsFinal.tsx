'use client';
import React from 'react';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SelectSteps/SelectStepsFinal/Navigation/Navigation';
import styles from './SelectStepsFinal.module.scss';
import SelectStepsFinalCard from '@/screens/SelectSteps/SelectStepsFinal/SelectStepsFinalCard';

const SelectStepsFinal = () => {
  return (
    <Wrapper>
      <Navigation />
      <div className={styles.sort_container}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M4 6H20M4 12H20M13 18H20'
            stroke='#121212'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <p>По популярности</p>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M19 9L12 15L10.25 13.5M5 9L7.33333 11'
            stroke='#212121'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className={styles.items_container}>
        {[].map((card) => (
          <SelectStepsFinalCard key={card.id} card={card} />
        ))}
      </div>
    </Wrapper>
  );
};

export default SelectStepsFinal;
