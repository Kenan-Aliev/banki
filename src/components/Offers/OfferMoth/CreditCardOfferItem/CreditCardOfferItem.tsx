import React from 'react';
import styles from './CreditCardOfferItem.module.scss';
import Image from 'next/image';
import { CardItemT } from '@/models/Cards/Cards';
import { baseUrl } from '@/core/const/baseUrl';

type Props = {
	item: CardItemT
};

const CreditCardOfferItem = ({ item }: Props) => {
	const { bank_logo, currency, credit_limit, additional_bonuses } = item
	return (
		<div className={styles.bank_container}>
			<Image src={baseUrl + bank_logo} alt='' width={70} height={50} />
			<div className={styles.text_container}>
				<p className={styles.procent_text}>{additional_bonuses}</p>
				<p className={styles.rub_text}>{currency.toUpperCase()}</p>
				<p className={styles.value_text}>{credit_limit}</p>
			</div>
		</div>
	);
};

export default CreditCardOfferItem;
