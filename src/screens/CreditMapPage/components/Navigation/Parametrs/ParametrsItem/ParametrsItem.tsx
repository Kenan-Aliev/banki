import React from 'react';
import styles from './ParametrsItem.module.scss';
import Image from '../Image';

type Props = {
  active: boolean;
  text: string;
  icon?: boolean;
};

const ParametrsItem = ({ active, text, icon }: Props) => {
  return (
    <div className={active ? styles.parametr_container_active : styles.parametr_container}>
      {text}
      {icon && <Image />}
    </div>
  );
};

export default ParametrsItem;
