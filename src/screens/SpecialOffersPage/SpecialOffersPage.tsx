'use client';
import React, { useEffect, useState } from 'react';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import PageWrapper from '@/containers/PageWrapper';
import IntroSpecialOffer from '@/screens/SpecialOffersPage/components/IntroSpecialOffer/IntroSpecialOffer';
import SpecialOffersList from './components/SpecialOffersList/SpecialOffersList';
import { getDepositsI } from '@/models/Services';
import { useAppDispatch } from '@/hooks/redux';
import { getDeposits } from '@/core/store/deposits/deposits-actions';

type choisesT = {
  name: string;
  active: boolean;
};


type questItemT = {
  title: string;
  text: string;
};
type questT = {
  title: string;
  items: questItemT[];
};

interface SpecialOfferPageProps {
  staticData: {
    questions: questT;
    choices: choisesT[];
  };
}

const SpecialOffersPage = (props: SpecialOfferPageProps) => {
  const { staticData } = props;
  const dispatch = useAppDispatch()

  const [current, setCurrent] = useState<string>('все');
  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    offset: 0,
    ordering: 'interest_rate',
    currency: 'kgs',
    special_offer: true
  })


  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }

    else {
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const fetchDeposits = (params: getDepositsI) => {
    dispatch(getDeposits(params))
  }



  useEffect(() => {
    fetchDeposits(filterData)
  }, [filterData])

  return (
    <PageWrapper>
      <IntroSpecialOffer setActive={setCurrent} current={current} choises={staticData.choices} />
      <SpecialOffersList
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
        options={[{
          text: 'По процентной ставке',
          value: 'interest_rate'
        },
        {
          text: 'По минимальному взносу',
          value: 'min_sum'
        },
        {
          text: 'По максимальному взносу',
          value: 'max_sum'
        }
        ]}
      />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questions.items} />
    </PageWrapper>
  );
};

export default SpecialOffersPage;
