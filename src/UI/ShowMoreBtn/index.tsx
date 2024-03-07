import { Button } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
	onClick: () => void
}

function ShowMoreBtn({ onClick }: Props) {
	return (
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
	)
}

export default ShowMoreBtn