import React from 'react';
import s from './QuoteInv.module.scss';
import QuoteItemInv from '@/screens/AnalyticsInv/components/QuoteItemInv/QuoteItemInv';

type quoteT = {
  title: string;
  count: string;
  changes: string;
};
type quoteItemT = {
  name: string;
  quotes: quoteT[];
};
type Props = {
  quoteItems: quoteItemT[];
};
const QuoteInv = ({ quoteItems }: Props) => {
  return (
    <section className={s.wrapper}>
      <div className={s.header}>
        <div className={s.text}>
          <h1 className={s.title}>Котировки</h1>
          <p>
            Отслеживайте официальные котировки акций основных российских компаний в режиме реального времени.
            Следите за изменением цены и выбирайте лучшее время для покупки или продажи ценных бумаг.
            Благодаря оперативности информации вы ничего не пропустите. Для максимального удобства и экономии
            времени акции компаний разбиты по разным секторам — легко выбрать то, что нужно именно вам.
          </p>
        </div>
        <div className={s.changeTime}>Обновлено 23.08.2023 в 09:48</div>
      </div>
      <div className={s.item_wrapper}>
        {quoteItems.map((el, index) => (
          <QuoteItemInv key={index} items={el.quotes} name={el.name} />
        ))}
      </div>
    </section>
  );
};

export default QuoteInv;
