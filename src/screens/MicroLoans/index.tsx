'use client';
import React, { useEffect, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroMicroloans from '@/screens/MicroLoans/components/IntroMicroloans/IntroMicroloans';
import Bonus from '@/components/Bonus/Bonus';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import WebLoans from '@/screens/MicroLoans/components/WebLoans';
import BrokerList from '@/components/investment/BrokersList';
import CatalogItems from '@/components/Catalog/CatalogItems/CatalogItems';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import CreditTopBankList from '@/components/credits/CreditTopBankList';
import CreditOfferList from '@/components/credits/CreditOfferList';

interface MicroloansPageProps {
  staticData: any;
}

const MicroloansPage = (props: MicroloansPageProps) => {
  const { staticData } = props;
  const [current, setCurrent] = useState<string>('не важна сумма');

  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <IntroMicroloans setActive={setCurrent} current={current} items={staticData.chooseIntro} />
      <Bonus title={'0% Первый займ бесплатно!'} />
      <SliderBanksCons data={staticData.slideItems} />
      <WebLoans credits={staticData.microLoansBanks} />
      <CreditOfferList credits={[]} />
      <BrokerList title={'Микрокредитные организации'} brokers={staticData.microLoansBanks} />
      <CatalogItems title={'Каталог микрозаймов'} items={staticData.catalogData} width={'100%'} />
      <LatestNews />
      <Feedback title={'Отзывы '} sub={'о МФО'} />
      <CreditTopBankList
        credits={[]}
        title={'Микрозаймы в Бишкеке'}
        subtitle={' - ТОП 10 займов в МФО в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default MicroloansPage;
