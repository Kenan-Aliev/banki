'use client'

import React from 'react';
import { Box, Button, Typography, Modal, Grid, FormGroup, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { timeframe } from '@/core/data/filters';
import { getCreditsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectCreditTypes } from '@/core/store/credits/credits-selectors';

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
	filter: getCreditsI
	handleChangeFilter: (prop: string, value: any) => void
	banks: {
		text: string
		value: string | number
	}[]
	count: number
	summa: number
	handleChangeSumma: (prop: string, value: any) => void
	handleScrollToCredits: () => void
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
		top: '60%'
	}
};

function Filters(props: Props) {
	const { banks, cleanFilter, count, filter, handleChangeFilter,
		handleClose, handleScrollToCredits, open, handleChangeSumma, summa
	} = props

	const creditTypes = useAppSelector(selectCreditTypes)?.map((type) => {
		return {
			text: type.title,
			value: type.id
		}
	})

	const handleShow = () => {
		handleScrollToCredits()
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
							<TextField
								fullWidth
								label='Сумма'
								value={summa}
								onChange={(e) => handleChangeSumma('summa', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={timeframe}
								labelName='Срок'
								isAllExist={true}
								name='credit'
								prop='credit'
								onChange={handleChangeFilter}
								defaultValue={filter.credit ?? ''}
								value={filter.credit ?? ''}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={banks}
								multiple={true}
								defaultValue={filter.bank ?? []}
								value={filter.bank ?? []}
								isAllExist={false}
								name='bank'
								prop='bank'
								labelName='Банки'
								onChange={handleChangeFilter}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5} xl={5.8}>
							<CustomWhiteSelectTitle2
								items={creditTypes}
								isAllExist={true}
								name='loanType'
								prop='loanType'
								labelName='Тип кредита'
								onChange={handleChangeFilter}
								defaultValue={filter.loanType ?? ''}
								value={filter.loanType ?? ''}
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
											checked={filter.collateralFree ?? false}
											onChange={(e) => { handleChangeFilter('collateralFree', e.target.checked) }}
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
											checked={filter.noDocumentsRequired ?? false}
											onChange={(e) => { handleChangeFilter('noDocumentsRequired', e.target.checked) }}
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
											checked={filter.without_reference ?? false}
											onChange={(e) => { handleChangeFilter('without_reference', e.target.checked) }}
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

export default Filters