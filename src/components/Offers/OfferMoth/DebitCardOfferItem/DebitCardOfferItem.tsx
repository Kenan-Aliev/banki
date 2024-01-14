import React from 'react';
import styles from './DebitCardOfferItem.module.scss';
import Image from 'next/image';
import { CardItemT } from '@/models/Cards/Cards';
import { baseUrl } from '@/core/const/baseUrl';

type Props = {
	item: CardItemT
};

const DebitCardOfferItem = ({ item }: Props) => {
	const { bank_logo, currency, service_fee, card_network } = item
	return (
		<div className={styles.bank_container}>
			<Image src={baseUrl + bank_logo} alt='' width={70} height={50} />
			<div className={styles.text_container}>
				<p className={styles.procent_text}>{card_network.name}</p>
				<p className={styles.rub_text}>{currency.toUpperCase()}</p>
				<p className={styles.value_text}>
					{service_fee.free ? 'Бесплатное обслуживание' : `${service_fee.cost} ${currency}`}
				</p>
			</div>
		</div>
	);
};

export default DebitCardOfferItem;
