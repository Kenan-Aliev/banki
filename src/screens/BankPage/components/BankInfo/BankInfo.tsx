'use client';

import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { Box, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import MainInfo from '../MainInfo/MainInfo';
import Contacts from '../Contacts/Contacts';
import FinanceRating from '../FinanceRating/FinanceRating';
import PeopleRating from '../PeopleRating/PeopleRating';
import Reference from '../Reference/Reference';
import { BankT } from '@/models/Banks/banks';

const mockFilterItems = [
  { name: 'Основная информация', active: true },
  { name: 'Контакты', active: false },
  { name: 'Финансовый рейтинг', active: false },
  { name: 'Справка от vsebanki.kg', active: false },
];

interface Props {
  bank: BankT;
}

function BankInfo({ bank }: Props) {
  const [currentChoise, setCurrentChoise] = useState('Основная информация');

  const items = useMemo(() => {
    switch (currentChoise) {
      case 'Основная информация':
        return <MainInfo bank={bank} />;
      case 'Контакты':
        return <Contacts bank={bank} />;
      case 'Финансовый рейтинг':
        return <FinanceRating bank={bank} />;
      case 'Справка от vsebanki.kg':
        return <Reference />;
      default:
        return null;
    }
  }, [currentChoise]);

  return (
    <Box mt='70px'>
      <Typography component='h2' textAlign='center' fontSize='40px' fontFamily='inherit'>
        Информация о банке
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '2rem',
          mt: '20px',
        }}
      >
        <ChoiseItemsMap
          currentChoise={currentChoise}
          setActive={setCurrentChoise}
          choiseItems={mockFilterItems}
        />
      </Box>
      {items}
    </Box>
  );
}

export default BankInfo;
