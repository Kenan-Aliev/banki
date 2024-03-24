import { BankT } from '@/models/Banks/banks';
import { Box, Typography } from '@mui/material';
import React from 'react';

function MainInfo({ bank }: { bank: BankT }) {
  return (
    <Box
      sx={{
        border: '1px solid #CCE6FF',
        borderRadius: '7px',
        padding: '24px 24px 40px 24px',
      }}
    >
      <Typography
        component='h3'
        sx={{
          color: '#424242',
          fontFamily: 'inherit',
        }}
        dangerouslySetInnerHTML={{ __html: bank.description }}
      />
    </Box>
  );
}

export default MainInfo;
