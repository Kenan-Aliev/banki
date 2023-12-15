import React from 'react';
import { Stack } from '@mui/material';
import { CreditItemT } from '@/models/Credits/Credits';
import CreditBankItem from '@/components/credits/CreditBankItem';

const ExpandedCredits = ({
	bankId,
	credits,
	primaryCreditId
	// activeCurrency
}: {
	bankId: number;
	credits: CreditItemT[];
	primaryCreditId: number;
	// activeCurrency: string
}) => {
	const filteredCredits = credits.filter((item) => item.bank === bankId && item.id !== primaryCreditId);
	return (
		<Stack spacing={1}>
			{filteredCredits.map((credit) => (
				<CreditBankItem item={credit} key={credit.id} />
			))}
		</Stack>

	);
};

export default ExpandedCredits