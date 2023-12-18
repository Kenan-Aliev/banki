'use client'

import React, { useEffect, useState } from 'react';
import s from './IntroConsumer.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { Stack } from '@mui/material';
import Filters from '../Filters/Filters';
import { getCreditsI } from '@/models/Services';
import { BankT } from '@/models/Banks/banks';
import { useAppSelector } from '@/hooks/redux';
import { selectCredits } from '@/core/store/credits/credits-selectors';


interface Props {
  banks: BankT[]
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getCreditsI
  handleScrollToCredits: () => void
  cleanFilter: () => void
}

const IntroConsumer = (props: Props) => {
  const { cleanFilter, filterData, handleChangeFilter, handleScrollToCredits, banks } = props

  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [availableCreditsCount, setAvailableCreditsCount] = useState<number>(null)


  const creditsCount = useAppSelector(selectCredits)?.count
  const banksData = banks.map((bank) => ({
    text: bank.name,
    value: bank.id
  }))

  const handleChangeApplicationModal = () => {
    setIsApplicationModalOpen(!isApplicationModalOpen)
  }

  const handleChangeFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  useEffect(() => {
    if (creditsCount && availableCreditsCount === null) {
      setAvailableCreditsCount(creditsCount)
    }
  }, [creditsCount])


  return (
    <div className={s.intro}>
      <Application
        open={isApplicationModalOpen}
        handleClose={handleChangeApplicationModal}
        productId={0}
        productType='credit' />

      <Filters
        open={isFilterModalOpen}
        handleClose={handleChangeFilterModal}
        filter={filterData}
        handleChangeFilter={handleChangeFilter}
        banks={banksData}
        count={creditsCount}
        handleScrollToCredits={handleScrollToCredits}
        cleanFilter={cleanFilter}
      />
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Потребительские кредиты</mark>
        </div>
        <h1 className={s.title}>Потребительские кредиты</h1>
        <p>
          На vsebanki.kg легко подобрать и получить потребительский кредит на любые цели. Больше вам не
          придется думать, как и где взять кредит с низкой ставкой.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          На {new Date().toLocaleDateString()} доступно более {availableCreditsCount} кредитов с минимальной для физических лиц на сайте vsebanki.kg.
          Вам остается только сравнить, выбрать самый выгодный вариант и оформить{' '}
          <mark>онлайн-заявку.</mark>
        </p>
        <BlueBtn text={'Оформить заявку'} width={248} onClick={handleChangeApplicationModal} />

        <div className={s.calculate}>
          <MoneySelect
            width={385}
            amount={filterData.summa}
            currency={filterData.currency}
            handleChange={handleChangeFilter}
            currencyProp='currency'
            moneyProp='summa'
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
              value={filterData.bank ?? []}
              items={banksData}
              multiple={true}
              isAllExist={false}
              defaultValue={filterData.bank ?? []}
              name='bank'
              onChange={handleChangeFilter}
              prop='bank'
              labelName='Банки'
            />
            <BlueBtn text={'Показать'}
              count={creditsCount ?? 0}
              width={173}
              onClick={() => handleScrollToCredits()} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default IntroConsumer;
