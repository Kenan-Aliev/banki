import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Contacts() {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 }, "& td": { padding: '30px 0' } }}
					>
						<TableCell component="th" scope="row">
							На рынке с 1993 года
						</TableCell>
						<TableCell align="left">лицензия № 2272ОГРН </TableCell>
						<TableCell align="left">ОГРН 1027739460737</TableCell>
						<TableCell align="left">информация на сайте ЦБ РФ</TableCell>
					</TableRow>

					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 }, "& td": { padding: '30px 0' } }}
					>
						<TableCell component="th" scope="row">
							Адрес
						</TableCell>
						<TableCell align="left">107078, г. Москва, ул. Маши Порываевой, д. 34</TableCell>
						<TableCell align="left"></TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>

					<TableRow
						sx={{ '&:last-child td, &:last-child th': { border: 0 }, "& td": { padding: '30px 0' } }}
					>
						<TableCell component="th" scope="row">
							Ссылки на соцсети
						</TableCell>
						<TableCell align="left">107078, г. Москва, ул. Маши Порываевой, д. 34</TableCell>
						<TableCell align="left"></TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}