'use client'

import React from 'react';
import s from './IntroDeposits.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import { getDepositsI } from '@/models/Services';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectBanks } from '@/core/store/banks/banks-selectors';
import { resetDeposits } from '@/core/store/deposits/deposits-slice';
import { selectDeposits } from '@/core/store/deposits/deposits-selectors';

interface Props {
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getDepositsI,
  handleScrollToDeposits: () => void
  fetchDeposits: (params: getDepositsI) => void

}

const IntroDeposits = (props: Props) => {
  const { handleChangeFilter, filterData, handleScrollToDeposits, fetchDeposits } = props
  const dispatch = useAppDispatch()

  const depositsCount = useAppSelector(selectDeposits)?.len
  const banks = useAppSelector(selectBanks)?.banks?.map((bank) => {
    return {
      text: bank.name,
      value: bank.id
    }
  })


  const handleShowDeposits = () => {
    dispatch(resetDeposits())
    handleScrollToDeposits()
    fetchDeposits({
      ...filterData,
      page: 1
    })
    handleChangeFilter('page', 1)
  }

  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Вклады</mark>
        </div>
        <div className={s.title}>
          Вклады <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          Сервис подбора вкладов и накопительных счетов позволяет быстро найти высокие процентные ставки,
          <mark>рассчитать доходность</mark> и <mark>открыть вклад онлайн</mark>. У нас самая полная база
          актуальных предложений на 29.06.2023, а также регулярные акции с повышенной ставкой только для
          пользователей (НАЗВАНИЕ СЕРВИСА).
        </div>
        <div className={s.calculate}>
          <MoneySelect
            width={385}
            amount={filterData.amount}
            handleChange={handleChangeFilter}
            title='Банк' />
          <div className={s.btnChange}>
            <Image alt={'иконка настройки'} src={cust} />
            Фильтр
          </div>
          <CustomWhiteSelectTitle
            title={'Банк'}
            options={banks}
            width={385}
            handleChange={handleChangeFilter}
            value={filterData.bank}
          />
          <BlueBtn text={'Показать'} count={depositsCount ?? 0} width={173} onClick={handleShowDeposits} />
        </div>
      </div>
    </div>
  );
};

export default IntroDeposits;
