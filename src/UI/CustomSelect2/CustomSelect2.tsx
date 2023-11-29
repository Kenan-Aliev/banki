'use client';

import React from 'react';
import s from './CustomSelect2.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
	img?: StaticImageData;
	options: {
		text: string
		value: string | number
	}[];
	handleChange: (prop: string, value: any) => void
	prop: string
};

const CustomSelect2 = ({ img, options, handleChange, prop }: Props) => {
	const optionItems = options.map((el, index) => (
		<option key={index} value={el.value}>
			{el.text}
		</option>
	));

	return (
		<div className={s.select}>
			{img && <Image src={img} alt='' />}
			<select onChange={(e) => handleChange(prop, e.target.value)}>
				{optionItems}
			</select>
		</div>
	);
};

export default CustomSelect2;
