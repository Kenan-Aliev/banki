'use client';

import React, { useState } from 'react';
import s from './IntroMortgage.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { Grid, TextField } from '@mui/material';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { mortgageTerms } from '@/core/data/filters';
import { getMortgages } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectMortgages } from '@/core/store/mortgages/mortgage-selectors';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
  setActive?: React.Dispatch<React.SetStateAction<string>>;
  current?: string;
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getMortgages
  handleScrollToMortgages: () => void
};

const IntroMortgage = (props: Props) => {
  const { items, current, setActive,
    filterData, handleChangeFilter, handleScrollToMortgages } = props

  const mortgagesCount = useAppSelector(selectMortgages)?.count

  const [timer, setTimer] = useState(null);

  const [summa, setSumma] = useState(0)
  const [initialPayment, setInitialPayment] = useState(0)

  const handleChangeInputValues = (prop: string, value: any) => {
    switch (prop) {
      case "summa":
        setSumma(value)
        break
      case 'initialPayment':
        setInitialPayment(value)
        break
    }
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        handleChangeFilter(prop, value)
      }, 1000)
    );
  }

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Ипотека</mark>
        </div>
        <h1 className={s.title}>
          Ипотека <mark>в Бишкеке</mark>
        </h1>
        <div className={s.sub}>
          На vsebanki.kg можно с легкостью подобрать ипотечный кредит и оформить онлайн-заявку. Вы
          получите ипотеку на самых выгодных условиях*. У нас большая база ипотечных предложений от разных
          банков. Также на сайте вы найдете отзывы реальных клиентов и заключения экспертов (vsebanki.kg)
          с описанием преимуществ и недостатков каждого предложения. Это позволит найти подходящий ипотечный
          кредит и быть уверенным в своем выборе!
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={items} />
        </div>
        <div className={s.info}>
          <Grid container justifyContent='space-between' rowGap='20px' alignItems='center'>
            <Grid item xs={12} lg={5.5} xl={5.8}>
              <TextField
                fullWidth
                label='Стоимость жилья(в сомах)'
                value={summa}
                onChange={(e) => { handleChangeInputValues('summa', e.target.value) }}
              />
            </Grid>

            <Grid item xs={12} lg={5.5} xl={5.8} >
              <TextField
                fullWidth
                label='Первоначальный взнос(в сомах)'
                value={initialPayment}
                onChange={(e) => handleChangeInputValues('initialPayment', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} lg={8.5} xl={8.5}>
              <CustomWhiteSelectTitle2
                items={mortgageTerms}
                labelName='Срок'
                isAllExist={true}
                name='term'
                prop='term'
                onChange={handleChangeFilter}
                defaultValue={filterData.term ?? ''}
                value={filterData.term ?? ''}
              />
            </Grid>

            <Grid item xs={12} lg={3} xl={3}>
              <BlueBtn
                text={'Показать'}
                count={mortgagesCount}
                onClick={handleScrollToMortgages} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default IntroMortgage;
