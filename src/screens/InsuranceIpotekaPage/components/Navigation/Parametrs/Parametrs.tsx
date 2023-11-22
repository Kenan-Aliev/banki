import React from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import { nanoid } from 'nanoid';

const Parametrs = () => {
  const data = [
    {
      text: 'ОСАГО',
      active: true,
    },
    {
      text: 'Каско',
      active: false,
    },
    {
      text: 'Страхование ипотеки',
      active: false,
    },
    {
      text: 'Путешествие',
      active: false,
    },
    {
      text: 'Жизнь',
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
