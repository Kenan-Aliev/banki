'use client'

import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Grid, Stack, FormGroup, Checkbox, FormControlLabel } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { timeframe, depositTypes } from '@/core/data/filters';
import { getDepositsI } from '@/models/Services';

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
	filter: getDepositsI
	handleChangeFilter: (prop: string, value: any) => void
	banks: {
		text: string
		value: string | number
	}[]
	count: number
	handleScrollToDeposits: () => void
	cleanFilter: () => void
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
	}
};

function FilterModal({ handleClose, open, filter, handleChangeFilter, banks,
	count, handleScrollToDeposits, cleanFilter }: Props) {

	const [activeBtn, setActiveBtn] = useState('')

	const handleChangeActiveBtn = (value: string) => {
		setActiveBtn(value)
	}

	const handleShow = () => {
		handleScrollToDeposits()
		handleClose()
	}

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
								items={timeframe}
								labelName='Срок'
								isAllExist={true}
								name='timeframe'
								prop='timeframe'
								onChange={handleChangeFilter}
								defaultValue={filter.timeframe}
								value={filter.timeframe}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={banks}
								multiple={true}
								defaultValue={filter.bank}
								value={filter.bank}
								isAllExist={false}
								name='bank'
								prop='bank'
								labelName='Банки'
								onChange={handleChangeFilter}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={depositTypes}
								defaultValue={filter.type}
								isAllExist={true}
								name='type'
								prop='type'
								labelName='Тип вклада'
								value={filter.type}
								onChange={handleChangeFilter}
							/>
						</Grid>
					</Grid>

					{/* <Stack
						direction='row'
						mt='20px'
						spacing={2}
					>
						<Button
							variant='outlined'
							onClick={() => handleChangeActiveBtn('Все банки')}
							sx={{
								background: activeBtn === 'Все банки' ? "#CCE6FF" : 'white',
								border: `1px solid ${activeBtn === 'Все банки' ? "#4DA7FF" : '#E0EAFF'}`,
								color: 'black'
							}}
						>
							Все банки
						</Button>
						<Button
							variant='outlined'
							onClick={() => handleChangeActiveBtn('Топ 10')}
							sx={{
								background: activeBtn === 'Топ 10' ? "#CCE6FF" : 'white',
								border: `1px solid ${activeBtn === 'Топ 10' ? "#4DA7FF" : '#E0EAFF'}`,
								color: 'black'
							}}
						>
							Топ 10
						</Button>
					</Stack> */}
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
											checked={filter.withdrawal}
											onChange={e => handleChangeFilter('withdrawal', e.target.checked)}
										/>
									}
									label="Со снятием"
								/>
							</Grid>


							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={filter.adding}
											onChange={e => handleChangeFilter('adding', e.target.checked)}
										/>
									}
									label="С пополнением"
								/>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={filter.monthly_payments}
											onChange={e => handleChangeFilter('monthly_payments', e.target.checked)}
										/>
									}
									label="С выплатой процентов ежемесячно" />
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={filter.capitalisation}
											onChange={e => handleChangeFilter('capitalisation', e.target.checked)}
										/>
									}
									label="С капитализацией" />
								<Image src={dang_i} alt='иконка опасности' />
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
								onClick={cleanFilter}
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

export default FilterModal