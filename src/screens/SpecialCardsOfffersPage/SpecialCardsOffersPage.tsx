'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React, { useEffect, useState } from 'react';
import OffersBanks from './components/OffersBanks/OffersBanks';
import data from '@/core/data';
import { useAppDispatch } from '@/hooks/redux';
import { getCardsI } from '@/models/Services';
import { getCards } from '@/core/store/cards/cards-actions';

type questItem = {
  title: string;
  text: string;
};

interface SpecialCardsOffersPageProps {
  staticData: {
    questData: questItem[];
  };
}

export default function SpecialCardsOffersPage(props: SpecialCardsOffersPageProps) {
  const { staticData } = props;
  const dispatch = useAppDispatch()

  const [filterData, setFilterData] = useState<getCardsI>({
    limit: 10,
    offset: 0,
    special_offer: true
  })
  const [tabs, setTabs] = useState(data.SpecialOffersCards.choises)
  const [activeTab, setActiveTab] = useState('Все')

  const handleChangeActiveTab = (tab: string) => {
    const filterValue = tab === 'Дебетовые карты' ? 'debit' : tab === 'Кредитные карты' ? 'credit' : tab
    const newTabs = [...tabs]
    const idx = newTabs.findIndex((tab) => tab.name.toLowerCase() === activeTab.toLowerCase())
    newTabs[idx].active = !newTabs[idx].active
    const activeTabIdx = newTabs.findIndex((t) => t.name.toLowerCase() === tab.toLowerCase())
    newTabs[activeTabIdx].active = !newTabs[activeTabIdx].active

    setTabs(newTabs)
    setActiveTab(tab)
    handleChangeFilter('card_type', filterValue)
  }


  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else if (prop === 'card_type' && value === 'Все') {
      delete filterData.card_type
      setFilterData({ ...filterData, offset: 0 })
    }
    else {
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const fetchCards = (params: getCardsI) => {
    dispatch(getCards(params))
  }



  useEffect(() => {
    fetchCards(filterData)
  }, [filterData])


  return (
    <Wrapper>
      <Navigation data={tabs} onClick={handleChangeActiveTab} />
      <OffersBanks
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
      />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
    </Wrapper>
  );
}
