'use client';
import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCalculate from '@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import CreditBankList from '@/components/credits/CreditBankList';
import { getCreditsI } from '@/models/Services';
import { useAppDispatch } from '@/hooks/redux';
import { getCredits } from '@/core/store/credits/credits-actions';

type ItemT = {
  title: string;
  text: string;
};
interface CalculatorCreditsProps {
  staticData: {
    questData: ItemT[];
  };
}

const CalculatorCredits = (props: CalculatorCreditsProps) => {
  const { staticData } = props;
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    ordering: 'min_summ',
    currency: 'kgs'
  })

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const handleScrollToCredits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  useEffect(() => {
    fetchCredits(filterData)
  }, [filterData])

  return (
    <PageWrapper>
      <IntroCalculate
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToCredits={handleScrollToCredits}
      />
      <div ref={ref}>
        <CreditBankList
          options={[
            {
              text: 'По процентной ставке',
              value: ''
            },
            {
              text: 'По максимальной сумме',
              value: ''
            },
            {
              text: 'По максимальному сроку',
              value: ''
            }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
          showPayment={true}
        />
      </div>
      <Feedback title={'Отзывы'} sub={' о кредитах'} category='Кредиты' />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default CalculatorCredits;
