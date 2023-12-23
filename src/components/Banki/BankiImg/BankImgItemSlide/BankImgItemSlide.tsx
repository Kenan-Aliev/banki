import React from 'react';
import s from './BankImgItemSlide.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Box, Theme, SxProps } from '@mui/material';

const boxStyles: SxProps<Theme> = {
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
};

const BankImgItemSlide = ({ img }: Props) => {
  return (
    <Box sx={boxStyles}>
      <Image src={img} width={100} height={100} alt={'иконка банка'} />
    </Box>
  );
};

export default BankImgItemSlide;
