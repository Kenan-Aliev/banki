'use client'

import React, { useState } from 'react';
import s from './Intro.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { getDepositsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectDeposits } from '@/core/store/deposits/deposits-selectors';
import { selectBanks } from '@/core/store/banks/banks-selectors';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import { Stack } from '@mui/material';
import FilterModal from '@/screens/DepositsPage/components/FilterModal/FilterModal';

interface Props {
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getDepositsI,
  handleScrollToDeposits: () => void
  cleanFilter: () => void
}


const Intro = (props: Props) => {
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
      case "amount_range":
        setSumma(value)
        if (timer) {
          clearTimeout(timer);
        }
        setTimer(
          setTimeout(() => {
            handleChangeFilter(prop, value)
          }, 1000)
        );
        break
      case 'currency':
        handleChangeFilter(prop, value)
        break
    }
  }

  return (
    <div className={s.pageIntro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Вклады / <mark>Накопительные счета</mark>
        </div>
        <div className={s.title}>
          Накопительные счета <mark>в Бишкеке</mark>
        </div>
        <p className={s.subtitle}>
          Открыть накопительный счет с процентной ставкой до 10% легче, чем вы думаете! Выбирайте из 82
          предложения от 56 банков, оформляйте депозит онлайн и получайте проценты.
        </p>
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
              value={filterData.bank_id ?? []}
              items={banks}
              multiple={true}
              isAllExist={false}
              defaultValue={filterData.bank_id}
              name='bank_id'
              onChange={handleChangeFilter}
              prop='bank_id'
              labelName='Банки'
            />
            <BlueBtn text={'Показать'}
              count={depositsCount ?? 0}
              width={173}
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
        cleanFilter={cleanFilter}
      />
    </div>
  );
};

export default Intro;
