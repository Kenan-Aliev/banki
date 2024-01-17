'use client';

import React, { useEffect, useState } from 'react';
import s from './SpecialOffersList.module.css';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { useAppSelector } from '@/hooks/redux';
import { selectDeposits, selectGetDepositsStatus } from '@/core/store/deposits/deposits-selectors';
import Loading from '@/app/loading';
import { getDepositsI } from '@/models/Services';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';
import SpecialOfferItem from '@/components/Offers/SpecialOfferItem/SpecialOfferItem';
import { currencies } from '@/core/data/currency';

interface SpecialOffersListProps {
	options: {
		text: string
		value: string | number
	}[];
	filterData: getDepositsI
	handleChangeFilter: (prop: string, value: any) => void
}

const SpecialOffersList = (props: SpecialOffersListProps) => {
	const { options, filterData, handleChangeFilter } = props;
	const { results: deposits, count } = useAppSelector(selectDeposits)
	const getDepositsStatus = useAppSelector(selectGetDepositsStatus)


	return (
		<div className={s.deposits}>
			<div className={s.deposit_selects}>
				<CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} prop={'ordering'} />
				<CustomSelect2 options={currencies} handleChange={handleChangeFilter} prop='currency' />
			</div>
			<ul className={s.deposit_offers}>
				{
					getDepositsStatus === 'loading' ?
						<Loading />
						:
						deposits?.map((item) => {
							return (
								<>
									<li key={item.deposit_id}>
										<SpecialOfferItem
											item={item}
										/>
									</li>
								</>
							)
						})
				}
			</ul>
			{count && count > filterData.offset + filterData.limit
				?
				<div className={s.btn_cont}>
					<BlueBtn text={'Показать еще'} width={235}
						onClick={() => handleChangeFilter('offset', filterData.offset + 10)}
					/>
				</div>
				: null}

		</div>
	);
};

export default SpecialOffersList;
