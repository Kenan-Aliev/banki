'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import OurStrongsDms from '@/screens/DmsPage/components/OurStrongsDms/OurStrongsDms';
import IntroDms from '@/screens/DmsPage/components/IntroDms/IntroDms';
import Bonus from '@/components/Bonus/Bonus';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

type ItemT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    questions: ItemT[];
    questData: ItemT[];
  };
};
const DmsPage = ({ data }: Props) => {
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(newsGetRequestedAction());
  }, []);
  return (
    <PageWrapper>
      <IntroDms />
      <Bonus
        height={147}
        title={'Кэшбэк 20% за страхование ипотеки'}
        text={'Получите до 4000 рублей на карту'}
      />
      <OurStrongsDms />
      <LatestNews />
      <Feedback sub={'о страховках для занятий спортом'} title={'Отзывы '} />
      <FrequentQuestions title={'Популярные вопросы'} items={data.questData} />
      <FrequentQuestions title={'Важная информация'} items={data.questions} />
    </PageWrapper>
  );
};

export default DmsPage;
