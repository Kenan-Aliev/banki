import React from 'react';
import s from './CardsOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';

interface OfferItemProps {
	item: any;
}

const CardsOfferItem = (props: OfferItemProps) => {
	const {
		item: { deposit_name, interest_rate, term_range, description },
	} = props;

	return (
		<div className={s.offer_item}>
			<div className={s.inf}>
				<Image alt={'icon'} src={mockBankIcon} />
				<div className={s.info}>
					<div className={s.name}>Банк</div>
					<div className={s.subtitle}>{deposit_name}</div>
				</div>
			</div>
			<div className={s.line}></div>
			<div className={s.tarifs}>
				<div className={s.years}>
					<div className={s.title}>Годовых</div>
					<span>до 10%</span>
				</div>
				<div className={s.years}>
					<div className={s.title}>Срок</div>
					<span>срок 370 дн.</span>
				</div>
			</div>
		</div>
	);
};

export default CardsOfferItem;
