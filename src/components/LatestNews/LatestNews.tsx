'use client';
import React, { useState } from 'react';
import s from './LatestNews.module.scss';
import NewsItem from '@/components/NewsItem/NewsItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { useTypedSelector } from '@/hooks/redux';

interface ChoicesInterface {
  name: string;
  active: boolean;
}

const mockFilterItems: ChoicesInterface[] = [
  { name: 'Все', active: true },
  { name: 'Накопления', active: false },
  { name: 'Займы', active: false },
  { name: 'Страхование', active: false },
  { name: 'Безопасность', active: false },
];

const LatestNews = () => {
  const { list, saveList, loansList, insuranceList, safeList } = useTypedSelector((state) => state.news);

  const [currentChoise, setCurrentChoise] = useState('Все');

  return (
    <div className={s.news}>
      <div className={s.title}>
        Свежие <span>новости</span>
      </div>
      <div className={s.choises_cont}>
        <ChoiseItemsMap
          currentChoise={currentChoise}
          setActive={setCurrentChoise}
          choiseItems={mockFilterItems}
        />
      </div>
      <div className={s.news_cont}>
        {currentChoise === 'Все' && list.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'Накопления' && saveList.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'Займы' && loansList.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'Страхование' &&
          insuranceList.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'Безопасность' && safeList.map((item) => <NewsItem key={item.id} item={item} />)}
      </div>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все новости'} width={300} />
      </div>
    </div>
  );
};

export default LatestNews;
