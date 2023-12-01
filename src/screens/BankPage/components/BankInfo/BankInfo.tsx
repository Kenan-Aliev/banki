'use client'

import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { Box, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import MainInfo from '../MainInfo/MainInfo';
import Contacts from '../Contacts/Contacts';
import FinanceRating from '../FinanceRating/FinanceRating';
import PeopleRating from '../PeopleRating/PeopleRating';
import Reference from '../Reference/Reference';


const mockFilterItems = [
	{ name: 'Основная информация', active: true },
	{ name: 'Контакты', active: false },
	{ name: 'Финансовый рейтинг', active: false },
	{ name: 'Народный рейтинг', active: false },
	{ name: 'Справка от (НАЗВАНИЕ СЕРВИСА)', active: false },
];



function BankInfo() {
	const [currentChoise, setCurrentChoise] = useState('Основная информация');

	const items = useMemo(() => {
		switch (currentChoise) {
			case 'Основная информация':
				return <MainInfo />
			case "Контакты":
				return <Contacts />
			case "Финансовый рейтинг":
				return <FinanceRating />
			case "Народный рейтинг":
				return <PeopleRating />
			case "Справка от (НАЗВАНИЕ СЕРВИСА)":
				return <Reference />
			default: return null
		}
	}, [currentChoise])

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
					mt: '20px'
				}}
			>
				<ChoiseItemsMap
					currentChoise={currentChoise}
					setActive={setCurrentChoise}
					choiseItems={mockFilterItems}
				/>
			</Box>
			{items}

		</Box >
	)
}

export default BankInfo