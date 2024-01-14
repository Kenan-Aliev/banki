'use client'

import React, { useEffect, useState } from 'react';
import styles from './Parametrs.module.scss';
import ParametrsItem from './ParametrsItem/ParametrsItem';
import { getCardsI } from '@/models/Services';




interface Props {
  handleChangeFilterModal: () => void
  handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
  filterData: getCardsI
  cleanFilter: () => void
  parametersData: {
    id: number
    text: string
    value: any
    prop?: string
  }[]
}

const Parametrs = ({ handleChangeFilterModal, handleChangeFilter, filterData, cleanFilter, parametersData }: Props) => {
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
      const candidate = parametersData.find((d) => d.prop === key && d.value === filterData[key])
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
      {parametersData.map((el, index) => (
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
