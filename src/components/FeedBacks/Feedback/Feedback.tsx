'use client';
import React, { useEffect, useState } from 'react';
import s from './Feedback.module.scss';
import FeedbackItem from '@/components/FeedBacks/FeedbackItem/FeedbackItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import TitleMarkLast from '@/components/TitleMarkLast/TitleMarkLast';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getReviews, getReviewsCategories } from '@/core/store/reviews/reviews-actions';
import {
  selectGetReviewsStatus,
  selectReviews,
  selectReviewsCategories,
} from '@/core/store/reviews/reviews-selectors';
import Loading from '@/app/loading';

type Props = {
  title?: string;
  sub?: string;
  chois?: ItemT[];
  category?: string;
  bank_id?: number;
};
type ItemT = {
  name: string;
  active: boolean;
};

const Feedback = ({ title, sub, chois, category, bank_id }: Props) => {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(selectReviews);
  const getReviewsStatus = useAppSelector(selectGetReviewsStatus);
  const categories = useAppSelector(selectReviewsCategories)?.results;

  const reviewsArr = bank_id
    ? reviews.results?.filter((review) => review.bank_id === bank_id)
    : reviews.results;

  const items = categories
    ?.map((category) => {
      return {
        id: category.id,
        name: category.title,
        active: false,
      };
    })
    .filter((category) => {
      return chois?.find((i) => category.name.toLowerCase().includes(i.name.toLowerCase()));
    });

  const [currentChoise, setCurrentChoise] = useState(0);

  const fetchReviews = () => {
    dispatch(getReviews({ limit: 3, offset: 0, product_type: String(currentChoise) }));
  };

  const fetchReviewsCategories = () => {
    dispatch(getReviewsCategories({ limit: 20, offset: 0 }));
  };

  useEffect(() => {
    fetchReviewsCategories();
  }, []);

  useEffect(() => {
    if (currentChoise !== 0) {
      fetchReviews();
    }
  }, [currentChoise]);

  useEffect(() => {
    if (categories && !category) {
      setCurrentChoise(categories[0].id);
    } else if (categories && category) {
      const c = categories.find((cat) => cat.title.includes(category));
      setCurrentChoise(c.id);
    }
  }, [categories, category]);

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
          <ChoiseItemsMap setActive={setCurrentChoise} currentChoise={currentChoise} choiseItems={items} />
        </div>
      )}
      {getReviewsStatus === 'loading' ? (
        <Loading />
      ) : (
        <div className={s.feedback_cont}>
          {reviewsArr?.map((review) => {
            return <FeedbackItem key={review.id} review={review} />;
          })}
        </div>
      )}
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все отзывы'} width={300} />
      </div>
    </div>
  );
};

export default Feedback;
