import React from 'react';
import styles from './ParametrsItem.module.scss';

type Props = {
  active: boolean;
  text: string;
  icon?: boolean;
};

const ParametrsItem = ({ active, text }: Props) => {
  return <div className={active ? styles.parametr_container_active : styles.parametr_container}>{text}</div>;
};

export default ParametrsItem;
