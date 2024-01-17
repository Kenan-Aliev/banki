'use client';

import Wrapper from '@/containers/Wrapper';
import { useAppSelector } from '@/hooks/redux';
import Navigation from '@/screens/NewsPage/components/Navigation/Navigation';
import News from '@/screens/NewsPage/components/News/News';
import React, { useEffect, useState } from 'react';

export default function NewsPage() {
  const { list, safeList, loansList, insuranceList, saveList } = useAppSelector((state) => state.news);
  const [current, setCurrent] = useState<string>('Сегодня');
  useEffect(() => { }, []);

  return (
    <Wrapper>
      <Navigation setCurrent={setCurrent} current={current} />
      {/* {current === 'Сегодня' && <News news={list} />}
      {current === 'Накопить' && <News news={safeList} />}
      {current === 'Занять' && <News news={loansList} />}
      {current === 'Застраховать' && <News news={insuranceList} />}
      {current === 'Обезопасить' && <News news={saveList} />} */}
    </Wrapper>
  );
}
