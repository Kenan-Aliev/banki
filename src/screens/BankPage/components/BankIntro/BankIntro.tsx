import { Box, Grid, Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import financeRating from '@/assets/icons/bank_finance_rating.svg';
import ipoteka from '@/assets/icons/ipoteka.svg';
import phone from '@/assets/icons/bank_phone.svg';
import w_1 from '@/assets/icons/w_1.svg';
import wave from '@/assets/icons/bank_intro_wave.svg';
import { BankT } from '@/models/Banks/banks';

const gridStyles: SxProps<Theme> = {
  display: 'flex',
  border: '1px solid #E0EAFF',
  borderRadius: '14px',
  alignItems: 'center',
  padding: '10px',
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

      <Grid container justifyContent='space-between' mt='30px' gap='15px 0'>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.9} xl={2.9}>
          <Box
            sx={{
              height: '32px',
              width: '32px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={financeRating} alt='Финансовый рейтинг' />
          </Box>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Финансовый рейтинг
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.fiancial_rating} место по Кыргызстану
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.9} xl={2.9}>
          <Box
            sx={{
              height: '32px',
              width: '32px',
              borderRadius: '6px',
              background: '#e0eaff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={w_1} alt='Номер лицензии' />
          </Box>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Номер лицензии
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.licenseNumber}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.9} xl={2.9}>
          <Box
            sx={{
              height: '32px',
              width: '32px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={phone} alt='Телефон' />
          </Box>
          <Stack>
            <Typography component='h3' fontSize='16px' fontWeight={600}>
              Телефон
            </Typography>
            <Typography component='p' fontSize='14px'>
              {bank.contacts[0]?.phones}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={gridStyles} xs={12} sm={5.5} md={5.5} lg={2.9} xl={2.9}>
          <Box
            sx={{
              height: '32px',
              width: '32px',
              borderRadius: '6px',
              background: '#e0eaff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={ipoteka} alt='Адрес' />
          </Box>
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
