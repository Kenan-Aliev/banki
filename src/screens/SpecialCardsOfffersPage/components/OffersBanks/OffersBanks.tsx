'use client'

import React from 'react';
import styles from './OffersBanks.module.scss';
import Items from '@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CreditCardT } from '@/models/Cards/Cards';
import { getCardsI } from '@/models/Services';
import { selectCards, selectCardsStatus } from '@/core/store/cards/cards-selectors';
import { useAppSelector } from '@/hooks/redux';
import Loading from '@/app/loading';

interface OffersBanksProps {
  title?: string;
  filterData: getCardsI
  handleChangeFilter: (prop: string, value: any) => void
}

const OffersBanks = (props: OffersBanksProps) => {
  const { filterData, title, handleChangeFilter } = props;
  const { results: cards, count } = useAppSelector(selectCards)
  const getCardsStatus = useAppSelector(selectCardsStatus)

  return (
    <div className={styles.container}>
      {title ? <div className={styles.title}>{title}</div> : ''}
      <div className={styles.map_cont}>
        {getCardsStatus === 'loading' ?
          <Loading />
          :
          cards?.map((item, index) => (
            <Items key={index} item={item} />
          ))
        }
      </div>
      {count && count > filterData.offset + filterData.limit
        ?
        <div className={styles.btn_cont}>
          <BlueBtn text={'Показать еще'} width={235}
            onClick={() => handleChangeFilter('offset', filterData.offset + 10)}
          />
        </div>
        : null}
    </div>
  );
};

export default OffersBanks;
