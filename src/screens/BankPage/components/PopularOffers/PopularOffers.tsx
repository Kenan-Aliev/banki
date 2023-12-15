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
		"deposit_id": 72,
		"deposit_name": "Стандарт",
		"amount_range": {
			"min": 0,
			"max": 5000000
		},
		"term_range": {
			"min": 3,
			"max": 24
		},
		"interest_rate": 12,
		"special_interest_rate": null,
		"bank_id": 16,
		"bank_title": "ФинансКредитБанк",
		"bank_logo": "/media/products/financakreditbanklogo.png",
		"currency": "KGS",
		"withdrawal_option": false,
		"replenishment_option": false,
		"monthly_interest_payment": true,
		"capitalization": false,
		"deposit_type": "Обычный",
		"special_offer": false,
		"special_offer_details": null,
		"offer_of_the_month": false,
		"interest_payment_frequency": "ежемесячно",
		"description": "",
		"additional_fields": []
	},
	creditItem: {
		"id": 26,
		"rating": {
			"min": 26,
			"max": 29.02
		},
		"bank": 4,
		"bank_title": "ОАО «Оптима Банк»",
		"bank_logo": "/media/products/%D0%BE%D0%BF%D1%82%D0%B8%D0%BC%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA.png",
		"specialInterestRate": null,
		"currency": "KGS",
		"loanName": "ТЕЗ кредит",
		"loanType": "Потребительский",
		"offerOfTheMonth": false,
		"collateralFree": true,
		"noDocumentsRequired": true,
		"description": "",
		"specialOffer": false,
		"specialOfferText": null,
		"loan_amount": {
			"min": 3000,
			"max": 250000
		},
		"loan_term": {
			"min": 2,
			"max": 24
		},
		"pakege": "",
		"security": "",
		"without_reference": true,
		"link": "https://www.optimabank.kg/index.php?option=com_content&view=article&id=3773&Itemid=140&lang=ru"
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
				return <DepositOfferItem activeCurrency={'kgs'} item={data.depositItem} />
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