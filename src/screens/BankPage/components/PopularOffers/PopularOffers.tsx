'use client'

import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap'
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import CreditBankItem from '@/components/credits/CreditBankItem';
import OffersItem from '@/screens/CreditMapPage/components/OffersItem/OffersItem';
import { Box, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'



const mockFilterItems = [
	{ name: 'Вклады', active: true },
	{ name: 'Потребительские кредиты', active: false },
	{ name: 'Ипотека', active: false },
	{ name: 'РКО', active: false },
	{ name: 'Дебетовые карты', active: false },
	{ name: 'Кредитные карты', active: false },
];

const data = {
	depositItem: {
		"max_amount": 1000000,
		"currency_id": 1,
		"rate": 10,
		"payments": "monthly",
		"special_rate": 5,
		"promotion_of_month": true,
		"special_condition": "Если человек хороший",
		"withdrawal": false,
		"timeframe_min": 365,
		"adding_money": false,
		"bank_id": 11,
		"timeframe_max": 3650,
		"monthly_payments": false,
		"id": 1,
		"name": "Щедрый",
		"capitalisation": false,
		"min_amount": 10000,
		"description": "<p>Вклад</p>",
		"deposit_type": "Обычный",
		"bank": {
			"bank_logo": "https://api.vsebanki.kg/static/1.png",
			"bank_name": "ЗАО «Банк Азии» "
		},
		"rating": 0
	},
	creditItem: {
		"max_amount": 0,
		"id": 0,
		"timeframe_min": 0,
		"name": "string",
		"min_amount": 0,
		"rate": 0,
		"timeframe_max": 0,
		"bank_name": "Bank",
		"description": "string",
		"rating": 0,
		type: "type",
		min_procent: 0,
		max_procent: 0,
	},
	cardItem: {
		id: 0,
		name: "string",
		rating: 0,
		bank_name: 'Bank',
		type: 'type',
		currency: "1",
		limit: 10,
		grace_period: 1,
		rate: 10,
		service_1_year: 10,
		follow_up_service: 10
	}
}


function PopularOffers() {
	const [currentChoise, setCurrentChoise] = useState('Вклады');

	const items = useMemo(() => {
		switch (currentChoise) {
			case "Вклады":
				return <DepositOfferItem activeCurrency={1} item={data.depositItem} />
			case "Потребительские кредиты":
			case "Ипотека":
			case "РКО":
				return <CreditBankItem item={data.creditItem} />
			case "Дебетовые карты":
			case "Кредитные карты":
				return <OffersItem item={data.cardItem} />
		}
	}, [currentChoise])
	return (
		<Box mt='70px'>
			<Typography component='h2' textAlign='center' fontSize='40px' fontFamily='inherit'>
				Популярные предложения от (НАЗВАНИЕ БАНКА)
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

export default PopularOffers