import React from 'react';
import { DepositItemT } from '@/models/Deposit/Deposit';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { Stack } from '@mui/material';

const ExpandedDeposits = ({
	bankId,
	deposits,
	primaryDepositId,
	activeCurrency
}: {
	bankId: number;
	deposits: DepositItemT[];
	primaryDepositId: number;
	activeCurrency: string
}) => {
	const filteredDeposits = deposits.filter((item) => item.bank_id === bankId && item.deposit_id !== primaryDepositId);
	return (
		<Stack spacing={1}>
			{filteredDeposits.map((deposit) => (
				<DepositOfferItem item={deposit} activeCurrency={activeCurrency} key={deposit.deposit_id} />
			))}
		</Stack>

	);
};

export default ExpandedDeposits