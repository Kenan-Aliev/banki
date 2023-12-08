'use client';
import React, { useState } from 'react';
import s from './LatestNews.module.scss';
import NewsItem from '@/components/NewsItem/NewsItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { useAppSelector } from '@/hooks/redux';

interface ChoicesInterface {
  name: string;
  active: boolean;
}

const mockFilterItems: ChoicesInterface[] = [
  { name: 'Банки', active: true },
  { name: 'МФО', active: false },
  { name: 'Микрокредитные компании', active: false },
];

const LatestNews = () => {
  const { list, saveList, loansList, insuranceList, safeList } = useAppSelector((state) => state.news);

  const [currentChoise, setCurrentChoise] = useState('Банки');

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
        {currentChoise === 'Банки' && list.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'МФО' && saveList.map((item) => <NewsItem key={item.id} item={item} />)}
        {currentChoise === 'Микрокредитные компании' && loansList.map((item) => <NewsItem key={item.id} item={item} />)}
      </div>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все новости'} width={300} />
      </div>
    </div>
  );
};

export default LatestNews;
