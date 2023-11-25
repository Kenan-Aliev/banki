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

interface SavingAccountsPageProps {
  staticData: any;
}

const SavingAccountsPage = ({ staticData }: SavingAccountsPageProps) => {

  const dispatch = useAppDispatch()

  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    page: 1,
  })

  const fetchDeposits = (params: getDepositsI) => {
    dispatch(getDeposits(params))
  }

  const handleChangeFilter = (prop: string, value: any) => {
    setFilterData({ ...filterData, [prop]: value })
  }

  useEffect(() => {
    fetchDeposits(filterData)
  }, [])

  return (
    <PageWrapper>
      <Intro />

      <Bonus title={`Бонус до 1000 рублей за открытие вклада!`} />

      <OffersBanks
        options={['По процентной ставке', 'По рейтингу банка', 'По максимальному взносу']}
        fetchDeposits={fetchDeposits}
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
