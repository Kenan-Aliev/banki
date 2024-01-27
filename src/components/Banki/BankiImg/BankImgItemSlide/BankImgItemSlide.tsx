import React from 'react';
import s from './BankImgItemSlide.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Box, Theme, SxProps, Typography } from '@mui/material';

const boxStyles: SxProps<Theme> = {
  height: '110px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '16px',
  borderRadius: '14px',
  border: '1px solid #d9dbdf',
  background: '#fff',
  backdropFilter: 'blur(9.5px)',
  "& img": {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}

type Props = {
  img: string | StaticImageData;
  bankName?: string
};

const BankImgItemSlide = ({ img, bankName }: Props) => {
  return (
    <Box sx={boxStyles}>
      <Image src={img} width={100} height={100} alt={'иконка банка'} />
      {bankName &&
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: 'inherit',
          }}
        >
          {bankName}
        </Typography>}

    </Box>
  );
};

export default BankImgItemSlide;
