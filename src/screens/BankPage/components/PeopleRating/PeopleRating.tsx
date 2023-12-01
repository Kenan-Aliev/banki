import BlueBtn from '@/UI/BlueBtn/BlueBtn'
import { Box, Button, Grid, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'

const boxStyles: SxProps<Theme> = {
	"& p": {
		fontSize: '16px',
		fontFamily: 'inherit',
		color: '#424242'
	},
	"& h3": {
		fontSize: '24px',
		fontWeight: 600,
		fontFamily: 'inherit',
		color: '#424242'
	}
}

function PeopleRating() {
	return (
		<Box
			sx={{
				border: '1px solid #CCE6FF',
				borderRadius: '7px',
				padding: '16px 24px 16px 24px',
				background: '#FFFFFF'
			}}
		>
			<Typography sx={{
				fontFamily: 'inherit',
				fontSize: '24px',
				paddingBottom: '10px',
				borderBottom: '1px solid #E0EAFF'
			}}
				component='h3'
			>
				22 место
			</Typography>

			<Stack direction='row' justifyContent='space-between' mt='20px' gap='20px' flexWrap={'wrap'}>
				<Box sx={boxStyles}>
					<Typography component='p'
					>
						Средняя оценка
					</Typography>

					<Typography component='h3'
					>
						1,81740
					</Typography>
				</Box>

				<Box sx={boxStyles}>
					<Typography component='p'
					>
						Решено проблем
					</Typography>

					<Typography component='h3'
					>
						242
					</Typography>
				</Box>

				<Box sx={boxStyles}>
					<Typography component='p'
					>
						ОГРН 1027739460737
					</Typography>

					<Typography component='h3'
					>
						1492
					</Typography>
				</Box>

				<Box sx={boxStyles}>
					<Typography component='p'
					>
						Всего отзывов
					</Typography>

					<Typography component='h3'
					>
						1495
					</Typography>
				</Box>
			</Stack>

			<Stack direction='row' gap='20px' mt='20px'>
				<Box sx={{
					width: '15%',
					"@media(max-width:640px)": {
						width: "100%"
					}

				}}>
					<BlueBtn text='Написать отзыв' />
				</Box>
				<Button variant='outlined' sx={{
					border: '1px solid white',
					background: 'white',
					color: 'black'
				}}>
					Читать отзывы
				</Button>
			</Stack>
		</Box>
	)
}

export default PeopleRating