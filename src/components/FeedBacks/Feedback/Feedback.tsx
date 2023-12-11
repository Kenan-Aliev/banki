'use client';
import React, { useEffect, useState } from 'react';
import s from './Feedback.module.scss';
import FeedbackItem from '@/components/FeedBacks/FeedbackItem/FeedbackItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import TitleMarkLast from '@/components/TitleMarkLast/TitleMarkLast';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getReviews } from '@/core/store/reviews/reviews-actions';
import { selectGetReviewsStatus, selectReviews } from '@/core/store/reviews/reviews-selectors';
import { resetReviews } from '@/core/store/reviews/reviews-slice';
import Loading from '@/app/loading';

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
  const reviews = useAppSelector(selectReviews)
  const getReviewsStatus = useAppSelector(selectGetReviewsStatus)

  const [currentChoise, setCurrentChoise] = useState('Банки');

  const dispatch = useAppDispatch()

  const fetchReviews = () => {
    dispatch(resetReviews())
    dispatch(getReviews({ limit: 3, offset: 0, product_type: currentChoise }))
  }

  useEffect(() => {
    fetchReviews()
  }, [currentChoise])


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
      {getReviewsStatus === 'loading' ?
        <Loading /> :
        <div className={s.feedback_cont}>
          {reviews?.results?.map((review) => {
            return <FeedbackItem key={review.id} review={review} />
          })}
        </div>
      }
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все отзывы'} width={300} />
      </div>
    </div>
  );
};

export default Feedback;
