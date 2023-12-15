import React from 'react';
import s from './CreditOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { CreditItemT } from '@/models/Credits/Credits';

interface OfferItemProps {
	item: CreditItemT;
}

const CreditOfferItem = (props: OfferItemProps) => {
	const {
		item,
	} = props;

	return (
		<div className={s.offer_item}>
			<div className={s.inf}>
				<Image alt={'icon'} src={mockBankIcon} />
				<div className={s.info}>
					<div className={s.name}>Название банка</div>
					<div className={s.subtitle}>Название кредита</div>
				</div>
			</div>
			<div className={s.line}></div>
			<div className={s.tarifs}>
				<div className={s.years}>
					<div className={s.title}>Ставка</div>
					<span>4-32%</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Срок</div>
					<span>до 7 лет</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Сумма</div>
					<span>до 5 млн руб</span>
				</div>
			</div>
		</div>
	);
};

export default CreditOfferItem;
