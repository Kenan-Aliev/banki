'use client';

import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import data from '@/core/data/index';
import SlideItem from '@/components/SlideItem/SlideItem';
import Slider from '@/components/Slider/Slider';
import { useParams } from 'next/navigation';

function BankProducts() {
  const params = useParams();
  const slides = useMemo(() => {
    return data.HomePage.iconsSlide.map((slide) => {
      return {
        link: slide.link + `?id=${params.id}`,
        node: <SlideItem img={slide.img} name={slide.name} width={slide.w} />,
      };
    });
  }, []);
  return (
    <Box mt='50px'>
      <Typography component='h2' textAlign='center' fontSize='40px' fontFamily='inherit'>
        Продукты банка
      </Typography>
      <Slider
        data={slides}
        infinite={false}
        leftArr={true}
        rightArr={true}
        responsive={{
          '320': 2,
          '480': 2,
          '640': 3,
          '768': 4,
          '1500': 5,
        }}
      />
    </Box>
  );
}

export default BankProducts;
