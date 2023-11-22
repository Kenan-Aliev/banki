'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/InstallmentPage/components/Navigation/Navigation';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import React from 'react';
import Offers from '@/screens/CreditMapPage/components/Offers/Offers';
import Mailing from '@/components/Mailing/Mailing';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Bonus from '@/components/Bonus/Bonus';
import InstallmentPageAdvantages from '@/screens/InstallmentPage/components/InstallmentPageAdvantages';
import { creditCards } from '@/core/data/cards/credit_cards';
import { CreditCardT } from '@/models/Cards/Cards';

export default function InstallmentPage() {
  const staticData = data.InstallmentPage;
  const staticCards: CreditCardT[] = creditCards;

  return (
    <Wrapper>
      <Navigation />
      <InstallmentPageAdvantages advantages={staticData.advantages} />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </Wrapper>
  );
}
