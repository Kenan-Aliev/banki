import React from 'react'
import { TableBody, TableCell, TableRow, SxProps, Theme } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	"& td": {
		padding: '30px',
		fontFamily: 'inherit'
	}
}

interface Props {
	security: string
	description: string
}

const CreditRequirements = ({ description, security }: Props) => {
	return <TableBody>
		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Условия
			</TableCell>
			<TableCell align="left">{description ? description : '-'}</TableCell>
		</TableRow>

		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Обеспечение
			</TableCell>
			<TableCell align="left">{security ? security : '-'}</TableCell>
		</TableRow>
	</TableBody>
}

export default CreditRequirements