'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroServiceBusiness from '@/screens/ServiceBusinessPage/components/IntroServiceBusiness/IntroServiceBusiness';
import data from '@/core/data/index';
import ChooseLegal from '@/components/ChooseLegal/ChooseLegal';
import Bonus from '@/components/Bonus/Bonus';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import LatestNews from '@/components/LatestNews/LatestNews';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import CreditBankList from '@/components/credits/CreditBankList';
import { creditsData } from '@/core/data/credits/all-credits';
import OffersInvest from '../InvestmentPage/components/OffersInvest/OffersInvest';
import { getCreditsI } from '@/models/Services';

const ServiceBusinessPage = () => {
  const credits = creditsData.filter((el) => el.type.toLowerCase() === 'бизнес');

  return (
    <PageWrapper>
      <IntroServiceBusiness items={data.BusinessServicePage.introChoose} />
      <ChooseLegal />
      <Bonus
        title={'Откройте счет для бизнеса бесплатно'}
        height={166}
        text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
      />
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
        handleChangeFilter={() => { }} />

      <OffersInvest items={data.BusinessServicePage.offersMoth} />
      <Feedback title={'Отзывы '} sub={'об РКО '} />
      <LatestNews />
      <FrequentQuestions title={'Частые вопросы'} items={data.BusinessServicePage.questData} />
    </PageWrapper>
  );
};

export default ServiceBusinessPage;
