import React from 'react';
import s from './SliderBusinessItem.module.scss';

type Props = {
  title: string;
  sub: string;
};

const SliderBusinessItem = ({ title, sub }: Props) => {
  return (
    <div className={s.item}>
      <h1 className={s.title}>{title}</h1>
      <h2 className={s.sub}>{sub}</h2>
    </div>
  );
};

export default SliderBusinessItem;
