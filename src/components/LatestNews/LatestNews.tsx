'use client';
import React, { useEffect, useState } from 'react';
import s from './LatestNews.module.scss';
import NewsItem from '@/components/NewsItem/NewsItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getNews } from '@/core/store/news/news-actions';
import { selectGetNewsStatus, selectNews } from '@/core/store/news/news-selectors';
import Loading from '@/app/loading';
import Link from 'next/link';

interface ChoicesInterface {
  name: string;
  active: boolean;
}

const mockFilterItems: ChoicesInterface[] = [
  { name: 'Банки', active: true },
  { name: 'Занять', active: false },
  { name: 'Накопить', active: false },
  { name: 'Застраховать', active: false },
  { name: 'Обезопасить', active: false },
];

const LatestNews = () => {
  const news = useAppSelector(selectNews)
  const getNewsStatus = useAppSelector(selectGetNewsStatus)

  const [currentChoise, setCurrentChoise] = useState('Банки');

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNews({ news_type: currentChoise }))
  }, [currentChoise])

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
      {
        getNewsStatus === 'loading'
          ? <Loading />
          : <div className={s.news_cont}>
            {news?.map((item) => <NewsItem key={item.id} item={item} />)}
          </div>
      }
      <Link className={s.btn_cont} href='/news'>
        <BlueBtn text={'Смотреть все новости'} width={300} />
      </Link>
    </div>
  );
};

export default LatestNews;
