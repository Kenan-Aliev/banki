'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCalculate from '@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import CreditBankList from '@/components/credits/CreditBankList';
import { getCreditsI } from '@/models/Services';

type ItemT = {
  title: string;
  text: string;
};
interface CalculatorCreditsProps {
  staticData: {
    questData: ItemT[];
  };
  allOffers?: any;
}

const CalculatorCredits = (props: CalculatorCreditsProps) => {
  const { staticData, allOffers } = props;
  useEffect(() => { }, []);

  return (
    <PageWrapper>
      <IntroCalculate />
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
        filterData={{} as getCreditsI}
        handleChangeFilter={() => { }}
      />
      <Feedback title={'Отзывы'} sub={' о кредитах'} />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default CalculatorCredits;
