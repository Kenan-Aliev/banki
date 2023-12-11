import React from 'react';
import s from './FeedbackItem.module.scss';
import Image from 'next/image';
import star from '@/assets/icons/Star.svg';
import { Review } from '@/models/Reviews/Reviews';

interface Props {
  review: Review
}


const FeedbackItem = ({ review }: Props) => {
  const { content, id, product_type, title, verified, rating } = review
  console.log(rating)
  return (
    <div className={s.feedback_item}>
      <div className={s.date}>29.07.2023</div>
      <div className={s.title}>{title}</div>
      <div className={s.stars}>
        {new Array(rating).fill(0).map((num, index) => {
          return <Image alt={'star icon'} src={star} key={index} />
        })}
      </div>
      <div className={s.text}>
        {content}
      </div>
      {/* <div className={s.more}>Читать полностью</div> */}
      {/* <div className={s.feed}>ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ</div> */}
    </div>
  );
};

export default FeedbackItem;
