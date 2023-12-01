import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import data from '@/core/data/index';
import SlideItem from '@/components/SlideItem/SlideItem';
import Slider from '@/components/Slider/Slider';


function BankProducts() {
	const slides = useMemo(() => {
		return data.HomePage.iconsSlide.map((slide) => {
			return {
				link: slide.link,
				node: <SlideItem img={slide.img} name={slide.name} width={slide.w} />
			}
		})
	}, [])
	return (
		<Box mt='50px'>
			<Typography component='h2' textAlign='center' fontSize='40px' fontFamily='inherit'>
				Продукты банка
			</Typography>
			<Slider
				data={slides}
				infinite={false}
				responsive={
					{
						"640": 2,
						"768": 2,
						"1500": slides ? slides.length >= 6 ? 6 : slides.length : 0
					}
				}
			/>
		</Box>
	)
}

export default BankProducts