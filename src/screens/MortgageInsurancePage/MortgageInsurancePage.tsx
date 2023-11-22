'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroInsuranceMort from '@/screens/MortgageInsurancePage/components/IntroInsuranceMort/IntroInsuranceMort';
import Bonus from '@/components/Bonus/Bonus';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import { StaticImageData } from 'next/image';
import LastBuy from '@/components/LastBuy/LastBuy';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import OurStrongsMort from '@/screens/MortgageInsurancePage/components/OurStrongsMort/OurStrongsMort';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';

type itemT = {
  title: string;
  sub: string;
  img: StaticImageData;
  text: string;
  w_text?: number;
};
type Props = {
  data: {
    sliderItems: StaticImageData[];
    worksData: itemT[];
  };
};
const MortgageInsurancePage = ({ data }: Props) => {
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(newsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroInsuranceMort />
      <Bonus
        height={147}
        title={'Кэшбэк 20% за страхование ипотеки'}
        text={'Получите до 4000 рублей на карту'}
      />
      <InsuranceCompanys isTitle={true} data={data.sliderItems} />
      <LastBuy />
      <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={data.worksData} />
      <OurStrongsMort />
      <LatestNews />
      <Feedback sub={'об ипотечном страховании'} title={'Отзывы '} />
    </PageWrapper>
  );
};

export default MortgageInsurancePage;
