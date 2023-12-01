import * as React from 'react';
import { Theme, SxProps, Table, TableBody, TableCell, TableRow, TableContainer } from '@mui/material';

const rowStyles: SxProps<Theme> = {
	'&:last-child td, &:last-child th': {
		border: 0
	},
	"& td": {
		padding: '30px',
		fontFamily: 'inherit'
	}
}


export default function Contacts() {
	return (
		<TableContainer>
			<Table>
				<TableBody>
					<TableRow
						sx={rowStyles}
					>
						<TableCell>
							На рынке с 1993 года
						</TableCell>
						<TableCell align="left">лицензия № 2272ОГРН </TableCell>
						<TableCell align="left">ОГРН 1027739460737</TableCell>
						<TableCell align="left">информация на сайте ЦБ РФ</TableCell>
					</TableRow>

					<TableRow
						sx={rowStyles}
					>
						<TableCell>
							Адрес
						</TableCell>
						<TableCell align="left">107078, г. Москва, ул. Маши Порываевой, д. 34</TableCell>
						<TableCell align="left"></TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>

					<TableRow
						sx={rowStyles}
					>
						<TableCell>
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