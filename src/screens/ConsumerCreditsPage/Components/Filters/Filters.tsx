'use client'

import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Grid, Stack, FormGroup, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { timeframe, depositTypes } from '@/core/data/filters';
import { getDepositsI } from '@/models/Services';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';

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
	// filter: getDepositsI
	// handleChangeFilter: (prop: string, value: any) => void
	// banks: {
	// 	text: string
	// 	value: string | number
	// }[]
	// count: number
	// handleScrollToDeposits: () => void
	// cleanFilter: () => void
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

function Filters(props: Props) {

	const [activeBtn, setActiveBtn] = useState('')

	const { handleClose, open } = props

	const handleChangeActiveBtn = (value: string) => {
		setActiveBtn(value)
	}

	// const handleShow = () => {
	// 	handleScrollToDeposits()
	// 	handleClose()
	// }

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
							<TextField
								fullWidth
								label='Сумма'
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={timeframe}
								labelName='Срок'
								isAllExist={true}
								name='term_range'
								prop='term_range'
								onChange={() => { }}
								defaultValue={0}
								value={0}
							// onChange={handleChangeFilter}
							// defaultValue={filter.term_range}
							// value={filter.term_range}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={[]}
								multiple={true}
								defaultValue={0}
								value={0}
								isAllExist={false}
								name='bank_id'
								prop='bank_id'
								labelName='Банки'
								onChange={() => { }}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={depositTypes}
								isAllExist={true}
								name='deposit_type'
								prop='deposit_type'
								labelName='Тип кредита'
								onChange={() => { }}
								defaultValue={0}
								value={0}
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
											checked={false}
											onChange={() => { }}
										/>
									}
									label="Без залога"
								/>
							</Grid>


							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={false}
											onChange={() => { }}
										/>
									}
									label="Без справок о доходах"
								/>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={5.8} xl={5.8}>
								<FormControlLabel
									control={
										<Checkbox
											checkedIcon={<TripOrigin />}
											icon={<RadioButtonUnchecked color='primary' />}
											checked={false}
											onChange={() => { }}
										/>
									}
									label="Без поручительства" />
							</Grid>
						</Grid>
					</FormGroup>

					<Grid container gap='20px' justifyContent={'space-between'} mt='20px'>
						<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
							<BlueBtn
								text='Показать'
							// count={count}
							// onClick={handleShow}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={3} lg={3} xl={3.5}>
							<Button
								variant='contained'
								fullWidth
								sx={cleanFilterBtnStyles}
							// onClick={cleanFilter}
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