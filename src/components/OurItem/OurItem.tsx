import React from 'react';
import s from './OurItem.module.scss';

type Props = {
  numb: string;
  title: string;
  text: string;
};

const OurItem = ({ numb, title, text }: Props) => {
  return (
    <div className={s.strong_item}>
      <div className={s.title}>
        <span>{numb}</span>
        <span>{title}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default OurItem;
