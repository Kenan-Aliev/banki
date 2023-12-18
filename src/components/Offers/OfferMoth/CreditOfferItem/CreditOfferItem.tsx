import React from 'react';
import s from './CreditOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { CreditItemT } from '@/models/Credits/Credits';
import { baseUrl } from '@/core/const/baseUrl';

interface OfferItemProps {
	item: CreditItemT;
}

const CreditOfferItem = (props: OfferItemProps) => {
	const {
		item: { bank_logo, bank_title, loanName, min_rating, max_rating, loan_term, loan_amount, currency },
	} = props;

	return (
		<div className={s.offer_item}>
			<div className={s.inf}>
				<Image alt={'icon'} src={baseUrl + bank_logo} width={50} height={50} />
				<div className={s.info}>
					<div className={s.name}>{bank_title}</div>
					<div className={s.subtitle}>{loanName}</div>
				</div>
			</div>
			<div className={s.line}></div>
			<div className={s.tarifs}>
				<div className={s.years}>
					<div className={s.title}>Ставка</div>
					<span>
						{min_rating === max_rating ? min_rating : `${min_rating} - ${max_rating}`} %
					</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Срок</div>
					<span>
						{loan_term.min === 0 ? `до ${loan_term.max}` : `${loan_term.min} - ${loan_term.max}`} мес.
					</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Сумма</div>
					<span>
						{loan_amount.min} - {loan_amount.max} {currency}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CreditOfferItem;
