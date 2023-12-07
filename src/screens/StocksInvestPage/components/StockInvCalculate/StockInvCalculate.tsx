'use client'

import React, { useState } from 'react';
import s from './StockInvCalculate.module.scss';
import data from '@/core/data/index';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import Search from '@/UI/Search/Search';

type Props = {
  chooseD: ChooseT[];
};
type ChooseT = {
  name: string;
  active: boolean;
};
const StockInvCalculate = ({ chooseD }: Props) => {
  const [search, setSearch] = useState('')
  const chooseUp = data.StockInvest.calc_choose_up;

  const handleChangeSearchValue = (e: any) => {
    setSearch(e.target.value)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.choose_up}>
        <ChoiseItemsMap choiseItems={chooseUp} />
      </div>
      <Search
        placeholder={'Введите название'}
        onChange={handleChangeSearchValue}
        filteredArr={[]}
        value={search}
      />
      <div className={s.choose_up}>
        <ChoiseItemsMap choiseItems={chooseD} />
      </div>
    </div>
  );
};

export default StockInvCalculate;
