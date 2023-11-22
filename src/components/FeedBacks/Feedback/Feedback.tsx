'use client';
import React, { useState } from 'react';
import s from './Feedback.module.scss';
import FeedbackItem from '@/components/FeedBacks/FeedbackItem/FeedbackItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import TitleMarkLast from '@/components/TitleMarkLast/TitleMarkLast';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type Props = {
  title?: string;
  sub?: string;
  chois?: ItemT[];
};
type ItemT = {
  name: string;
  active: boolean;
};

const Feedback = ({ title, sub, chois }: Props) => {
  const [currentChoise, setCurrentChoise] = useState('Банки');

  return (
    <div className={s.feedback}>
      {!title || !sub ? (
        <div className={s.title}>
          <mark>Что говорят</mark>
          наши клиенты
        </div>
      ) : (
        <TitleMarkLast title={title} sub={sub} />
      )}
      {chois && chois.length !== 0 && (
        <div className={s.choise_items}>
          <ChoiseItemsMap setActive={setCurrentChoise} currentChoise={currentChoise} choiseItems={chois} />
        </div>
      )}
      <div className={s.feedback_cont}>
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
      <div className={s.btn_cont}>
        <button className={s.blueTrBtn}>Оставить отзыв</button>
        <BlueBtn text={'Смотреть все отзывы'} width={300} />
      </div>
    </div>
  );
};

export default Feedback;
