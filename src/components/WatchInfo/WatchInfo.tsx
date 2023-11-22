import React from 'react';
import s from './WatchInfo.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  title: string;
  text: string;
};
const WatchInfo = ({ title, text }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.text}>{text}</div>
      </div>
      <BlueBtn text={'Смотреть'} width={222} />
    </div>
  );
};

export default WatchInfo;
