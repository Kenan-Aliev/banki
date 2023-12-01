import { Box, Grid, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import financeRating from '@/assets/icons/bank_finance_rating.svg'
import peopleRating from '@/assets/icons/bank_people_rating.svg'
import phone from '@/assets/icons/bank_phone.svg'
import premiya from '@/assets/icons/bank_premiya.svg'
import wave from '@/assets/icons/bank_intro_wave.svg'

const gridStyles: SxProps<Theme> = {
	display: 'flex',
	border: '1px solid #E0EAFF',
	borderRadius: '14px',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '10px 0',
	gap: '15px',
	background: 'white',
	"& h3": {
		fontFamily: 'inherit',
	},
	"& p": {
		fontFamily: 'inherit',
	}
}

const titleStyles: SxProps<Theme> = {
	fontSize: '46px',
	fontFamily: 'inherit',
	"@media(max-width:640px)": {
		fontSize: '23px'
	}
}

const subtitleStyles: SxProps<Theme> = {
	fontFamily: 'inherit',
	fontSize: '18px',
	"@media(max-width:640px)": {
		fontSize: '14px'
	}
}

const imgBoxStyles: SxProps<Theme> = {
	position: 'absolute',
	height: '100%',
	right: '-13px',
	top: '0',
	zIndex: '-1',
	"& img": {
		height: '100%',
		borderRadius: '0 32px 32px 0'
	},
	"@media(max-width:1250px)": {
		display: 'none'
	}
}


function BankIntro() {
	return (
		<Box
			sx={{
				border: '1px solid #D9DBDF',
				borderRadius: '14px',
				padding: '50px',
				position: 'relative'
			}}
		>
			<Box
				sx={imgBoxStyles}
			>
				<Image src={wave} alt='Волна' />
			</Box>
			<Typography component={'h2'} sx={titleStyles}>
				Название банка
			</Typography>
			<Typography component={'p'} sx={subtitleStyles}>
				ПАО РОСБАНК (юр. название)
			</Typography>

			<Grid container justifyContent='space-between' mt='30px' gap='15px'>
				<Grid item
					sx={gridStyles}
					xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}
				>
					<Image src={financeRating} alt='Финансовый рейтинг' />
					<Stack>
						<Typography component='h3' fontSize='16px' fontWeight={600}>
							Финансовый рейтинг
						</Typography>
						<Typography component='p' fontSize='14px'>
							11 место по России
						</Typography>
					</Stack>
				</Grid>
				<Grid item
					sx={gridStyles}
					xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}
				>
					<Image src={peopleRating} alt='Народный рейтинг' />
					<Stack>
						<Typography component='h3' fontSize='16px' fontWeight={600}>
							Народный рейтинг
						</Typography>
						<Typography component='p' fontSize='14px'>
							22 место из 329 банков
						</Typography>
					</Stack>
				</Grid>
				<Grid item
					sx={gridStyles}
					xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}
				>
					<Image src={phone} alt='Телефон' />
					<Stack>
						<Typography component='h3' fontSize='16px' fontWeight={600}>
							Телефон
						</Typography>
						<Typography component='p' fontSize='14px'>
							8 800 234-44-34
						</Typography>
					</Stack>
				</Grid>
				<Grid item
					sx={gridStyles}
					xs={12} sm={5.5} md={5.5} lg={2.8} xl={2.8}
				>
					<Image src={premiya} alt='Премия' />
					<Stack>
						<Typography component='h3' fontSize='16px' fontWeight={600}>
							Премия “Банк года”
						</Typography>
						<Typography component='p' fontSize='14px'>
							Ипотечный кредит года
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}

export default BankIntro