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
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Вклады</mark>
        </div>
        <div className={s.title}>
          Вклады <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          На Vsebanki.kg вы найдете лучшие вклады с высокими процентами в
          Бишкеке и по всему Кыргызстану. Наш сервис предоставляет быстрый и
          удобный подбор вкладов, гарантируя вам не только максимальную доходность,
          но и надежность выбранных банков. Ознакомьтесь с предложениями от проверенных и
          надежных банков в Бишкеке и других городах Кыргызстана, выберите наиболее выгодные
          условия и оформите вклад онлайн. Не пропустите эксклюзивные акции и
          актуальную базу предложений на <mark>{new Date().toLocaleDateString()}</mark>,
          созданные специально для наших пользователей.
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
    </div >
  );
};

export default IntroDeposits;
