import React from 'react';
import { DepositItemT } from '@/models/Deposit/Deposit';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';

const ExpandedDeposits = ({
	bankId,
	deposits,
	primaryDepositId,
	activeCurrency
}: {
	bankId: number;
	deposits: DepositItemT[];
	primaryDepositId: number;
	activeCurrency: number
}) => {
	const filteredDeposits = deposits.filter((item) => item.bank_id === bankId && item.id !== primaryDepositId);
	return (
		<ul>
			{filteredDeposits.map((deposit) => (
				<li key={deposit.id}>
					<DepositOfferItem item={deposit} activeCurrency={activeCurrency} />
				</li>
			))}
		</ul>

	);
};

export default ExpandedDeposits