import React, { useMemo } from 'react';
import { DepositItemT } from '@/models/Deposit/Deposit';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { Stack } from '@mui/material';
import { CreditItemT } from '@/models/Credits/Credits';
import CreditBankItem from '@/components/credits/CreditBankItem';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';
import MortgageOfferItem from '@/components/mortgages/MortgageOfferItem';

type ItemsTypes = 'Депозиты' | 'Кредиты' | 'Ипотека'

const ExpandedItems = ({
	activeCurrency, items, itemsName
}: {
	items: any[]
	activeCurrency: string
	itemsName: ItemsTypes
}) => {

	const expandedItems = useMemo(() => {
		switch (itemsName) {
			case "Депозиты":
				return items.map((item) => {
					const deposit = item as DepositItemT
					return <DepositOfferItem item={deposit} activeCurrency={activeCurrency} key={deposit.deposit_id} />
				}
				)
			case "Кредиты":
				return items.map((item) => {
					const credit = item as CreditItemT
					return <CreditBankItem item={credit} activeCurrency={activeCurrency} key={credit.id} />
				}
				)
			case "Ипотека":
				return items.map((item) => {
					const mortgage = item as MortgageItemT
					return <MortgageOfferItem item={mortgage} activeCurrency={activeCurrency} key={mortgage.id} />
				}
				)

			default: return null
		}
	}, [items])
	return (
		<Stack spacing={1}>
			{expandedItems}
		</Stack>

	);
};

export default ExpandedItems