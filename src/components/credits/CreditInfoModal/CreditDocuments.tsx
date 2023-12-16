import React from 'react'
import { TableBody, TableCell, TableRow, SxProps, Theme } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	"& td": {
		padding: '30px',
		fontFamily: 'inherit'
	}
}

interface Props {
	pakege: string
}

const CreditDocuments = ({ pakege }: Props) => {
	return <TableBody>
		<TableRow
			sx={rowStyles}
		>
			<TableCell>
				Пакет документов
			</TableCell>
			<TableCell
				align="left"
				sx={{
					"@media(max-width:600px)": {
						fontSize: '12px'
					}
				}}>
				{pakege ? pakege : '-'}
			</TableCell>
		</TableRow>

	</TableBody>
}

export default CreditDocuments