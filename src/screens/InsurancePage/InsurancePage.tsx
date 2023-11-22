'use client';
import React, { useEffect, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroInsurance from '@/screens/InsurancePage/components/IntroInsurance/IntroInsurance';
import Bonus from '@/components/Bonus/Bonus';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import { StaticImageData } from 'next/image';
import WatchInfo from '@/components/WatchInfo/WatchInfo';
import SpecialOffersInsurance from '@/screens/InsurancePage/components/SpecialOffersInsurance/SpecialOffersInsurance';
import LatestNews from '@/components/LatestNews/LatestNews';
import Mailing from '@/components/Mailing/Mailing';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

type ChooseT = {
  name: string;
  active: boolean;
};
type OfferI = {
  name: string;
  img: StaticImageData;
  bankImg: StaticImageData;
  bonus?: string;
  bet?: number;
  days?: string;
  title_1?: string;
  count1?: string;
  title_2?: string;
  count2?: string;
};
type questT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    introChoose: ChooseT[];
    banksSlideItems: StaticImageData[];
    specialOffers: OfferI[];
    questData: questT[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SearchItems?: any[];
};
const InsurancePage = ({ data, SearchItems }: Props) => {
  //   const dispatch = useDispatch();
  const [current, setCurrent] = useState<string>('осаго');

  useEffect(() => {
    // dispatch(newsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroInsurance setActive={setCurrent} current={current} items={data.introChoose} />
      <Bonus title={'Кэшбэк 20% за страхование ипотеки'} />
      <InsuranceCompanys isTitle={true} searchItems={SearchItems} data={data.banksSlideItems} />
      <WatchInfo
        title={'Народный рейтинг страховых компаний'}
        text={
          'Будьте уверенны в своем выборе: клиенты делятся опытом,' +
          ' а мы ежедневно проверяем отзывы и обновляем рейтинги.'
        }
      />
      <SpecialOffersInsurance insuranceList={data.specialOffers} />
      <LatestNews />
      <Mailing />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о страховых компаниях'} />
      <FrequentQuestions title={''} items={data.questData} />
    </PageWrapper>
  );
};

export default InsurancePage;
