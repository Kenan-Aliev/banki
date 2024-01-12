'use client'

import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import Parametrs from './Parametrs/Parametrs';
import { getCardsI } from '@/models/Services';
import Filters from '../Filters';
import { useAppSelector } from '@/hooks/redux';
import { selectCards } from '@/core/store/cards/cards-selectors';
import { selectBanks } from '@/core/store/banks/banks-selectors';


interface Props {
  handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
  filterData: getCardsI
  handleScrollToCards: () => void
  cleanFilter: () => void
}


const Navigation = (props: Props) => {
  const { filterData, handleChangeFilter, handleScrollToCards, cleanFilter } = props

  const [filterModal, setFilterModal] = useState(false)
  const [timer, setTimer] = useState(null)
  const [summa, setSumma] = useState(0)

  const banks = useAppSelector(selectBanks)?.results
  const creditsCount = useAppSelector(selectCards)?.count
  const banksData = banks?.map((bank) => ({
    text: bank.name,
    value: bank.id
  }))


  const handleChangeFilterModal = () => {
    setFilterModal(!filterModal)
  }


  const handleChangeSumma = (prop: string, value: any) => {
    setSumma(value)
    // if (timer) {
    //   clearTimeout(timer);
    // }
    // setTimer(
    //   setTimeout(() => {
    //     handleChangeFilter(prop, value)
    //   }, 1000)
    // );
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <div className={styles.top_container}>
          Главная / Карты / <mark>Кредитные карты</mark>
        </div>
        <h1 className={styles.middle_container}>
          Кредитные карты <mark>в Бишкеке</mark>
        </h1>
        <div className={styles.bottom_container}>
          В данном разделе можно найти предложения банков, сравнить условия, изучить отзывы и оформить
          онлайн-заявку.
        </div>
        <Parametrs
          handleChangeFilterModal={handleChangeFilterModal}
          handleChangeFilter={handleChangeFilter}
          filterData={filterData}
          cleanFilter={cleanFilter}
        />
        <Filters
          handleClose={handleChangeFilterModal}
          open={filterModal}
          filter={filterData}
          handleChangeFilter={handleChangeFilter}
          banks={banksData}
          count={creditsCount}
          summa={summa}
          handleChangeSumma={handleChangeSumma}
          handleScrollToCards={handleScrollToCards}
        />
      </div>
    </div>
  );
};

export default Navigation;
