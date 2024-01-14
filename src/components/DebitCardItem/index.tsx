'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { currencies } from '@/core/data/currency';
import { Grid, Box, Typography, SxProps, Theme } from '@mui/material';
import { CardItemT } from '@/models/Cards/Cards';
import Application from '@/components/Application/Application';


const rootBoxStyles: SxProps<Theme> = {
	width: '100%',
	borderRadius: '14px',
	border: '1px solid #d9dbdf',
	background: '#fff',
	padding: '25px 20px',
	"& h2,p": {
		fontFamily: 'inherit'
	}
}

const bankTitleStyles: SxProps<Theme> = {
	color: '#000',
	fontSize: '24px',
	fontFamily: 'inherit',
	fontWeight: 'bold',
	"@media(max-width:600px)": {
		fontSize: '18px',
	}
}



const infoItemTitleStyles: SxProps<Theme> = {
	color: '#4da7ff',
	fontWeight: 500
}

const infoItemTextStyles: SxProps<Theme> = {
	color: '#121212',
	fontWeight: 500,
	fontSize: '20px'
}

const countBtnStyles: SxProps<Theme> = {
	color: '#4da7ff',
	fontSize: '16px',
	fontWeight: 500,
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
	cursor: 'pointer'
}

const infoItemGridStyles: SxProps<Theme> = {
	"@media(max-width:600px)": {
		display: 'flex',
		justifyContent: 'space-between',
		m: '10px 0'
	}
}



interface DebitCardItemProps {
	item: CardItemT;
	openChildren?: (bankId: number) => void;
	child?: boolean;
	count?: number
}

const DebitCardItem = (props: DebitCardItemProps) => {
	const {
		item: { bank_title, issuing_bank, image, name, service_fee, currency, id, card_network },
		openChildren,
		child,
		count,
	} = props;

	const [applicationModal, setApplicationModal] = useState(false)
	const cur = currencies.find((c) => c.value.toLowerCase() == currency.toLowerCase())?.text

	const handleChangeApplicationForm = () => {
		setApplicationModal(!applicationModal)
	}
	return (
		<Box sx={rootBoxStyles}>
			<Application
				open={applicationModal}
				handleClose={handleChangeApplicationForm}
				productId={id}
				productType='debit-card' />
			<Grid container mb='10px'>
				<Grid item xs={5} sm={3} md={3} lg={2.5} xl={2.5}>
					<Image src={image} alt={'иконка карты'} width={200} height={100} />
				</Grid>
				<Grid item xs={5.5} sm={8} md={8} lg={3.5} xl={3.5} sx={{
					"@media(max-width:600px)": {
						ml: '15px'
					}
				}}>
					<Typography
						sx={bankTitleStyles}
						component='h2'
					>
						{bank_title}
					</Typography>
					<Typography>{name}</Typography>
				</Grid>
				<Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
					<Typography
						sx={infoItemTitleStyles}
						mb='10px'>
						Платежная система
					</Typography>
					<Typography sx={infoItemTextStyles}>
						{card_network.name}
					</Typography>
				</Grid>
				<Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
					<Typography
						sx={infoItemTitleStyles}
						mb='10px'
					>
						Валюта
					</Typography>
					<Typography sx={infoItemTextStyles}>
						{cur}
					</Typography>
				</Grid>
				<Grid item xs={12} lg={2} xl={2} sx={infoItemGridStyles}>
					<Typography
						sx={infoItemTitleStyles}
						mb='10px'
					>
						Обслуживание
					</Typography>
					<Typography sx={infoItemTextStyles}>
						{service_fee.free ? 'Бесплатное' : `${service_fee.cost} ${cur}`}
					</Typography>
				</Grid>
			</Grid>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					"@media(max-width:600px)": {
						flexDirection: 'column-reverse',
					}
				}}
			>
				{count && count > 0
					? (
						<Box
							sx={{
								"@media(max-width:600px)": {
									m: '20px auto 0'
								}
							}}
						>
							<Typography sx={countBtnStyles}
								onClick={(e) => openChildren(issuing_bank)}
							>
								Ещё {count} карт
								{child ? <ExpandLessIcon /> : <ExpandMoreIcon />}
							</Typography>
						</Box>
					)
					: null}
				<Box
					sx={{
						marginLeft: 'auto',
						width: '20%',
						"@media(max-width:600px)": {
							width: '100%',
							marginLeft: 0
						}
					}}>
					<BlueBtn text={'Оформить карту'} fSize={20} onClick={handleChangeApplicationForm} />
				</Box>
			</Box>
		</Box >
	);
};

export default DebitCardItem;
