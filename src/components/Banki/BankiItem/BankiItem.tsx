import React from 'react';
import s from './BankiItem.module.scss';

type bankiPropsT = {
  img: string;
  name: string;
  rating?: number;
};

const BankiItem = ({ img, name, rating }: bankiPropsT) => {
  return (
    <div className={s.bank_item}>
      <div className={s.bank_img}>
        <img width={100} height={100} src={img} alt={'sbi'} />
      </div>
      <div className={s.info}>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default BankiItem;
