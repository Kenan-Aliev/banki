import React from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import Link from 'next/link';
import { Box } from '@mui/material';

export type ItemT = {
  link?: string;
  name: string;
  active: boolean;
};
type Props = {
  data?: ItemT[];
  onClick?: (parametr: string) => void
};

const Parametrs = (props: Props) => {
  const { data, onClick } = props;

  return (
    <div className={styles.main_container}>
      {data?.map((el, index) => (
        el.link ?
          <Link href={el.link} key={index}>
            <ParametrsItem text={el.name} active={el.active} />
          </Link>
          :
          <Box
            sx={{
              "&:hover": {
                cursor: 'pointer'
              }
            }}
            key={index}
          >
            <ParametrsItem text={el.name} active={el.active} onClick={onClick} />
          </Box>
      ))
      }
    </div >
  );
};

export default Parametrs;
