import React from 'react';
import s from './FrequentQuestions.module.scss';
import QuestionItem from '@/components/QuestionItem/QuestionItem';

type ItemT = {
  title: string;
  text: string;
};
type Props = {
  title: string;
  items: ItemT[];
};

const FrequentQuestions = ({ title, items }: Props) => {
  return (
    <div className={s.quests}>
      <div className={s.title}>{title}</div>
      <div className={s.questItems}>
        {items.map((el, index) => (
          <QuestionItem key={index} item={el} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestions;
