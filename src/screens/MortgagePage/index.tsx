'use client';

import React, { useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroMortgage from '@/screens/MortgagePage/components/IntroMortgage/IntroMortgage';
import Bonus from '@/components/Bonus/Bonus';
import Mailing from '@/components/Mailing/Mailing';
import Compilations from '@/screens/CreditsIpotekaPage/components/Сompilations/Compilations';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
// import { MortgageInterface } from '@/core/services/Mortgages';
// import { MortgagesListSelector } from '@/core/store/mortgages/selectors';
// import MortgageOfferList from '@/components/mortgages/MortgageOfferList';
import CreditBankList from '@/components/credits/CreditBankList';
import { creditsData } from '@/core/data/credits/all-credits';

type creditT = {
  bank_name: string;
  name: string;
  type: string;
  min_procent: number;
  max_procent: number;
  curency: string;
  min_amount: number;
  max_amount: number;
  timeframe_min: number;
  timeframe_max: number;
};

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
  const credits = creditsData.filter((el: creditT) => el.type.toLowerCase() === 'ипотека');

  return (
    <PageWrapper>
      <IntroMortgage setActive={setCurrent} current={current} items={staticData.choices} />
      <Bonus title={'Мастер подбора ипотеки'} />
      <CreditBankList
        credits={credits}
        isSelect={true}
        sub={' предложений'}
        title={credits.length}
        options={['По процентной ставке', 'По максимальной сумме', 'По максимальному сроку']}
      />
      <Mailing />
      <Compilations />
      <OffersMonth />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'об ипотеке'} />
      <FrequentQuestions title={''} items={staticData.questData} />
    </PageWrapper>
  );
};

export default MortgagePage;
