import * as React from 'react';
import { Theme, SxProps, Table, TableBody, TableCell, TableRow, Typography, TableContainer } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	'&:last-child td, &:last-child th': {
		border: 0
	},
	"& td": {
		padding: '30px',
		fontFamily: 'inherit',
	},
	"& p": {
		fontFamily: 'inherit',
	}
}

export default function FinanceRating() {
	return (
		<TableContainer>
			<Table>
				<TableBody>
					<TableRow
						sx={rowStyles}
					>
						<TableCell>
							Активы нетто
						</TableCell>
						<TableCell align="left">
							<Typography>1 572 439 546 тыс. ₽</Typography>
							<Typography>11 место по России, 9 место в регионе </Typography>
						</TableCell>
					</TableRow>

					<TableRow
						sx={rowStyles}
					>
						<TableCell>
							Активы нетто
						</TableCell>
						<TableCell align="left">
							<Typography>1 572 439 546 тыс. ₽</Typography>
							<Typography>11 место по России, 9 место в регионе </Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>

	);
}