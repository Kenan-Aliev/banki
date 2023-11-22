'use client';

import React, { useState } from 'react';
import s from './InsuranceCompanys.module.scss';
import Search from '@/UI/Search/Search';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import { StaticImageData } from 'next/image';

type Props = {
  data: StaticImageData[];
  title?: string;
  isTitle: boolean;
  searchItems?: any[];
};
const InsuranceCompanys = ({ data, title, isTitle, searchItems }: Props) => {
  const [search, setSearch] = useState<string>('');
  const filterArr = (items) => {
    return items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
  };
  return (
    <div className={s.wrapper}>
      {isTitle ? <div className={s.title}>{title || 'Страховые компании'}</div> : ''}
      <Search
        placeholder={'Введите название компании'}
        filterArr={filterArr}
        btnHidden={true}
        value={search}
        setValue={setSearch}
        itemsSearch={searchItems}
      />
      <SliderBanksCons data={data} />
    </div>
  );
};

export default InsuranceCompanys;
