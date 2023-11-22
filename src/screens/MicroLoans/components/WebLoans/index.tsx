'use client';

import React from 'react';
import s from './index.module.scss';
import WebLoanItem from '@/screens/MicroLoans/components/WebLoanItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { nanoid } from 'nanoid';
import { CreditItemT } from '@/models/Credits/Credits';

interface WebLoansProps {
  credits: CreditItemT[];
}

const WebLoans = (props: WebLoansProps) => {
  const { credits } = props;

  return (
    <div className={s.loans}>
      <div className={s.wrapper}>
        {credits.slice(0, 12).map((item) => (
          <WebLoanItem key={nanoid()} item={item} />
        ))}
      </div>
      <BlueBtn text={'Показать ещё'} width={236} height={60} />
    </div>
  );
};

export default WebLoans;
