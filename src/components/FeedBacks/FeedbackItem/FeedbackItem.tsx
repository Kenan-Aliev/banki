import React from 'react';
import s from './FeedbackItem.module.scss';
import Image from 'next/image';
import star from '@/assets/icons/Star.svg';

const FeedbackItem = () => {
  return (
    <div className={s.feedback_item}>
      <div className={s.date}>29.07.2023</div>
      <div className={s.title}>Отличное обслуживание</div>
      <div className={s.stars}>
        <Image alt={'star icon'} src={star} />
        <Image alt={'star icon'} src={star} />
        <Image alt={'star icon'} src={star} />
        <Image alt={'star icon'} src={star} />
      </div>
      <div className={s.text}>
        Прежде всего, современная методология разработки однозначно определяет каждого участника как
        способного. Прежде всего, современная методология разработки однозначно определяет каждого участника
        как способного...
      </div>
      <div className={s.more}>Читать полностью</div>
      <div className={s.feed}>ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ</div>
    </div>
  );
};

export default FeedbackItem;
