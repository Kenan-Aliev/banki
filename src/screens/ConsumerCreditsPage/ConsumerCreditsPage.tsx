'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroConsumer from '@/screens/ConsumerCreditsPage/Components/IntroConsumer/IntroConsumer';
import Bonus from '@/components/Bonus/Bonus';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import CatalogItems from '@/components/Catalog/CatalogItems/CatalogItems';
import LatestNews from '@/components/LatestNews/LatestNews';
import Mailing from '@/components/Mailing/Mailing';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import CreditBankList from '@/components/credits/CreditBankList';
import CreditOfferList from '@/components/credits/CreditOfferList';
import CreditTopBankList from '@/components/credits/CreditTopBankList';
import { creditsData } from '@/core/data/credits/all-credits';
import { BankT } from '@/models/Banks/banks';

export type oneOfferConsumerCreditsT = {
  bank_name: string;
  name: string;
  type: string;
  min_procent: number;
  max_procent: number;
  min_amount: number;
  max_amount: number;
  timeframe_min: number;
  timeframe_max: number;
};

type catalogT = {
  img: StaticImageData;
  name: string;
};
type ItemT = {
  title: string;
  text: string;
};

interface ConsumerCreditsPageProps {
  staticData: {
    catalogData: catalogT[];
    questData: ItemT[];
    creditsAll: oneOfferConsumerCreditsT[];
  };
  sliderBanks: BankT[];

}

const ConsumerCreditsPage = (props: ConsumerCreditsPageProps) => {
  const { staticData, sliderBanks } = props;

  const consumerCredits = staticData.creditsAll.filter((credit) => credit.type === 'Потребительский');

  return (
    <PageWrapper>
      <IntroConsumer />
      <Bonus title='Акция «Воплоти мечту!'
        text='Оформите кредит до 500 000 сомов и дайте волю своему воображению. Приобретайте то, что так давно откладывали!'
        img='https://btbonline.baitushum.kg/static_django/landing/images/BTB-NEW-LOGO.png'
      />
      <SliderBanksCons data={sliderBanks} />
      <CreditBankList
        credits={consumerCredits}
        isSelect={true}
        sub={' предложений'}
        title={consumerCredits.length}
        options={['По процентной ставке', 'По максимальной сумме', 'По максимальному сроку']}
      />
      <CreditOfferList credits={[]} />
      <CatalogItems title={'Каталог кредитов'} items={staticData.catalogData} />
      <LatestNews category='Занять' />
      <Mailing />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитах'} category='Кредиты' />
      <CreditTopBankList credits={creditsData} />
      <FrequentQuestions title={'Важные вопросы'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default ConsumerCreditsPage;
