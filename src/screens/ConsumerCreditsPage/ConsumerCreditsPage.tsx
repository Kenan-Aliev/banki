'use client';
import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroConsumer from '@/screens/ConsumerCreditsPage/Components/IntroConsumer/IntroConsumer';
import Bonus from '@/components/Bonus/Bonus';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import CatalogItems from '@/components/Catalog/CatalogItems/CatalogItems';
import LatestNews from '@/components/LatestNews/LatestNews';
import Mailing from '@/components/Mailing/Mailing';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import CreditBankList from '@/components/credits/CreditBankList';
import CreditTopBankList from '@/components/credits/CreditTopBankList';
import { creditsData } from '@/core/data/credits/all-credits';
import { BankT } from '@/models/Banks/banks';
import { getCreditsI } from '@/models/Services';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { resetCredits } from '@/core/store/credits/credits-slice';
import { getCreditTypes, getCredits, getMonthOffers, getTopCredits } from '@/core/store/credits/credits-actions';
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';
import { selectCreditTypes, selectMonthOffers, selectTopCredits } from '@/core/store/credits/credits-selectors';

type catalogT = {
  img: StaticImageData;
  name: string;
  link?: string
};
type ItemT = {
  title: string;
  text: string;
};

interface ConsumerCreditsPageProps {
  staticData: {
    catalogData: catalogT[];
    questData: ItemT[];
  };
  sliderBanks: BankT[];
}

const ConsumerCreditsPage = (props: ConsumerCreditsPageProps) => {
  const { staticData, sliderBanks } = props;
  const monthOffers = useAppSelector(selectMonthOffers)
  const creditTypes = useAppSelector(selectCreditTypes)
  const topCredits = useAppSelector(selectTopCredits)

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    currency: 'kgs',
    ordering: 'min_summ'
  })



  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      dispatch(resetCredits())
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const cleanFilter = () => {
    dispatch(resetCredits())
    setFilterData({
      limit: 10,
      offset: 0,
      currency: 'kgs',
      ordering: filterData.ordering
    })
  }

  const handleScrollToCredits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleShowCatalogItems = (item: string) => {
    const handleCreditType = (creditType: string) => {
      const credit = creditTypes.find((type) => type.title === creditType)
      dispatch(resetCredits())
      setFilterData({
        limit: 10,
        offset: 0,
        loanType: String(credit?.id || ""),
        currency: 'kgs',
        ordering: filterData.ordering
      })
      handleScrollToCredits()
    }

    switch (item) {
      case "Потребительский":
      case "Зеленый кредит":
        handleCreditType(item)
        break

      case "Без справок":
        dispatch(resetCredits())
        setFilterData({
          limit: 10,
          offset: 0,
          noDocumentsRequired: true,
          currency: 'kgs',
          ordering: filterData.ordering
        })
        handleScrollToCredits()
        break

      default:
        break
    }
  }



  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({ offerOfTheMonth: true, limit: 10, offset: 0 }))
  }

  const fetchCreditTypes = () => {
    dispatch(getCreditTypes())
  }

  const fetchTopCredits = () => {
    dispatch(getTopCredits())
  }

  useEffect(() => {
    fetchMonthOffers()
    fetchCreditTypes()
    fetchTopCredits()

    return () => {
      dispatch(resetCredits())
    }
  }, [])

  useEffect(() => {
    const filter = {
      ...filterData,
      bank: filterData.bank && typeof filterData.bank !== 'string' && filterData.bank.length > 0 ? filterData.bank.join() : ''
    }
    fetchCredits(filter)
  }, [filterData])

  return (
    <PageWrapper>
      <IntroConsumer
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToCredits={handleScrollToCredits}
        cleanFilter={cleanFilter}
        banks={sliderBanks}
      />
      <Bonus title='Акция «Воплоти мечту!'
        text='Оформите кредит до 500 000 сомов и дайте волю своему воображению. Приобретайте то, что так давно откладывали!'
        img='https://btbonline.baitushum.kg/static_django/landing/images/BTB-NEW-LOGO.png'
      />
      <SliderBanksCons data={sliderBanks} />
      <div ref={ref}>
        <CreditBankList
          options={[
            {
              text: 'По минимальной сумме',
              value: 'min_summ'
            },
            {
              text: 'По максимальной сумме',
              value: 'max_summ'
            },
            {
              text: 'По минимальной процентной ставке',
              value: 'min_rating'
            }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>
      <OfferMonth offers={monthOffers.results} category='Кредиты' />
      <CatalogItems
        title={'Каталог кредитов'}
        items={staticData.catalogData}
        handleShowCatalogItems={handleShowCatalogItems}
      />
      <LatestNews category='Занять' />
      <Mailing />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитах'} category='Кредиты' />
      <CreditTopBankList credits={topCredits} />
      <FrequentQuestions title={'Важные вопросы'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default ConsumerCreditsPage;
