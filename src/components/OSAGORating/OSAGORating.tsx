import React from 'react';
import styles from './OSAGORating.module.scss';
import OSAGEItems from '@/components/OSAGORating/OSAGOItems/OSAGEItems';

type Props = {
  title: string;
  sub: string;
};

const OSAGORating = ({ title, sub }: Props) => {
  return (
    <div className={styles.main_container}>
      <p className={styles.main_text}>
        {title}
        <span>{sub}</span>
      </p>
      <div className={styles.items_container}>
        <OSAGEItems />
      </div>
    </div>
  );
};

export default OSAGORating;
