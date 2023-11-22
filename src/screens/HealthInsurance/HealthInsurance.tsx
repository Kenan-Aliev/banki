/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroHealth from '@/screens/HealthInsurance/components/IntroHealth/IntroHealth';
import Bonus from '@/components/Bonus/Bonus';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import OffersBanks from '@/screens/SpecialCardsOfffersPage/components/OffersBanks/OffersBanks';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

type Props = {
  data: any;
  items: any[];
};

const HealthInsurance = ({ data, items }: Props) => {
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(newsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroHealth items={data.chooseIntro} />
      <Bonus title={'Кэшбэк 20% за страхование ипотеки'} text={'Получите до 4000 рублей на карту'} />
      <InsuranceCompanys isTitle={true} searchItems={items} data={data.sliderItems} />
      <OffersBanks cards={data.offersItems} />
      <LatestNews />
      <Feedback sub={' о страховании жизни'} title={'Отзывы'} />
      <FrequentQuestions title={'Популярные вопросы'} items={data.questData} />
      <FrequentQuestions title={'Важная информация'} items={data.questions} />
    </PageWrapper>
  );
};

export default HealthInsurance;
