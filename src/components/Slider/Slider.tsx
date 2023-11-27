import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './Slider.module.scss';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import arr from '@/assets/icons/white_arr.svg';
import SlideItem from '@/components/SlideItem/SlideItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type SlideT = {
	link?: string;
	node: React.JSX.Element
};
type Props = {
	data: SlideT[];
	perView: number
	infinite: boolean
};

const Slider = ({ data, perView, infinite }: Props) => {
	const sliderRef = useRef(null);
	const [slideItems, setSlideItems] = useState<React.JSX.Element[]>();
	useEffect(() => {
		if (data && data.length > 0) {
			const slides = data.map((el, index) => (
				<SwiperSlide key={index}>
					{el.link
						? <>
							<Link href={el.link}>
								{el.node}
							</Link></>
						:
						el.node
					}

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
			<div onClick={handlePrevious} className={s.arr}>
				<Image className={s.arr} alt={'icon'} src={arr_l} />
			</div>
			<Swiper
				id='swiper'
				ref={sliderRef}
				spaceBetween={10}
				slidesPerView={perView}
				loop={infinite}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{slideItems}
			</Swiper>
			<div onClick={handleNext} className={s.arr}>
				<Image src={arr_r} alt={'arr-right'} />
			</div>
		</div>
	);
};

export default Slider;
