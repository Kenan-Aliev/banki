import * as React from 'react';
import {
  Theme,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableContainer,
} from '@mui/material';
import { BankT } from '@/models/Banks/banks';
import { addSpacesToNumber } from '@/core/libs/helpers/addSpacesToNumber';

const rowStyles: SxProps<Theme> = {
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& td': {
    padding: '30px',
    fontFamily: 'inherit',
  },
  '& p': {
    fontFamily: 'inherit',
  },
};

export default function FinanceRating({ bank }: { bank: BankT }) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow sx={rowStyles}>
            <TableCell sx={{ fontWeight: 600 }}>Активы нетто</TableCell>
            <TableCell align='left'>
              <Typography>{addSpacesToNumber(bank.assets)} тыс. сом</Typography>
              <Typography>{bank.fiancial_rating} место по Кыргызстану</Typography>
            </TableCell>
          </TableRow>

          <TableRow sx={rowStyles}>
            <TableCell sx={{ fontWeight: 600 }}>Чистая прибыль</TableCell>
            <TableCell align='left'>
              <Typography>{addSpacesToNumber(bank.netProfit ?? 0)} тыс. сом</Typography>
              <Typography>{bank.fiancial_rating} место по Кыргызстану</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
