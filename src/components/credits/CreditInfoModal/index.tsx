'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal, Theme, SxProps, Table, TableBody, TableCell, TableRow, TableContainer, Grid } from '@mui/material';

import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import AboutCredit from './AboutCredit';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getBankDetails } from '@/core/store/banks/banks-actions';
import { getCreditDetails } from '@/core/store/credits/credits-actions';
import { selectCreditDetail, selectGetCreditDetailsStatus } from '@/core/store/credits/credits-selectors';
import { selectBankDetails } from '@/core/store/banks/banks-selectors';
import Loading from '@/app/loading';
import CreditRequirements from './CreditRequirements';
import CreditDocuments from './CreditDocuments';
import AboutBank from './AboutBank';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const style: SxProps<Theme> = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: '#F6F6F6',
	width: '50%',
	border: '2px solid #4DA7FF',
	boxShadow: 24,
	borderRadius: '14px',
	p: 4,
	"@media(max-width:900px)": {
		width: "85%",
		p: '5px',
	}
};


interface Props {
	open: boolean
	handleClose: () => void
	bank: {
		id: number
		name: string
	}
	loan: {
		id: number
		name: string
	}
}


const mockFilterItems = [
	{ name: 'О кредите', active: true },
	{ name: 'Требования', active: false },
	{ name: 'Документы', active: false },
	{ name: 'О банке', active: false },
];


function CreditInfoModal(props: Props) {
	const dispatch = useAppDispatch()
	const { handleClose, open, bank, loan } = props
	const [currentChoise, setCurrentChoise] = useState(mockFilterItems[0].name);
	const creditDetails = useAppSelector(selectCreditDetail)
	const bankDetails = useAppSelector(selectBankDetails)
	const creditDetailsStatus = useAppSelector(selectGetCreditDetailsStatus)


	const items = useMemo(() => {
		switch (currentChoise) {
			case 'О кредите':
				return <AboutCredit
					currency={creditDetails.currency}
					summa={creditDetails.loan_amount}
					term={creditDetails.loan_term}
					description={creditDetails.description}
				/>
			case "Требования":
				return <CreditRequirements
					description={creditDetails.description}
					security={creditDetails.security} />
			case "Документы":
				return <CreditDocuments pakege={creditDetails.pakege} />
			case "О банке":
				return <AboutBank bankName={bankDetails.name} contacts={bankDetails.contacts[0]} />
			default: return null
		}
	}, [currentChoise, creditDetails, bankDetails])

	useEffect(() => {
		dispatch(getBankDetails(bank.id))
		dispatch(getCreditDetails(loan.id))
	}, [])

	return (
		<Modal
			open={open}
			onClose={handleClose}
		>
			<Box sx={style}>
				<Typography component='h2'
					sx={{
						fontSize: '30px',
						fontFamily: 'inherit',
						textAlign: 'center',
						"@media(max-width:600px)": {
							fontSize: '20px'
						}
					}}
				>
					{bank.name}
				</Typography>
				<Typography component='h4'
					sx={{
						fontSize: '16px',
						fontFamily: 'inherit',
						textAlign: 'center',
						"@media(max-width:600px)": {
							fontSize: '14px'
						}
					}}
				>
					{loan.name}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '8px',
						marginBottom: '2rem',
						mt: '20px'
					}}
				>
					<ChoiseItemsMap
						currentChoise={currentChoise}
						setActive={setCurrentChoise}
						choiseItems={mockFilterItems}
					/>
				</Box>

				<TableContainer>
					<Table>
						{creditDetailsStatus === 'loading' ? <Loading /> : items}
					</Table>
				</TableContainer>

				<Grid container mt='30px'>
					<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
						<BlueBtn
							text='Онлайн заявка'
						/>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
}

export default CreditInfoModal



