import { Box, Grid, Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import financeRating from '@/assets/icons/bank_finance_rating.svg';
import peopleRating from '@/assets/icons/bank_people_rating.svg';
import phone from '@/assets/icons/bank_phone.svg';
import premiya from '@/assets/icons/bank_premiya.svg';
import wave from '@/assets/icons/bank_intro_wave.svg';
import { BankT } from '@/models/Banks/banks';

const gridStyles: SxProps<Theme> = {
  display: 'flex',
  border: '1px solid #E0EAFF',
  borderRadius: '14px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 0',
  gap: '15px',
  background: 'white',
  '& h3': {
    fontFamily: 'inherit',
  },
  '& p': {
    fontFamily: 'inherit',
  },
};

const titleStyles: SxProps<Theme> = {
  fontSize: '46px',
  fontFamily: 'inherit',
  '@media(max-width:640px)': {
    fontSize: '23px',
  },
};

const subtitleStyles: SxProps<Theme> = {
  fontFamily: 'inherit',
  fontSize: '18px',
  '@media(max-width:640px)': {
    fontSize: '14px',
  },
};

const imgBoxStyles: SxProps<Theme> = {
  position: 'absolute',
  height: '100%',
  right: '-13px',
  top: '0',
  zIndex: '-1',
  '& img': {
    height: '100%',
    borderRadius: '0 32px 32px 0',
  },
  '@media(max-width:1250px)': {
    display: 'none',
  },
};

interface Props {
  bank: BankT;
}

function BankIntro(props: Props) {
  const { bank } = props;
  return (
    <Box
      sx={{
        border: '1px solid #D9DBDF',
        borderRadius: '14px',
        padding: '50px',
        position: 'relative',
      }}
    >
      <Box sx={imgBoxStyles}>
        <Image src={wave} alt='Волна' />
      </Box>
      <Typography component={'h2'} sx={titleStyles}>
        {bank.name}
      </Typography>
      <Typography component={'p'} sx={subtitleStyles}>
        {bank.legal_name}
      </Typography>

      <Grid container justifyContent='space-between' mt='30px' gap='15px'>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}>
          <Image src={financeRating} alt='Финансовый рейтинг' />
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Финансовый рейтинг
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.fiancial_rating} место по Кыргызстану
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Номер лицензии
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.licenseNumber}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Телефон
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.contacts[0]?.phones}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Адрес
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.contacts[0]?.address}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BankIntro;
