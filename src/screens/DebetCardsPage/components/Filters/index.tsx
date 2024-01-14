'use client'

import React from 'react';
import { Box, Button, Typography, Modal, Grid, FormGroup, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { debitCardPaySystems } from '@/core/data/filters';
import { getCardsI } from '@/models/Services';
import { currencies } from '@/core/data/currency';

const cleanFilterBtnStyles = {
	height: "60px",
	borderRadius: "7px",
	background: "white",
	color: "black",
	fontWeight: 500,
	boxShadow: 'none',
	border: '1px solid #B4B4B4',
	"&:hover": {
		background: 'white',
		boxShadow: 'none',
	}
}

const checkboxGridStyles = {
	"& span": {
		fontFamily: 'inherit',
		fontSize: '14px'
	},
	"& .MuiGrid-item ": {
		display: 'flex'
	}
}


interface Props {
	open: boolean
	handleClose: () => void
	filter: getCardsI
	handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
	banks: {
		text: string
		value: string | number
	}[]
	count: number
	handleScrollToCards: () => void
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: '#F6F6F6',
	width: '50%',
	border: '2px solid #4DA7FF',
	boxShadow: 24,
	borderRadius: '14px',
	p: 4,
	"@media(max-width:900px)": {
		width: "85%",
		top: '60%'
	}
};

function Filters(props: Props) {
	const {
		count,
		filter,
		handleChangeFilter,
		handleClose,
		handleScrollToCards,
		open,
		banks
	} = props

	const handleShow = () => {
		handleScrollToCards()
		handleClose()
	}

	function valuetext(value: number) {
		return `${value}°C`;
	}

	const cur = currencies.filter((cur) => cur.value !== 'rub')

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				sx={{
					"@media(max-width:900px)": {
						overflow: 'scroll'
					}
				}}
			>
				<Box sx={style}>
					<Typography variant="h6" component="h2"
						fontSize='20px'
					>
						Все параметры
					</Typography>
					<Grid container gap='20px' justifyContent='space-between' width='100%' mt='20px'
					>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={banks}
								multiple={true}
								defaultValue={filter.issuing_bank}
								value={filter.issuing_bank ?? []}
								isAllExist={false}
								name='issuing_bank'
								prop='issuing_bank'
								labelName='Банки'
								onChange={handleChangeFilter}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={debitCardPaySystems}
								isAllExist={true}
								name='card_network'
								prop='card_network'
								labelName='Платежная система'
								onChange={handleChangeFilter}
								defaultValue={filter.card_network ?? ''}
								value={filter.card_network ?? ''}
							/>
						</Grid>
					</Grid>

					<FormGroup>
						<Grid container mt='20px'
							sx={checkboxGridStyles}
						>
							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={filter.commission ?? false}
											onChange={(e) => { handleChangeFilter('commission', e.target.checked) }}
										/>
									}
									label="Бесплатное снятие"
								/>
							</Grid>


							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={false}
											onChange={(e) => { }}
										/>
									}
									label="Бесплатное обслуживание"
								/>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={filter.cashback ?? false}
											onChange={(e) => { handleChangeFilter('cashback', e.target.checked) }}
										/>
									}
									label="Кэшбек"
								/>
							</Grid>
						</Grid>
					</FormGroup>

					<Grid container gap='20px' justifyContent={'space-between'} mt='20px'>
						<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
							<BlueBtn
								text='Показать'
								count={count}
								onClick={handleShow}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={3} lg={3} xl={3.5}>
							<Button
								variant='contained'
								fullWidth
								sx={cleanFilterBtnStyles}
								onClick={() => { }}
							>
								Очистить фильтр
							</Button>
						</Grid>

					</Grid>
				</Box>
			</Modal>
		</div >
	);
}

export default Filters