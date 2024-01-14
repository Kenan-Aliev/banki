'use client'

import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import { getCardsI } from '@/models/Services';
import Parametrs from '@/screens/CreditMapPage/components/Navigation/Parametrs/Parametrs';
import { useAppSelector } from '@/hooks/redux';
import { selectBanks } from '@/core/store/banks/banks-selectors';
import { selectCards } from '@/core/store/cards/cards-selectors';
import Filters from '../Filters';
import Link from 'next/link';

const parametersData = [
  {
    id: 1,
    text: 'Все',
    value: 'all'
  },
  {
    id: 2,
    text: 'VISA',
    value: 'VISA',
    prop: 'card_network'
  },
  {
    id: 3,
    text: 'MASTERCARD',
    value: 'MASTERCARD',
    prop: 'card_network'
  },
  {
    id: 4,
    text: 'ЭЛКАРТ',
    value: 'ЭЛКАРТ',
    prop: 'card_network'
  },
  {
    id: 5,
    text: 'UNIONPAY',
    value: 'UNIONPAY',
    prop: 'card_network'
  },
  {
    id: 6,
    text: 'Бесплатное снятие',
    value: true,
    prop: 'commission'
  },
  {
    id: 7,
    text: 'Бесплатное обслуживание',
    value: true,
    prop: 'commission'
  },
  {
    id: 8,
    text: 'Кэшбек',
    value: true,
    prop: 'cashback'
  },
];

interface Props {
  handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
  filterData: getCardsI
  handleScrollToCards: () => void
  cleanFilter: () => void
}

const Navigation = ({ cleanFilter, filterData, handleChangeFilter, handleScrollToCards }: Props) => {

  const [filterModal, setFilterModal] = useState(false)
  const [availableCreditsCount, setAvailableCreditsCount] = useState<number>(null)


  const banks = useAppSelector(selectBanks)?.results
  const cardsCount = useAppSelector(selectCards)?.count
  const banksData = banks?.map((bank) => ({
    text: bank.name,
    value: bank.id
  }))


  const handleChangeFilterModal = () => {
    setFilterModal(!filterModal)
  }

  useEffect(() => {
    if (cardsCount && availableCreditsCount === null) {
      setAvailableCreditsCount(cardsCount)
    }
  }, [cardsCount])

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        Главная / Карты / <mark>Дебетовые карты</mark>
      </div>
      <div className={styles.main_text_container}>
        <h1 className={styles.text_cont}>
          Дебетовые карты <mark>в Бишкеке</mark>
        </h1>
        <div className={styles.little_text_cont}>
          <p>
            На vsebanki.kg есть {availableCreditsCount} банковских карт от 20 банков.Также на сайте вы найдете
            <Link href='/cards/special-offers'>
              {" "}специальные предложения{" "}
            </Link>
            по дебетовым картам.
          </p>
        </div>
      </div>
      <Parametrs
        handleChangeFilterModal={handleChangeFilterModal}
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        cleanFilter={cleanFilter}
        parametersData={parametersData}
      />
      <Filters
        handleClose={handleChangeFilterModal}
        open={filterModal}
        filter={filterData}
        handleChangeFilter={handleChangeFilter}
        banks={banksData}
        handleScrollToCards={handleScrollToCards}
        count={cardsCount}
        cleanFilter={cleanFilter}
      />
    </div>
  );
};

export default Navigation;
