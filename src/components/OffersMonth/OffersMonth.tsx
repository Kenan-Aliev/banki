import React from 'react';
import styles from './OffersMonth.module.scss';
import Wrapper from '@/containers/Wrapper';
import alfa_bank from '@/assets/icons/bank_icons/alfa_bank.svg';
import open_bank from '@/assets/icons/bank_icons/open_bank.svg';
import ros_bank from '@/assets/icons/bank_icons/ros_bank.svg';
import vtb_bank from '@/assets/icons/bank_icons/vtb_bank.svg';
import BankItems from '@/components/OffersMonth/BankItems/BankItems';
import { nanoid } from 'nanoid';

const data = [
  { img: alfa_bank, procent_text: 'от 0%', value: '«Платинум»' },
  { img: open_bank, procent_text: 'До 12% на остаток', value: '«Бесплатное обслуживание»' },
  { img: ros_bank, procent_text: '180 дней без %', value: '«0 руб. за обслуживание»' },
  {
    img: vtb_bank,
    procent_text: 'Кредитка «Год без %»',
    value: '«0 руб. за обслуживание и кешбек на все покупки»',
  },
];

const OffersMonth = () => {
  return (
    <Wrapper>
      <div className={styles.main_container}>
        <p className={styles.text}>Предложение месяца</p>
        <div className={styles.banks_container}>
          {data.map((el) => (
            <BankItems img={el.img} procent_text={el.procent_text} value={el.value} key={nanoid()} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default OffersMonth;
