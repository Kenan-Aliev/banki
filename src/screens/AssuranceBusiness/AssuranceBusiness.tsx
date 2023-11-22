'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroAssuranceBusiness from '@/screens/AssuranceBusiness/components/IntroAssuranceBusiness/IntroAssuranceBusiness';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';
import data from '@/core/data/index';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';

const AssuranceBusiness = () => {
  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <IntroAssuranceBusiness />
      <InsuranceCompanys
        searchItems={data.InsuranceCompanysMass}
        data={data.InsurancePage.banksSlideItems}
        isTitle={true}
      />
      {/*<OffersBanks cards={data.AssuranceBusiness.offers} title={'Виды страхования'}/>*/}
      <LatestNews />
      <Feedback sub={' о страховании юридических лиц '} title={'Отзывы'} />
    </PageWrapper>
  );
};

export default AssuranceBusiness;
