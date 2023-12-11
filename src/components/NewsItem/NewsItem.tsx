import React from 'react';
import s from './NewsItem.module.scss';
import Image from 'next/image';
import smile from '@/assets/icons/Smile.svg';
import { InvestmentNewsItemT } from '@/models/Investment/Investment';
import { NewsInterface } from '@/models/News/News';

interface NewsItemProps {
  item: NewsInterface;
}

const NewsItem = (props: NewsItemProps) => {
  const {
    item: { title, summary, publish_date },
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
        <div className={s.date}>{new Date(publish_date).toLocaleDateString()}</div>
        <span>
          <Image src={smile} alt={'smile'} width={14} height={14} />
          <div>{124242}</div>
        </span>
      </div>
      <div className={s.text}>
        {title}
      </div>
      <div className={s.subtitle}>{summary}</div>
      <div className={s.line} />
    </div>
  );
};

export default NewsItem;
