'use client';
import React, { useEffect, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroMicroloans from '@/screens/MicroLoans/components/IntroMicroloans/IntroMicroloans';
import Bonus from '@/components/Bonus/Bonus';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import WebLoans from '@/screens/MicroLoans/components/WebLoans';
import BrokerList from '@/components/investment/BrokersList';
import CatalogItems from '@/components/Catalog/CatalogItems/CatalogItems';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import CreditTopBankList from '@/components/credits/CreditTopBankList';
import { getCreditsI } from '@/models/Services';
import { StaticImageData } from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCredits, getMonthOffers, getTopMicroCredits } from '@/core/store/credits/credits-actions';
import bonusImg from '@/assets/icons/microloans_bonus_img.jpg'
import { BankT } from '@/models/Banks/banks';
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';
import { selectMonthOffers, selectTopMicroCredits } from '@/core/store/credits/credits-selectors';
import { CreditType } from '@/models/Credits/Credits';

interface MicroloansPageProps {
  staticData: {
    chooseIntro: {
      name: string,
      active: boolean
    }[]
    catalogData: {
      name: string
      img: StaticImageData
    }[]
    questData: {
      title: string
      text: string
    }[]
  };
  banks: BankT[]
  creditType: CreditType
}

const MicroloansPage = (props: MicroloansPageProps) => {
  const dispatch = useAppDispatch()

  const { staticData, banks, creditType } = props;
  const monthOffers = useAppSelector(selectMonthOffers)
  const topMicroCredits = useAppSelector(selectTopMicroCredits)
  const [current, setCurrent] = useState<string>(staticData.chooseIntro[0].name);

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    currency: 'kgs',
    loanType: String(creditType.id)
  })


  const handleChangeActiveTab = () => {
    let updatedFilterData = { ...filterData, offset: 0 };

    switch (current) {
      case "Не важна сумма":
        delete updatedFilterData.min_summ
        delete updatedFilterData.max_summ
        break;

      case '100000+ сом': {
        const minSum = current.split(' ')[0];
        updatedFilterData = {
          ...updatedFilterData,
          max_summ: undefined,
          min_summ: minSum.substring(0, minSum.length - 1),
        };
        break;
      }
      default: {
        const [minSum, maxSum] = current.split('-').map(value => value.trim());
        updatedFilterData = {
          ...updatedFilterData,
          min_summ: minSum,
          max_summ: maxSum.split(' ')[0],
        };
        break;
      }
    }
    fetchCredits(updatedFilterData);
  };


  const handleChangeFilter = (prop: string, value: any) => {
    const filter = { ...filterData }
    if (prop === 'offset') {
      filter[prop] = value
    }
    fetchCredits(filter)
    setFilterData({ ...filter })
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({ limit: 10, offset: 0, loanType: String(creditType.id), offerOfTheMonth: true }))
  }

  const fetchTopMicroCredits = () => {
    dispatch(getTopMicroCredits())
  }

  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  useEffect(() => {
    fetchMonthOffers()
    fetchTopMicroCredits()
  }, [])

  useEffect(() => {
    handleChangeActiveTab()
  }, [current])

  return (
    <PageWrapper>
      <IntroMicroloans setActive={setCurrent} current={current} items={staticData.chooseIntro} />
      <Bonus
        title='Открой онлайн кредит в Элет Капитал!'
        text='Оформление, рассмотрение и выдача кредита всего за 5 минут без лишних документов, без залога и поручителей. Не выходя из дома онлайн.'
        img={bonusImg}
      />
      <SliderBanksCons data={banks} />
      <WebLoans
        filterData={filterData}
        handleChangeFilterData={handleChangeFilter}
      />
      <OfferMonth offers={monthOffers.results} category='Микрозаймы' />
      {/* <BrokerList title={'Микрокредитные организации'} brokers={staticData.microLoansBanks} /> */}
      <CatalogItems title={'Каталог микрозаймов'} items={staticData.catalogData} width={'100%'} />
      <LatestNews />
      <Feedback title={'Отзывы '} sub={'о МФО'} category='МФО (микрофинансовые компании)' />
      <CreditTopBankList
        credits={topMicroCredits}
        title={'Микрозаймы в Бишкеке'}
        subtitle={' - ТОП 10 займов в МФО в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default MicroloansPage;
