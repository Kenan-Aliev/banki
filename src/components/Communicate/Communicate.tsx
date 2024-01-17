import React from 'react';
import s from './Communicate.module.scss';
import Accordeon from '@/components/Accordeon/Accordeon';

type accT = {
  numb: string;
  sub: string;
  text: string;
};

interface Props {
  data: accT[]
}

const Communicate = ({ data }: Props) => {
  return (
    <div className={s.comm}>
      <div className={s.comm_i}>
        <div className={s.title}>
          Как мы <mark>ведем коммуникацию</mark> с нашими клиентами
        </div>
        <Accordeon items={data} />
      </div>
    </div>
  );
};

export default Communicate;
