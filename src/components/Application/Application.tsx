import React, { } from 'react';
import { Box, Button, Typography, Modal, Grid, Stack, FormGroup, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import img from '@/assets/icons/application_form_image.svg';
import wave from '@/assets/icons/application_form_wave.svg'
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';




interface Props {
	open: boolean
	handleClose: () => void
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

function Application({ handleClose, open }: Props) {

	const handleSubmit = (e: any) => {
		e.preventDefault()
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
								<TextField
									fullWidth
									variant='outlined'
									placeholder='Номер телефона'
								/>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<TextField
									fullWidth
									variant='outlined'
									placeholder='ФИО'
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
								<BlueBtn
									text='Отправить'
									type='submit'

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
											control={<Checkbox checkedIcon={<TripOrigin />} icon={<RadioButtonUnchecked color='primary' />} />}
											label="Предоставляю своё согласие на обработку персональных данных"
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={7} lg={12} xl={12}>
										<FormControlLabel
											control={<Checkbox checkedIcon={<TripOrigin />} icon={<RadioButtonUnchecked color='primary' />} />}
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