'use client';

import React, { useState } from 'react';
import s from './IntroAuto.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { Stack } from '@mui/material';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { timeframe } from '@/core/data/filters';
import { getCreditsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectCredits } from '@/core/store/credits/credits-selectors';

interface Props {
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getCreditsI
  handleScrollToCredits: () => void
}

const IntroAuto = (props: Props) => {
  const { filterData, handleChangeFilter, handleScrollToCredits } = props

  const [timer, setTimer] = useState(null)
  const [summa, setSumma] = useState(0)

  const creditsCount = useAppSelector(selectCredits)?.count

  const handleChangeSumma = (prop: string, value: any) => {
    switch (prop) {
      case "summa":
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
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Автокредиты</mark>
        </div>
        <h1 className={s.title}>Подобрать кредит на автомобиль</h1>
        <p>Рассчитать кредит на авто, сравнить условия по автокредитованию, выяснить,
          где лучше взять кредит на машину, и оформить онлайн-заявку в банк</p>
        <div className={s.calc}>
          <MoneySelect
            width={385}
            amount={summa}
            currency={filterData.currency ?? ''}
            handleChange={handleChangeSumma}
            title='Стоимость автомобиля'
            moneyProp='summa'
          />
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
              name='credit'
              prop='credit'
              onChange={handleChangeFilter}
              defaultValue={filterData.credit ?? ''}
              value={filterData.credit ?? ''}
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

export default IntroAuto;
