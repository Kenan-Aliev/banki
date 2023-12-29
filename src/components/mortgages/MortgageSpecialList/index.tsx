'use client'

import React from 'react';
import styles from './index.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MortgageSpecialItem from 'src/components/mortgages/MortgageSpecialItem';
import { useAppSelector } from '@/hooks/redux';
import { selectGetSpecialOffersStatus, selectSpecialOffers } from '@/core/store/mortgages/mortgage-selectors';
import { getMortgages } from '@/models/Services';
import Loading from '@/app/loading';

interface MortgageSpecialListProps {
  handleChangeParams: (prop: string, value: any) => void
  params: getMortgages
}

const MortgageSpecialList = (props: MortgageSpecialListProps) => {
  const { handleChangeParams, params } = props;

  const { results: mortgages, count } = useAppSelector(selectSpecialOffers)
  const getOffersStatus = useAppSelector(selectGetSpecialOffersStatus)

  return (
    <div className={styles.container}>
      <div className={styles.map_cont}>
        {
          getOffersStatus === 'loading'
            ?
            <Loading />
            :
            mortgages?.map((item) => (
              <MortgageSpecialItem key={item.id} item={item} />
            ))
        }
      </div>
      {
        count && count > params.offset + params.limit
          ?
          <div className={styles.btn_cont}>
            <BlueBtn text={'Показать еще'} width={235}
              onClick={() => handleChangeParams('offset', params.offset + 10)}
            />
          </div>
          : null
      }
    </div>
  );
};

export default MortgageSpecialList;
