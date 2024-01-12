'use client'

import React, { useEffect, useState } from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import { getCardsI } from '@/models/Services';

const data = [
  {
    id: 1,
    text: 'Все',
    value: 'all'
  },
  {
    id: 2,
    text: 'VISA',
    value: 'Visa',
    prop: 'card_network'
  },
  {
    id: 3,
    text: 'MasterCard',
    value: 'MasterCard',
    prop: 'card_network'
  },
  {
    id: 4,
    text: 'Бесплатное снятие',
    value: true,
    prop: 'commission'
  },
  {
    id: 5,
    text: 'Бесплатное обслуживание',
    value: true,
    prop: 'commission'
  },
  {
    id: 6,
    text: 'Кэшбек',
    value: true,
    prop: 'cashback'
  },
  {
    id: 7,
    text: 'KGS',
    value: 'kgs',
    prop: 'currency'
  },
  {
    id: 8,
    text: 'USD',
    value: 'usd',
    prop: 'currency'
  },
];


interface Props {
  handleChangeFilterModal: () => void
  handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
  filterData: getCardsI
  cleanFilter: () => void
}

const Parametrs = ({ handleChangeFilterModal, handleChangeFilter, filterData, cleanFilter }: Props) => {
  const [activeParametr, setActiveParametr] = useState(1)


  const handleChangeActiveParametr = (id: number, value: any, prop?: string) => {
    if (value !== 'all') {
      handleChangeFilter(prop, value, true)
    }
    else {
      cleanFilter()
    }
    setActiveParametr(id)
  }


  const setActiveParametrByFilterChange = () => {
    let equalsCount = 0
    let activeParam = 0
    for (const key in filterData) {
      const candidate = data.find((d) => d.prop === key && d.value === filterData[key])
      if (candidate) {
        const isEqual = candidate.value === filterData[key]
        if (isEqual) {
          equalsCount++
          activeParam = candidate.id
        }
      }
    }

    if (equalsCount > 1 || equalsCount === 0) {
      setActiveParametr(1)
    }
    else {
      setActiveParametr(activeParam)
    }
  }

  useEffect(() => {
    setActiveParametrByFilterChange()
  }, [filterData])
  return (
    <div className={styles.main_container}>
      {data.map((el, index) => (
        <ParametrsItem
          key={index}
          id={el.id}
          text={el.text}
          value={el.value}
          prop={el.prop}
          active={activeParametr === el.id}
          onClick={handleChangeActiveParametr}
        />

      ))}
      <ParametrsItem
        text='Все параметры'
        active={false}
        icon={true}
        onClick={handleChangeFilterModal}
        value=''
      />
    </div>
  );
};

export default Parametrs;
