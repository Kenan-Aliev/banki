import React from 'react';
import s from './NewsItem.module.scss';
import Image from 'next/image';
import smile from '@/assets/icons/Smile.svg';
import { InvestmentNewsItemT } from '@/models/Investment/Investment';
import { NewsInterface } from '@/models/News/News';

interface NewsItemProps {
  item: NewsInterface | InvestmentNewsItemT;
}

const NewsItem = (props: NewsItemProps) => {
  const {
    item: { title, text, subtitle },
  } = props;

  return (
    <div className={s.item}>
      {/* {image && (
        <Image
          style={{ marginBottom: '3rem' }}
          alt={'icon'}
          src={image}
          width={100}
          height={100}
        />
      )} */}
      <div className={s.info}>
        <div className={s.date}>30.06.2023</div>
        <span>
          <Image src={smile} alt={'smile'} width={14} height={14} />
          <div>{124242}</div>
        </span>
      </div>
      <div className={s.text}>
        <mark>{title}:</mark> {subtitle}
      </div>
      <div className={s.subtitle}>{text}</div>
      <div className={s.line} />
      <div className={s.info} style={{ marginTop: '1rem' }}>
        <div className={s.date}>30.06.2023</div>
        <span>
          <Image src={smile} alt={'smile'} width={14} height={14} />
          <div>{124242}</div>
        </span>
      </div>
      <div className={s.text}>
        <mark>{title}:</mark> {text}
      </div>
    </div>
  );
};

export default NewsItem;
