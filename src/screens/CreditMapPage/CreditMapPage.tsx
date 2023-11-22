'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Bonus from '../../components/Bonus/Bonus';
import Offers from './components/Offers/Offers';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Mailing from '@/components/Mailing/Mailing';
import Compilations from '@/screens/CreditMapPage/components/Сompilations/Сompilations';
import LatestNews from '@/components/LatestNews/LatestNews';
import Communicate from '@/components/Communicate/Communicate';
import React from 'react';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { useTypedSelector } from '@/hooks/redux';
import { CreditCardT } from '@/models/Cards/Cards';

export default function CreditMapPage() {
  const staticData = data.CreditCardsPage;
  const staticCards: CreditCardT[] = useTypedSelector((state) => state.cards.creditCards);

  return (
    <Wrapper>
      <Navigation />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Compilations />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.info} />
    </Wrapper>
  );
}
