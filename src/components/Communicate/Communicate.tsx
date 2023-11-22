import React from 'react';
import s from './Communicate.module.scss';
import Accordeon from '@/components/Accordeon/Accordeon';

type accT = {
  numb: string;
  sub: string;
  text: string;
};

const acc: accT[] = [
  { numb: '01', sub: 'Вопрос - ответ', text: '' },
  {
    numb: '02',
    sub: 'Отзывы о вкладах',
    text: 'Оставьте свое мнение о банковских продуктах. Помогите другим сделать выбор финансового партнёра.',
  },
  { numb: '03', sub: 'Собственный форум', text: '' },
];

const Communicate = () => {
  return (
    <div className={s.comm}>
      <div className={s.comm_i}>
        <div className={s.title}>
          Как мы <mark>ведем коммуникацию</mark> с нашими клиентами
        </div>
        <Accordeon items={acc} />
      </div>
    </div>
  );
};

export default Communicate;
