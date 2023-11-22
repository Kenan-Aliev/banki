'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import Intro from '@/screens/SavingAccountsPage/components/Intro/Intro';
import Bonus from '@/components/Bonus/Bonus';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopBanks from '@/components/TopBanks/TopBanks';

interface SavingAccountsPageProps {
  staticData: any;
}

const SavingAccountsPage = ({ staticData }: SavingAccountsPageProps) => {
  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <Intro />

      <Bonus title={`Бонус до 1000 рублей за открытие вклада!`} />

      <OffersBanks
        isSelect={true}
        deposits={staticData.offersBanks}
        title={`${staticData.offersBanks.length} вклада`}
        sub={' подобрано'}
        options={['По процентной ставке', 'По рейтингу банка', 'По максимальному взносу']}
      />
      <OfferMoth offers={staticData.offersMoth} />
      <Feedback title={'Отзывы'} sub={' о вкладах'} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
      <TopBanks banks={staticData.Topbanks} />
    </PageWrapper>
  );
};

export default SavingAccountsPage;
