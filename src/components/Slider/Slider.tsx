'use client';

import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import s from './Slider.module.scss';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type SlideT = {
	link?: string;
	node: React.ReactNode;
};
type Props = {
	data: SlideT[];
	infinite: boolean;
	leftArr: boolean;
	rightArr: boolean;
	responsive: {
		320: number;
		480: number;
		640: number;
		768: number;
		1500: number;
	};
	centered?: boolean
};

const Slider = React.forwardRef(({ data, infinite, responsive, leftArr, rightArr, centered = true }: Props, ref: MutableRefObject<any>) => {
	const sliderRef = useRef<any>(null);
	const [slideItems, setSlideItems] = useState<React.ReactNode[]>();

	useEffect(() => {
		if (data && data.length > 0) {
			const slides = data.map((el, index) => (
				<SwiperSlide key={index}
					style={{
						display: 'flex',
						justifyContent: centered ? 'center' : 'initial',
						alignItems: 'center'
					}}>
					{el.link ? (
						<Link href={el.link}>
							{el.node}
						</Link>
					) : (
						el.node
					)}
				</SwiperSlide>
			));
			setSlideItems(slides);
		}
	}, [data]);

	const handlePrevious = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<div className={s.slide}>
			{leftArr && (
				<div onClick={handlePrevious} className={s.arr}>
					<Image className={s.arr} alt={'icon'} src={arr_l} />
				</div>
			)}
			<Swiper
				id='swiper'
				ref={ref ?? sliderRef}
				spaceBetween={10}
				loop={infinite}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					320: {
						slidesPerView: responsive[320],
					},
					480: {
						slidesPerView: responsive[480],
					},
					640: {
						slidesPerView: responsive[640],
					},
					768: {
						slidesPerView: responsive[768],
					},
					1500: {
						slidesPerView: responsive[1500],
					},
				}}
			>
				{slideItems}
			</Swiper>
			{rightArr && (
				<div onClick={handleNext} className={s.arr}>
					<Image src={arr_r} alt={'arr-right'} />
				</div>
			)}
		</div>
	);
});

export default Slider;
