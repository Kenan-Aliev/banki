import React from 'react';
import s from '@/components/FeedBacks/Feedback/Feedback.module.scss';

type Props = {
  title: string;
  sub: string;
};
const TitleMarkLast = ({ title, sub }: Props) => {
  return (
    <div className={s.title}>
      {title}
      <mark>{sub}</mark>
    </div>
  );
};

export default TitleMarkLast;
