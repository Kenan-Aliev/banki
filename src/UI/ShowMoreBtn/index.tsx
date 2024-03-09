import { Box, Button } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
	onClick: () => void
}

function ShowMoreBtn({ onClick }: Props) {
	return (
		<Box width='100%' sx={{
			display: 'flex',
			justifyContent: 'center',
			padding: '30px 10px',
			borderRadius: '14px',
			border: '1px solid #d9dbdf',
			background: '#fff'
		}}>
			<Button
				endIcon={<KeyboardArrowDownIcon sx={{ color: 'black' }} />}
				onClick={onClick}
				sx={{
					color: 'black',
					border: '1px solid gainsboro',
					borderRadius: '10px',
					'@media(max-width:600px)': {
						width: '100%'
					}
				}}
			>
				Показать еще
			</Button>
		</Box>

	)
}

export default ShowMoreBtn