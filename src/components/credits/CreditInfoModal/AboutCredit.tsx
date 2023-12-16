import React from 'react'
import { TableBody, TableCell, TableRow, SxProps, Theme } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	"& td": {
		padding: '30px',
		fontFamily: 'inherit'
	}
}

interface Props {
	summa: {
		min: number
		max: number
	}
	currency: string
	term: {
		min: number
		max: number
	}
	interest_rate?: number
	description: string
}

const AboutCredit = (props: Props) => {
	const { summa, term, interest_rate, currency, description } = props
	return <TableBody>
		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Сумма
			</TableCell>
			<TableCell align="left">{summa?.min} - {summa?.max} {currency}</TableCell>
		</TableRow>

		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Срок
			</TableCell>
			<TableCell align="left">{term?.min} - {term?.max} мес.</TableCell>
		</TableRow>

		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Ставка
			</TableCell>
			<TableCell align="left">10</TableCell>
		</TableRow>

		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Условия
			</TableCell>
			<TableCell align="left">{description ? description : '-'}</TableCell>
		</TableRow>
	</TableBody>
}

export default AboutCredit