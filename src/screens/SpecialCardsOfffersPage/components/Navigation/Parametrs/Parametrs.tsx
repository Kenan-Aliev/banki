import React from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import Link from 'next/link';

export type ItemT = {
  link?: string;
  name: string;
  active: boolean;
};
type Props = {
  data?: ItemT[];
};

const Parametrs = (props: Props) => {
  const { data } = props;

  return (
    <div className={styles.main_container}>
      {data?.map((el, index) => (
        <Link href={el.link} key={index}>
          <ParametrsItem text={el.name} active={el.active} />
        </Link>
      ))}
    </div>
  );
};

export default Parametrs;
