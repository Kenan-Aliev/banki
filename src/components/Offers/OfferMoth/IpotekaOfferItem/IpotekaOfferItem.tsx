import React from 'react';
import s from './IpotekaOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';

interface OfferItemProps {
	item: MortgageItemT;
}

const IpotekaOfferItem = (props: OfferItemProps) => {
	const {
		item: { name, interest_rate, bank_title, bank_logo, loan_amount, currency },
	} = props;

	return (
		<div className={s.offer_item}>
			<div className={s.inf}>
				<Image alt={'icon'} src={mockBankIcon} />
				<div className={s.info}>
					<div className={s.name}>{bank_title}</div>
					<div className={s.subtitle}>{name}</div>
				</div>
			</div>
			<div className={s.line}></div>
			<div className={s.tarifs}>
				<div className={s.years}>
					<div className={s.title}>Ставка</div>
					<span>{interest_rate?.min} - {interest_rate.max} %</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Платёж</div>
					<span>{loan_amount?.min} - {loan_amount?.max} {currency}</span>
				</div>
			</div>
		</div>
	);
};

export default IpotekaOfferItem;
