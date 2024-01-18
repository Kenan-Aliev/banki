import React from 'react';
import styles from './Items.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CardItemT } from '@/models/Cards/Cards';
import { baseUrl } from '@/core/const/baseUrl';
import { Box } from '@mui/material';

interface ItemsProps {
  item: CardItemT;
}

const Items = ({ item }: ItemsProps) => {
  const { bank_title, bank_logo, service_fee, currency, name, special_offer_text } = item
  return (
    <div className={styles.container}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <Box sx={{
          width: '20%',
          height: '50px',
          "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }
        }}>
          <Image alt={'icon'} src={baseUrl + bank_logo} width={50} height={50} />
        </Box>
        <p className={styles.text_main}>{bank_title}</p>
      </Box>
      <div className={styles.content_container}>
        <p className={styles.sub}>{name}</p>
        <p className={styles.blue_text}>{special_offer_text}</p>
        <div className={styles.blue_text_container}>
          <div style={{ width: '88px' }}>
            <p className={styles.blue_text}>Обслуживание</p>
            <p className={styles.text}>{service_fee.free ? 'Бесплатное' : `${service_fee.cost} ${currency}`}</p>
          </div>

        </div>
        <BlueBtn text={'Посмотреть'} width={231} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default Items;
