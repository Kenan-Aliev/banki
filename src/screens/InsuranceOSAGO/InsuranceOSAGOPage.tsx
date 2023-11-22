'use client';
import LastBuy from '@/components/LastBuy/LastBuy';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import React, { useEffect } from 'react';
import data from '@/core/data/index';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import LatestNews from '@/components/LatestNews/LatestNews';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import Question from '@/components/Question/Question';
import OSAGORating from '@/components/OSAGORating/OSAGORating';
import CalculateOSAGO from '@/components/CalculateOSAGO/CalculateOSAGO';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import PageWrapper from '@/containers/PageWrapper';
import IntroInsuranceOsago from '@/screens/InsuranceOSAGO/components/IntroInsuranceOsago/IntroInsuranceOsago';

export default function InsuranceOSAGOPage() {
  const dataMap = data.OSAGO.worksData;
  const question = data.OSAGO.favouritesQuestion;
  const info = data.OSAGO.info;
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(newsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroInsuranceOsago />
      <InsuranceCompanys
        isTitle={true}
        searchItems={data.InsuranceCompanysMass}
        data={data.InsurancePage.banksSlideItems}
      />
      <LastBuy />
      <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={dataMap} />
      <LatestNews />
      <Feedback sub={' об ОСАГО'} title={'Отзывы'} />
      <CalculateOSAGO />
      <OSAGORating title={'Рейтинг страховых компаний по ОСАГО '} sub={'- ТОП 10 лучших в 2023 году'} />
      <FrequentQuestions title={'Популярные вопросы'} items={question} />
      <FrequentQuestions title={'Важная информация'} items={info} />
      <Question />
    </PageWrapper>
  );
}
