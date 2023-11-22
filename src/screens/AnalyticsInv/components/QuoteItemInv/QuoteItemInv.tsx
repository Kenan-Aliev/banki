import React from 'react';
import s from './QuoteItemInv.module.scss';
import ChoiseItem from '@/components/Choise/ChoiseItem/ChoiseItem';
import arr from '@/assets/icons/blue_small_arr_quote.svg';
import Image from 'next/image';

type quoteT = {
  title: string;
  count: string;
  changes: string;
};

type Props = {
  name: string;
  items: quoteT[];
};

const QuoteItemInv = ({ name, items }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.chooseItems}>
        <ChoiseItem name={'Российские акции'} active={true} />
        <ChoiseItem name={'Акции США'} active={false} />
      </div>
      <h1 className={s.name}>{name}</h1>
      <div className={s.table}>
        <div className={s.table_counts}>
          <h1 className={s.name_t}>Акция</h1>
          <h1 className={s.count}>Значение</h1>
          <h1 className={s.changes}>Изменение</h1>
        </div>
        <div className={s.table_items}>
          {items.map((el, index) => (
            <div className={s.table_item} key={index}>
              <h3 className={s.title}>{el.title}</h3>
              <h3 className={s.count}>{el.count}</h3>
              <h3 className={s.changes}>
                <Image src={arr} alt={'arr'} />
                {el.changes}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteItemInv;
