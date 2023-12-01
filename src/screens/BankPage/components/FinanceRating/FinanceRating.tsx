import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function FinanceRating() {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					<TableRow
						sx={{
							'&:last-child td, &:last-child th': { border: 0 },
							"& td": {
								padding: '30px 0',
							}
						}}
					>
						<TableCell component="th" scope="row">
							Активы нетто
						</TableCell>
						<TableCell align="left">
							<Typography>1 572 439 546 тыс. ₽</Typography>
							<Typography>11 место по России, 9 место в регионе </Typography>
						</TableCell>
					</TableRow>

					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 }, "& td": { padding: '30px 0' } }}
					>
						<TableCell component="th" scope="row">
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