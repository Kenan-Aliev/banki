import React from 'react';
import s from './FeedbackItem.module.scss';
import Image from 'next/image';
import star from '@/assets/icons/Star.svg';
import { Review } from '@/models/Reviews/Reviews';
import { Box, Stack } from '@mui/material';

interface Props {
  review: Review
}


const FeedbackItem = ({ review }: Props) => {
  const { content, id, product_type, title, verified, rating, bank_logo, bank_name, publish_date } = review
  console.log(bank_name)
  return (
    <div className={s.feedback_item}>
      <Stack direction='row' sx={{
        justifyContent: 'space-between',
        // alignItems: 'center',
        "@media(max-width:600px)": {
          flexDirection: "column-reverse"
        }
      }}>
        <div className={s.title}>{title}</div>
        <Box sx={{
          width: '25%',
          height: '80px',
          "& img": {
            width: '100%',
            objectFit: 'contain',
            borderRadius: '10px'
          },
          "@media(max-width:600px)": {
            width: '35%'
          }
        }}>
          <Image src={bank_logo} alt='Логотип банка' width={100} height={100} />
        </Box>
      </Stack>
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
