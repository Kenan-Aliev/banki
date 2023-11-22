import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroSlipBusiness from '@/screens/SlipsBusinessPage/components/IntroSlipBusiness/IntroSlipBusiness';
import data from '@/core/data/index';
import SlipsBanksSlider from '@/screens/SlipsBusinessPage/components/SlipsBanksSlider/SlipsBanksSlider';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import Bonus from '@/components/Bonus/Bonus';
import OffersInvest from '@/screens/InvestmentPage/components/OffersInvest/OffersInvest';
import Mailing from '@/components/Mailing/Mailing';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

const SlipsBusinessPage = () => {
  return (
    <PageWrapper>
      <IntroSlipBusiness items={data.BusinessServicePage.introChoose} />
      <SlipsBanksSlider items={data.SlipsBanksPage.sliderItems} />
      <InsuranceCompanys
        searchItems={data.InsuranceCompanysMass}
        data={data.InsurancePage.banksSlideItems}
        isTitle={false}
      />
      <Bonus
        title={'Откройте счет для бизнеса бесплатно'}
        text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
        height={166}
      />
      <OffersInvest items={data.BusinessServicePage.offersMoth} />
      <Mailing />
      <Feedback title={'Отзывы'} sub={' о дебетовых картах'} />
      <FrequentQuestions title={'Частые вопросы'} items={data.SlipsBanksPage.questData} />
    </PageWrapper>
  );
};

export default SlipsBusinessPage;
