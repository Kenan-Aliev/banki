'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/DebetCardsPage/components/Navigation/Navigation';
import Bonus from '@/components/Bonus/Bonus';
import Offers from '@/screens/CreditMapPage/components/Offers/Offers';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Mailing from '@/components/Mailing/Mailing';
import React, { useEffect, useState } from 'react';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import Communicate from '@/components/Communicate/Communicate';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Compilations from '@/screens/DebetCardsPage/components/Сompilations/Сompilations';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { debitCards } from '@/core/data/cards/debit_cards';
import { DebitCardT } from '@/models/Cards/Cards';

export default function DebitCardsPage() {
  const [current, setCurrent] = useState<string>('все');
  useEffect(() => {}, []);

  const staticCards: DebitCardT[] = debitCards;

  const dataMap = data.DebitCardsPage.questData;
  return (
    <Wrapper>
      <Navigation setActive={setCurrent} current={current} />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Compilations />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о дебетовых картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />

      <FrequentQuestions title={'Важная информация'} items={dataMap} />
    </Wrapper>
  );
}
