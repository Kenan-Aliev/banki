import React from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import { nanoid } from 'nanoid';

const Parametrs = () => {
  const data = [
    {
      text: 'Все продукты',
      active: true,
    },
    {
      text: 'Расчетный счет (РКО)',
      active: false,
    },
    {
      text: 'Кредиты',
      active: false,
    },
    {
      text: 'Бизнес карты',
      active: false,
    },
  ];

  return (
    <div className={styles.main_container}>
      {data.map((el) => (
        <ParametrsItem key={nanoid()} text={el.text} active={el.active} />
      ))}
    </div>
  );
};

export default Parametrs;
