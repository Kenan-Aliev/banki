'use client'

import React, { } from 'react';
import { Box, Typography, Modal, Grid, Stack, FormGroup, Checkbox, FormControlLabel, TextField, InputAdornment } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import img from '@/assets/icons/application_form_image.svg';
import wave from '@/assets/icons/application_form_wave.svg'
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { sendApplication } from '@/core/store/users/users-actions';
import InputMask from 'react-input-mask';
import { usePathname } from 'next/navigation';
import { sendApplicationData } from '@/models/Services';
import { models } from '@/core/data/applicationModels';
import { selectSendApplicationStatus } from '@/core/store/users/users-selectors';
import { RequestStatus } from '@/models/Services';




interface Props {
	open: boolean
	handleClose: () => void
	onSuccessSendApplication: () => void
	modelId?: number
	bank_name?: string
	product_name?: string
}

const waveBoxStyle = {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: -1,
	"@media(max-width:1200px)": {
		display: "none"
	},
	"@media(min-width:1201px) and (max-width:1536px)": {
		"& img": {
			width: '300px',
			height: '400px'
		}
	}
}

const imgBoxStyle = {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: -1,
	"@media(max-width:1200px)": {
		display: "none"
	},
	"@media(min-width:1201px) and (max-width:1536px)": {
		"& img": {
			width: '400px',
			height: '400px'
		}
	}
}

const formStyles = {
	display: 'flex',
	flexDirection: 'column',
	rowGap: '15px',
	"& input": {
		border: '1px solid #E0EAFF',
		background: '#D9E7FA66',
		display: 'block',
		"&::placeholder": {
			color: '#4DA7FF',
			opacity: 1
		}
	}
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

function Application({ handleClose, open, modelId, onSuccessSendApplication, bank_name, product_name }: Props) {
	const dispatch = useAppDispatch()
	const reqStatus = useAppSelector(selectSendApplicationStatus)

	const pathname = usePathname().split('/').slice(1)
	const operators: string[] = ["70", "77", "75", "55", "50", "99", "22"];
	const operatorRegex = operators.join('|');
	const phoneRegex = new RegExp(`^(?:${operatorRegex})\\d{7}$`);

	const validationSchema = Yup.object().shape({
		phone: Yup.string().required('Введите номер телефона')
			.matches(phoneRegex, 'Некорректный номер телефона'),
		name: Yup.string()
			.required('Введите ФИО')
	});

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const formattedValue = value.replace(/\D/g, ''); // Очищаем от всего, кроме цифр


		handleChange({
			target: {
				name: 'phone',
				value: formattedValue,
			},
		} as React.ChangeEvent<HTMLInputElement>);
	};

	const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
		initialValues: {
			phone: '',
			name: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const req: sendApplicationData = {
				...values,
				phone: '996' + values.phone,
				parent_model: models[pathname[0]].parentModel,
				model: models[pathname[0]].childModel,
				product_name,
				bank_name,
				additional_of_applicant: [
					{
						key: 'string',
						value: 'string'
					}
				]
			}
			if (modelId) {
				req.model_id = modelId
			}
			dispatch(sendApplication({ cb: onSuccessSendApplication, data: req }))
			resetForm();
		}
	});

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
					<Stack
						sx={{
							position: 'relatvie',
							"& p": {
								fontFamily: 'inherit'
							}
						}}
					>
						<Box sx={waveBoxStyle}>
							<Image src={wave} width={350} height={500} alt='волна' />
						</Box>

						<Box sx={imgBoxStyle}>
							<Image src={img} width={500} height={500} alt='фотка' />
						</Box>

						<Typography component='p'
							sx={{
								color: '#4DA7FF',
								fontSize: '30px',
								fontWeight: 600
							}}
						>
							Заполните форму
						</Typography>
						<Typography component='p'
							sx={{
								width: '60%'
							}}
						>
							Вам позвонит наш эксперт в ближайщие 15 минту и обсудит ваш запрос.
						</Typography>
						<Grid
							component='form'
							container
							mt='20px'
							onSubmit={handleSubmit}
							sx={formStyles}
						>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<InputMask
									mask="(999)-99-99-99"
									maskChar="_"
									onChange={(e) => handlePhoneChange(e)}
									onBlur={handleBlur}
									value={values.phone}
								>
									{() => <TextField
										fullWidth
										variant='outlined'
										name='phone'
										error={touched.phone && Boolean(errors.phone)}
										helperText={touched.phone && errors.phone}
										placeholder='Номер телефона'
										InputProps={{
											startAdornment: <InputAdornment
												position="start"
											>
												+996
											</InputAdornment>
										}}
										sx={{
											"& p": {
												color: 'black',
											},
											"& input": {
												pl: '10px'
											}
										}}
									/>}
								</InputMask>

							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<TextField
									fullWidth
									variant='outlined'
									placeholder='ФИО'
									name='name'
									onChange={handleChange}
									value={values.name}
									onBlur={handleBlur}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
								<BlueBtn
									text='Отправить'
									type='submit'
									onClick={handleSubmit}
									disabled={reqStatus === 'loading'}
								/>
							</Grid>
							<FormGroup>
								<Grid container mt='20px'
									sx={{
										"& span": {
											fontFamily: 'inherit',
											fontSize: '14px'
										},
										"& .MuiGrid-item ": {
											display: 'flex'
										}
									}}
								>
									<Grid item xs={12} sm={12} md={7} lg={12} xl={12}>
										<FormControlLabel
											control={<Checkbox checkedIcon={<TripOrigin />} icon={<RadioButtonUnchecked color='primary' />} checked />}
											label="Предоставляю своё согласие на обработку персональных данных"
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={7} lg={12} xl={12}>
										<FormControlLabel
											control={<Checkbox checkedIcon={<TripOrigin />} icon={<RadioButtonUnchecked color='primary' />} checked />}
											label="Предоставляю своё согласие на получение рекламы и информационных сообщений"
										/>
									</Grid>
								</Grid>
							</FormGroup>
						</Grid>
					</Stack>
				</Box>
			</Modal>
		</div >
	);
}

export default Application