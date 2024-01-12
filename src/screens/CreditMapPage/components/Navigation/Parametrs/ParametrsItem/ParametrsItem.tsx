import React from 'react';
import styles from './ParametrsItem.module.scss';
import Image from '../Image';

type Props = {
  id?: number
  text: string;
  value: any
  active: boolean
  icon?: boolean
  prop?: string
  onClick: (id: number, value: any, prop?: string) => void
};

const ParametrsItem = ({ active, text, value, onClick, icon, prop, id }: Props) => {
  return (
    <div
      className={active ? styles.parametr_container_active : styles.parametr_container}
      onClick={() => onClick(id, value, prop)}>
      {text}
      {icon && <Image />}
    </div>
  );
};

export default ParametrsItem;
