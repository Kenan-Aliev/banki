'use client';
import React, { useEffect, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import Intro from '@/screens/SavingAccountsPage/components/Intro/Intro';
import Bonus from '@/components/Bonus/Bonus';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopBanks from '@/components/TopBanks/TopBanks';
import { getDepositsI } from '@/models/Services';
import { getDeposits } from '@/core/store/deposits/deposits-actions';
import { useAppDispatch } from '@/hooks/redux';
import { resetDeposits } from '@/core/store/deposits/deposits-slice';

interface SavingAccountsPageProps {
  staticData: any;
}

const SavingAccountsPage = ({ staticData }: SavingAccountsPageProps) => {

  const dispatch = useAppDispatch()

  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    offset: 0,
  })

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      dispatch(resetDeposits())
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
      <Intro />

      <Bonus title={`Бонус до 1000 рублей за открытие вклада!`} />

      <OffersBanks
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
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
      />
      <OfferMoth offers={staticData.offersMoth} />
      <Feedback title={'Отзывы'} sub={' о вкладах'} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
      <TopBanks banks={staticData.Topbanks} />
    </PageWrapper>
  );
};

export default SavingAccountsPage;
