import React from 'react';
import s from './NewsItem.module.scss';
import Image from 'next/image';
import smile from '@/assets/icons/Smile.svg';
import mockNewsImage from '@/assets/icons/bank_icons/img.svg';
import { NewsInterface } from '@/models/News/News';

interface NewsItemProps {
  item: NewsInterface;
}

const NewsItem = (props: NewsItemProps) => {
  const {
    item: { title, text, image, subtitle },
  } = props;

  return (
    <div className={s.item}>
      <Image alt={'icon'} src={image || mockNewsImage} />
      <div className={s.info}>
        <div className={s.date}>30.06.2023</div>
        <span>
          <Image src={smile} style={{ width: '14px', height: '14px' }} alt={'smile'} />
          <div>124242</div>
        </span>
      </div>
      <div className={s.text}>
        <mark>{title}</mark> {subtitle}
      </div>
      <div className={s.subtitle}>{text}</div>
      <div className={s.line}></div>
      <div className={s.info} style={{ marginTop: '1rem' }}>
        <div className={s.date}>30.06.2023</div>
        <span>
          <Image src={smile} alt={'smile'} />
          <div>124242</div>
        </span>
      </div>
      <div className={s.text}>
        <mark>Как получить до 7,5 тыс. рублей за три месяца:</mark> шесть актуальных депозитов июля
      </div>
    </div>
  );
};

export default NewsItem;
