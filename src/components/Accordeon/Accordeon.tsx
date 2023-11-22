import React from 'react';
import s from './Accordeon.module.scss';
import AccordeonItem from '@/components/Accordeon/components/AccordeonItem/AccordeonItem';

type Itew = {
  numb: string;
  sub: string;
  text: string;
};
type Props = {
  items: Itew[];
};

const Accordeon = ({ items }: Props) => {
  return (
    <div className={s.acc_items}>
      {items.map((el, index) => (
        <AccordeonItem numb={el.numb} key={index} sub={el.sub} text={el.text} />
      ))}
    </div>
  );
};

export default Accordeon;
