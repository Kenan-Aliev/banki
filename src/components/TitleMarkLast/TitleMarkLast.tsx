import React from 'react';
import s from '@/components/FeedBacks/Feedback/Feedback.module.scss';

type Props = {
  title: string;
  sub: string;
};
const TitleMarkLast = ({ title, sub }: Props) => {
  return (
    <h2 className={s.title}>
      {title}
      <mark>{sub}</mark>
    </h2>
  );
};

export default TitleMarkLast;
