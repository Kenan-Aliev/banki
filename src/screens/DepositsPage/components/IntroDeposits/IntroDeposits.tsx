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

  const depositsCount = useAppSelector(selectDeposits)?.len
  const banks = useAppSelector(selectBanks)?.banks?.map((bank) => {
    return {
      text: bank.name,
      value: bank.id
    }
  })

  const handleChangeFilterModal = () => {
    setOpenFilterModal(!openFilterModal)
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
            amount={filterData.amount}
            currency={filterData.currency}
            handleChange={handleChangeFilter}
            title='Сумма' />
          <div className={s.btnChange} onClick={handleChangeFilterModal}>
            <Image alt={'иконка настройки'} src={cust} />
            Фильтр
          </div>
          <Stack direction='row' columnGap='10px' width='100%' alignItems='center'>
            <CustomWhiteSelectTitle2
              value={filterData.bank}
              items={banks}
              multiple={true}
              isAllExist={false}
              defaultValue={filterData.bank}
              name='bank'
              onChange={handleChangeFilter}
              prop='bank'
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
