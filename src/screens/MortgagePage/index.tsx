'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroMortgage from '@/screens/MortgagePage/components/IntroMortgage/IntroMortgage';
import Bonus from '@/components/Bonus/Bonus';
import Mailing from '@/components/Mailing/Mailing';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { getMortgages } from '@/models/Services';
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getAllMortgages, getMonthOffers } from '@/core/store/mortgages/mortgage-actions';
import { resetMortgages } from '@/core/store/mortgages/mortgage-slice';
import MortgagesList from '@/components/mortgages/MortgageOfferList';
import { selectMonthOffers } from '@/core/store/mortgages/mortgage-selectors';


type ChoiseT = {
  active: boolean;
  name: string;
};
type questT = {
  title: string;
  text: string;
};

interface MortgagePageProps {
  staticData: {
    choices: ChoiseT[];
    questData: questT[];
  };
}

const MortgagePage = (props: MortgagePageProps) => {
  const { staticData } = props;
  const [current, setCurrent] = useState<string>('Ипотека');

  const monthOffers = useAppSelector(selectMonthOffers)

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getMortgages>({
    limit: 10,
    offset: 0,
    currency: 'kgs',
    ordering: 'min_interest_rate'
  })

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      dispatch(resetMortgages())
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const handleScrollToMortgages = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const fetchMortgages = (params: getMortgages) => {
    dispatch(getAllMortgages(params))
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({ offer_of_the_month: true, limit: 10, offset: 0 }))
  }

  useEffect(() => {
    fetchMonthOffers()

    return () => {
      dispatch(resetMortgages())
    }
  }, [])

  useEffect(() => {
    fetchMortgages(filterData)
  }, [filterData])

  return (
    <PageWrapper>
      <IntroMortgage
        setActive={setCurrent}
        current={current}
        items={staticData.choices}
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToMortgages={handleScrollToMortgages}
      />
      <Bonus
        title='Оформи ипотеку в Demirbank онлайн'
        img='https://demirbank.kg/assets/c207871/img/logo.png'
        text='Теперь у вас есть возможность приобрести недвижимость в ипотеку от 6%!' />
      <div ref={ref}>
        <MortgagesList
          options={[
            {
              text: 'По процентной ставке',
              value: 'min_interest_rate'
            },
            {
              text: 'По платежу',
              value: 'min_credit'
            }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>
      <Mailing />
      {/* <Compilations /> */}
      <OfferMonth offers={monthOffers.results} category='Ипотека' />
      <Communicate data={[]}/>
      <Feedback title={'Отзывы '} sub={'об ипотеке'} category='Ипотека' />
      <FrequentQuestions title={''} items={staticData.questData} />
    </PageWrapper>
  );
};

export default MortgagePage;
