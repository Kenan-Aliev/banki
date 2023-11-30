'use client'

import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'


const mockFilterItems = [
	{ name: 'Основная информация', active: true },
	{ name: 'Контакты', active: false },
	{ name: 'Финансовый рейтинг', active: false },
	{ name: 'Народный рейтинг', active: false },
	{ name: 'Справка от (НАЗВАНИЕ СЕРВИСА)', active: false },
];



function BankInfo() {
	const [currentChoise, setCurrentChoise] = useState('Основная информация');

	return (
		<Box mt='70px'>
			<Typography component='h2' textAlign='center' fontSize='40px'>
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

		</Box >
	)
}

export default BankInfo