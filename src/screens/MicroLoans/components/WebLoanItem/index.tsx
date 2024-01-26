import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import sq from '@/assets/icons/blue_sq.svg';
import star from '@/assets/icons/yellow_star.svg';
import BlueLikeBtn from '@/UI/BlueLikeBtn/BlueLikeBtn';
import warn from '@/assets/icons/warning_icon.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CreditItemT } from '@/models/Credits/Credits';
import { baseUrl } from '@/core/const/baseUrl';

interface WebLoanItemProps {
  item: CreditItemT;
}

const WebLoanItem = (props: WebLoanItemProps) => {
  const {
    item: { loanName, loan_amount, loan_term, bank_logo, bank_title, currency, min_rating, max_rating },
  } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Image alt={''} src={baseUrl + bank_logo} width={50} height={50} />
        <div className={s.info}>
          <div className={s.title}>{bank_title}</div>
          <div className={s.sub}>{loanName}</div>
        </div>
      </div>
      <div className={s.line} />
      <div className={s.of_info}>
        <div>
          <span>Сумма</span>
          <span>
            {loan_amount?.min} - {loan_amount?.max} {currency}
          </span>
        </div>
        <div>
          <span>Срок</span>
          <span>
            {loan_term?.min} - {loan_term?.max} мес.
          </span>
        </div>
        <div>
          <span>Ставка</span>
          <span>{min_rating} - {max_rating}%</span>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.btn_cont}>
        <div className={s.warn}>
          <Image alt={'warning'} src={warn} />
        </div>
        <BlueBtn text='Получить деньги' height={40} width={183} fSize={16} />
      </div>
    </div>
  );
};

export default WebLoanItem;
