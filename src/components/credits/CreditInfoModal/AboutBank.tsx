import React from 'react'
import { TableBody, TableCell, TableRow, SxProps, Theme } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	"& td": {
		padding: '30px',
		fontFamily: 'inherit'
	}
}

interface Props {
	bankName: string
	contacts: {
		phones: string
		address: string
	}
}

const AboutBank = ({ bankName, contacts }: Props) => {
	return <TableBody>
		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Название
			</TableCell>
			<TableCell align="left">{bankName}</TableCell>
		</TableRow>

		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Адрес
			</TableCell>
			<TableCell align="left">{contacts?.address ? contacts.address : '-'}</TableCell>
		</TableRow>


		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Телефон
			</TableCell>
			<TableCell align="left">{contacts?.phones ? contacts.phones : '-'}</TableCell>
		</TableRow>

	</TableBody>
}

export default AboutBank