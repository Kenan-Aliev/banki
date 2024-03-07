'use client';

import React from 'react';
import s from './index.module.scss';
import WebLoanItem from '@/screens/MicroLoans/components/WebLoanItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { nanoid } from 'nanoid';
import { CreditItemT } from '@/models/Credits/Credits';
import { useAppSelector } from '@/hooks/redux';
import { selectCredits, selectGetCreditsStatus } from '@/core/store/credits/credits-selectors';
import Loading from '@/app/loading';
import { getCreditsI } from '@/models/Services';
import ShowMoreBtn from '@/UI/ShowMoreBtn';

interface WebLoansProps {
  filterData: getCreditsI
  handleChangeFilterData: (prop: string, value: any) => void
}

const WebLoans = (props: WebLoansProps) => {
  const { filterData, handleChangeFilterData } = props;
  const { results: credits, count } = useAppSelector(selectCredits)
  const getCreditsStatus = useAppSelector(selectGetCreditsStatus)

  return (
    <div className={s.loans}>
      <div className={s.wrapper}>
        {
          getCreditsStatus === 'loading'
            ? <Loading />
            : credits?.map((item,index) => (
              <WebLoanItem key={index} item={item} />
            ))
        }
      </div>
      {count && count > filterData.offset + filterData.limit
        ?
        <div className={s.btn_cont}>
          <ShowMoreBtn
            onClick={() => handleChangeFilterData('offset', filterData.offset + 10)}
          />
        </div>
        : null}
    </div>
  );
};

export default WebLoans;
