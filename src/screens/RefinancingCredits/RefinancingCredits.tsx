'use client'

import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroRefinancing from '@/screens/RefinancingCredits/components/IntroRefinancing/IntroRefinancing';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import OurStrongs from '@/components/OurStrongs/OurStrongs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import { BankT } from '@/models/Banks/banks';
import { resetCredits } from '@/core/store/credits/credits-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectCreditTypes } from '@/core/store/credits/credits-selectors';
import { getCreditsI } from '@/models/Services';
import { getCreditTypes, getCredits } from '@/core/store/credits/credits-actions';
import CreditBankList from '@/components/credits/CreditBankList';
import data from '@/core/data/index';

type ourStrongT = {
  num: string
  title: string
  sub: string
}

type itemT = {
  title: string;
  sub: string;
  img: StaticImageData;
  text: string;
};
type quesT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    ourData: itemT[];
    questData: quesT[];
    ourStrongs: ourStrongT[]
  };
  sliderBanks: BankT[];
};

const RefinancingCredits = ({ data, sliderBanks }: Props) => {
  const creditTypes = useAppSelector(selectCreditTypes)

  // const itWorksMap = data..ourData;

  const dispatch = useAppDispatch()

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    ordering: 'min_summ',
    // loanType: '5'
  })

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
      dispatch(resetCredits())
    }
  }


  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  const fetchCreditTypes = () => {
    dispatch(getCreditTypes())
  }

  useEffect(() => {
    fetchCreditTypes()
    return () => {
      dispatch(resetCredits())
    }
  }, [])

  useEffect(() => {
    fetchCredits(filterData)
  }, [filterData])

  // useEffect(() => {
  //   if (creditTypes && creditTypes.length > 0) {
  //     const creditType = creditTypes.find((type) => type.title === 'Рефинансирование')
  //     handleChangeFilter('loanType', creditType.id)
  //   }
  // }, [creditTypes])


  return (
    <PageWrapper>
      <IntroRefinancing />
      <SliderBanksCons data={sliderBanks} />
      <CreditBankList
        options={[
          {
            text: 'По минимальной сумме',
            value: 'min_summ'
          },
          {
            text: 'По максимальной сумме',
            value: 'max_summ'
          },
          {
            text: 'По минимальной процентной ставке',
            value: 'min_rating'
          }
        ]}
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
      />
      <OurStrongs data={data.ourStrongs} />
      <HowItWorks title={'Как работает '} sub={'сервис'} items={data.ourData} />
      <FrequentQuestions title={'Важные вопросы'} items={data.questData} />
    </PageWrapper>
  );
};

export default RefinancingCredits;
