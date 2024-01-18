import React from 'react';
import styles from './ParametrsItem.module.scss';

type Props = {
  active: boolean;
  text: string;
  icon?: boolean;
  onClick?: (parametr: string) => void
};

const ParametrsItem = ({ active, text, onClick }: Props) => {
  return <div
    className={active ? styles.parametr_container_active : styles.parametr_container}
    onClick={() => onClick(text)}
  >
    {text}
  </div>;
};

export default ParametrsItem;
