'use client';
import React, { useState } from 'react';
import s from './SpecialOffersPage.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import SpecialOfferItem from '@/components/Offers/SpecialOfferItem/SpecialOfferItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import PageWrapper from '@/containers/PageWrapper';
import IntroSpecialOffer from '@/screens/SpecialOffersPage/components/IntroSpecialOffer/IntroSpecialOffer';
import { StaticImageData } from 'next/image';

type choisesT = {
  name: string;
  active: boolean;
};
type selectDataT = {
  img: StaticImageData;
  options: string[];
};
type offerDataT = {
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
type questItemT = {
  title: string;
  text: string;
};
type questT = {
  title: string;
  items: questItemT[];
};

interface SpecialOfferPageProps {
  staticData: {
    questions: questT;
    choices: choisesT[];
    selectData: selectDataT[];
    offerData: offerDataT[];
  };
}

const SpecialOffersPage = (props: SpecialOfferPageProps) => {
  const { staticData } = props;
  const [current, setCurrent] = useState<string>('все');

  return (
    <PageWrapper>
      <IntroSpecialOffer setActive={setCurrent} current={current} choises={staticData.choices} />
      <div className={s.page_i}>
        <div className={s.select_cont}>
          {staticData.selectData.map((elm, index) => (
            <CustomSelect img={elm.img} options={elm.options} key={index} />
          ))}
        </div>
        <div className={s.offers_item_cont}>
          {[].map((item) => {
            return <SpecialOfferItem item={item} key={item.id} />;
          })}
        </div>
        <div className={s.btnCont}>
          <BlueBtn text={'Показать еще'} width={235} />
        </div>
        <FrequentQuestions title={'Частые вопросы'} items={staticData.questions.items} />
      </div>
    </PageWrapper>
  );
};

export default SpecialOffersPage;
