import React from 'react';
import s from './FeedbackItem.module.scss';
import Image from 'next/image';
import star from '@/assets/icons/Star.svg';
import { Review } from '@/models/Reviews/Reviews';
import { Box, Stack, Typography } from '@mui/material';

interface Props {
  review: Review
}


const FeedbackItem = ({ review }: Props) => {
  const { content, id, product_type, title, verified, rating, bank_logo, bank_name, publish_date } = review
  console.log(bank_name)
  return (
    <div className={s.feedback_item}>
      <Stack direction='row' sx={{
        m: '20px 0',
        alignItems: 'center',
        gap: '10px 20px',
      }}>
        <Typography
          component='h2'
          sx={{
            fontSize: '18px',
            fontWeight: 700
          }}>
          {bank_name}
        </Typography>
        <Box sx={{
          height: '60px',
          "& img": {
            width: '100%',
            objectFit: 'contain',
            height: '100%',
          }
        }}>
          <Image src={bank_logo} alt='Логотип банка' width={500} height={500} />
        </Box>
      </Stack>
      <div className={s.title}>{title}</div>
      <div className={s.stars}>
        {new Array(rating).fill(0).map((num, index) => {
          return <Image alt={'star icon'} src={star} key={index} />
        })}
      </div>
      <div className={s.text}>
        {content}
      </div>
      <div className={s.date}>{publish_date}</div>
      {/* <div className={s.more}>Читать полностью</div> */}
      {/* <div className={s.feed}>ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ</div> */}
    </div>
  );
};

export default FeedbackItem;
