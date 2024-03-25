import * as React from 'react';
import { Theme, SxProps, Table, TableBody, TableCell, TableRow, TableContainer } from '@mui/material';
import { BankT } from '@/models/Banks/banks';

const rowStyles: SxProps<Theme> = {
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& td': {
    padding: '30px',
    fontFamily: 'inherit',
  },
};

export default function Contacts({ bank }: { bank: BankT }) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow sx={rowStyles}>
            <TableCell>На рынке с {bank.foundationYear} года</TableCell>
            <TableCell align='left'>лицензия № {bank.licenseNumber}</TableCell>
            <TableCell align='left'>
              <a href='https://www.nbkr.kg/index1.jsp?item=69&lang=RUS' rel='noreferrer' target='_blank'>
                информация на сайте ЦБ РФ
              </a>
            </TableCell>
          </TableRow>

          <TableRow sx={rowStyles}>
            <TableCell sx={{ fontWeight: 600 }}>Адрес</TableCell>
            <TableCell align='left'>{bank.contacts[0]?.address}</TableCell>
            <TableCell align='left'></TableCell>
          </TableRow>

          <TableRow sx={rowStyles}>
            <TableCell sx={{ fontWeight: 600 }}>Ссылки на соцсети</TableCell>
            <TableCell align='left'>
              <a href={bank.links} rel='noreferrer' target='_blank'>
                {bank.links}
              </a>
            </TableCell>
            <TableCell align='left'></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
