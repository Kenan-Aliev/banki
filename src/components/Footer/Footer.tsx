'use client'

import React from 'react'
import PageWrapper from '@/containers/PageWrapper'
import { Box, Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import data from '@/core/data'
import ProductItems from './ProductItems/ProductItems'
import FooterLinks from './FooterLinks/FooterLinks'

function Footer() {
	const { Footer } = data

	const half = Math.ceil(Object.keys(Footer).length / 2)
	const end = Object.keys(Footer).length
	const keys = Object.keys(Footer)
	return (
		<>
			<PageWrapper>
				<Box component='footer'>
					<Typography component='h1'
						sx={{
							color: '#000000',
							fontSize: '46px',
							fontFamily: 'inherit'
						}}
					>
						Все продукты vsebanki.kg
					</Typography>

					<Grid container justifyContent='space-between' alignItems='center' mt='30px' rowGap='20px'>
						{keys.slice(0, half).map((productName, index) => {
							const product = Footer[productName]
							return (
								<Grid item key={index} xs={5.8} sm={5.8} md={2.5} lg={2.5} xl={2.5}>
									<Typography
										component='h3'
										sx={{
											fontSize: '18px',
											mb: '10px'
										}}>
										{productName}
									</Typography>
									<ProductItems items={product} />
								</Grid>
							)
						})}
					</Grid>

					<Accordion
						elevation={0}
						sx={{
							background: 'inherit',
							border: 'none',
							mt: '20px',
							"::before": {
								content: 'none'
							}
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ color: '#4DA7FF' }} />}
							sx={{
								width: 'fit-content',
								color: '#4DA7FF',
								padding: 0
							}}
						>
							<Typography>Подробнее</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid container justifyContent='space-between' alignItems='center' rowGap='20px' mt='30px'>
								{keys.slice(half, end).map((productName, index) => {
									const product = Footer[productName]
									return (
										<Grid item key={index} xs={5.8} sm={5.8} md={2.5} lg={2.5} xl={2.5}>
											<Typography
												component='h3'
												sx={{
													fontSize: '18px',
													mb: '10px'
												}}>
												{productName}
											</Typography>
											<ProductItems items={product} />
										</Grid>
									)
								})}
							</Grid>
						</AccordionDetails>
					</Accordion>
				</Box>
			</PageWrapper>
			<FooterLinks />
		</>

	)
}

export default Footer