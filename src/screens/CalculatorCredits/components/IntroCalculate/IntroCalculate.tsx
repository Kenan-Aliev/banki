import React, { useState } from 'react';
import s from './IntroCalculate.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import opt from '@/assets/icons/Tuning_icon.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { Grid } from '@mui/material';
import { getCreditsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectCredits } from '@/core/store/credits/credits-selectors';
import { timeframe } from '@/core/data/filters';

interface Props {
  handleChangeFilter: (prop: string, value: any) => void
  filterData: getCreditsI
  handleScrollToCredits: () => void
}

const IntroCalculate = (props: Props) => {
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
          Главная / Кредиты / <mark>Кредитный калькулятор</mark>
        </div>
        <div className={s.title}>Кредитный калькулятор</div>
        <p>
          Калькулятор кредита позволяет рассчитать и сравнить предложения по размеру ежемесячного платежа,
          сумме переплаты и процентной ставке.
        </p>
        <div className={s.calc}>
          <MoneySelect
            width={385}
            amount={summa}
            currency={filterData.currency}
            handleChange={handleChangeSumma}
            moneyProp='summa'
            title='Сумма'
          />
          <div className={s.optionBtn} onClick={handleScrollToCredits}>
            <Image alt={'opt'} src={opt} />
            График платежей
          </div>
          <Grid container width='100%' justifyContent='space-between' alignItems='center' gap='20px 0'>
            <Grid item xs={12} lg={6} xl={8}>
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
            </Grid>
            <Grid item xs={12} lg={3.5} xl={3.5}>
              <BlueBtn
                text={'Подобрать'}
                count={creditsCount ?? 0}
                onClick={() => handleScrollToCredits()}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default IntroCalculate;
