import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import sq from '@/assets/icons/blue_sq.svg';
import star from '@/assets/icons/yellow_star.svg';
import BlueLikeBtn from '@/UI/BlueLikeBtn/BlueLikeBtn';
import warn from '@/assets/icons/warning_icon.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CreditItemT } from '@/models/Credits/Credits';

interface WebLoanItemProps {
  item: CreditItemT;
}

const WebLoanItem = (props: WebLoanItemProps) => {
  const {
    item: { name, min_amount, max_amount, timeframe_min, timeframe_max },
  } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Image alt={''} src={sq} />
        <div className={s.info}>
          <div className={s.title}>{name}</div>
          <div className={s.sub}>{'description'}</div>
          <div className={s.star}>
            <Image alt={'star'} src={star} />
            4,3
          </div>
        </div>
      </div>
      <div className={s.line} />
      <div className={s.of_info}>
        <div>
          <span>Сумма</span>
          <span>
            {min_amount} - {max_amount} ₽
          </span>
        </div>
        <div>
          <span>Срок</span>
          <span>
            {timeframe_min} - {timeframe_max} день
          </span>
        </div>
        <div>
          <span>Ставка</span>
          <span>{'rate'}%</span>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.btn_cont}>
        <BlueLikeBtn title={'Узнать вероятность одобрения'} />
        <div className={s.warn}>
          <Image alt={'warning'} src={warn} />
        </div>
        <BlueBtn text='Получить деньги' height={40} width={183} fSize={16} />
      </div>
    </div>
  );
};

export default WebLoanItem;
