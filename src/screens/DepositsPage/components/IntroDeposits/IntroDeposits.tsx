'use client'

import React, { useState } from 'react';
import s from './IntroDeposits.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import { getDepositsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectBanks } from '@/core/store/banks/banks-selectors';
import { selectDeposits } from '@/core/store/deposits/deposits-selectors';
import FilterModal from '../FilterModal/FilterModal';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { Stack } from '@mui/material';
import { timeframe } from '@/core/data/filters';

interface Props {
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getDepositsI,
  handleScrollToDeposits: () => void
  cleanFilter: () => void
}

const IntroDeposits = (props: Props) => {
  const { handleChangeFilter, filterData, handleScrollToDeposits, cleanFilter } = props
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [timer, setTimer] = useState(null)
  const [summa, setSumma] = useState(0)

  const depositsCount = useAppSelector(selectDeposits)?.count
  const banks = useAppSelector(selectBanks)?.results?.map((bank) => {
    return {
      text: bank.name,
      value: bank.id
    }
  })

  const handleChangeFilterModal = () => {
    setOpenFilterModal(!openFilterModal)
  }


  const handleChangeSumma = (prop: string, value: any) => {
    switch (prop) {
      case "amount_range": {
        const v = value[0] === '0' ? (value as string).substring(1) : value
        setSumma(v);
        if (timer) {
          clearTimeout(timer);
        }
        setTimer(
          setTimeout(() => {
            handleChangeFilter(prop, value)
          }, 1000)
        );
        break
      }
      case 'currency':
        handleChangeFilter(prop, value)
        break
    }
  }

  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Вклады</mark>
        </div>
        <h1 className={s.title}>
          Вклады<mark> в Кыргызстане</mark>
        </h1>
        <div className={s.sub}>
          Сервис vsebanki.kg позволяет быстро найти лучшие вклады с самыми высокими процентными ставками и рассчитать доходность.
          На <mark>{new Date().toLocaleDateString()}</mark> вам доступны проверенные вклады со ставками до 24% и открытием в онлайн-режиме.
          Сравните ставки по вкладам для физических лиц и выберите, куда лучше вложить деньги под проценты,
          чтобы получить максимальный доход.
        </div>
        <div className={s.calculate}>
          <MoneySelect
            width={385}
            amount={summa}
            currency={filterData.currency}
            handleChange={handleChangeSumma}
            title='Сумма' />
          <div className={s.btnChange} onClick={handleChangeFilterModal}>
            <Image alt={'иконка настройки'} src={cust} />
            Фильтр
          </div>
          <Stack
            direction='row'
            sx={{
              gap: '10px',
              width: '100%',
              alignItems: 'center',
              "@media(max-width:640px)": {
                flexWrap: 'wrap'
              }
            }}
          >
            <CustomWhiteSelectTitle2
              items={timeframe}
              labelName='Срок'
              isAllExist={true}
              name='term_range'
              prop='term_range'
              onChange={handleChangeFilter}
              defaultValue={filterData.term_range ?? ''}
              value={filterData.term_range ?? ''}
            />
            <BlueBtn text={'Показать'}
              count={depositsCount ?? 0}
              width={220}
              onClick={() => handleScrollToDeposits()} />
          </Stack>
        </div>
      </div>

      <FilterModal
        open={openFilterModal}
        handleClose={handleChangeFilterModal}
        filter={filterData}
        handleChangeFilter={handleChangeFilter}
        banks={banks}
        count={depositsCount}
        handleScrollToDeposits={handleScrollToDeposits}
        cleanFilter={() => {
          setSumma(0)
          cleanFilter()
        }}
      />
    </div >
  );
};

export default IntroDeposits;
