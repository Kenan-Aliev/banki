import React from 'react';
import s from './AllReviews.module.scss';
import data from '@/core/data/index';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import ReviewItem from '@/screens/FeedBackProfile/components/AllReviews/ReviewItem/ReviewItem';

const AllReviews = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Все отзывы</h1>
      <div className={s.choseCont}>
        <ChoiseItemsMap choiseItems={data.FeedBackProfile.chooseFeedback} />
      </div>
      <div className={s.items_cont}>
        {data.FeedBackProfile.feedbackItems.map((el, index) => (
          <ReviewItem title={el.title} text={el.text} date={el.date} key={index} rating={el.rating} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
