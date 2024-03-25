import React from 'react';
import s from './NewsItem.module.scss';
import Image from 'next/image';
import smile from '@/assets/icons/Smile.svg';
import { NewsInterface } from '@/models/News/News';
import { Box } from '@mui/material';

interface NewsItemProps {
  item: NewsInterface;
}

const NewsItem = (props: NewsItemProps) => {
  const {
    item: { title, summary, publish_date, image, tags },
  } = props;

  return (
    <div className={s.item}>
      {image && (
        <Box
          sx={{
            width: '100%',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          <Image style={{ marginBottom: '3rem' }} alt={'icon'} src={image} width={1000} height={1000} />
        </Box>
      )}
      <div className={s.info}>
        <div className={s.date}>{new Date(publish_date).toLocaleDateString()}</div>
        <span>
          {tags.map((tag, index) => {
            return <span key={index}>#{tag}</span>;
          })}
        </span>
      </div>
      <div className={s.text}>{title}</div>
      <div className={s.subtitle}>{summary}</div>
      <div className={s.line} />
    </div>
  );
};

export default NewsItem;
