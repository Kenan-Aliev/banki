'use client'

import React, { } from 'react';
import { Box, Typography, Modal, Grid, Stack, FormGroup, Checkbox, FormControlLabel, TextField, InputAdornment } from '@mui/material'
import { TripOrigin, RadioButtonUnchecked } from '@mui/icons-material';
import img from '@/assets/icons/application_form_image.svg';
import wave from '@/assets/icons/application_form_wave.svg'
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { sendApplication } from '@/core/store/users/users-actions';
import InputMask from 'react-input-mask';
import { usePathname } from 'next/navigation';
import { sendApplicationData } from '@/models/Services';
import { models } from '@/core/data/applicationModels';
import { selectSendApplicationStatus } from '@/core/store/users/users-selectors';
import { RequestStatus } from '@/models/Services';




interface Props {
	open: boolean
	handleClose: () => void
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: '#F6F6F6',
	width: '40%',
	border: '2px solid #4DA7FF',
	boxShadow: 24,
	borderRadius: '14px',
	p: 4,
	"@media(max-width:900px)": {
		width: "85%",
	}
};

function SendApplicationSuccesModal({ handleClose, open }: Props) {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				sx={{
					"@media(max-width:900px)": {
						overflow: 'scroll'
					}
				}}
			>
				<Box sx={style}>
					<Stack gap='20px'>
						<Typography sx={{
							fontSize: '22px',
							fontWeight: 500,
							textAlign: 'center',
							"@media(max-width:600px)": {
								fontSize: '18px'
							}
						}}>
							Спасибо, что обратились в vsebanki.kg!
						</Typography>
						<Typography sx={{
							fontSize: '16px',
							textAlign: 'center',
							"@media(max-width:600px)": {
								fontSize: '14px'
							}
						}}>
							Наши специалисты скоро свяжутся с вами в ближайшее время
						</Typography>
					</Stack>


				</Box>
			</Modal>
		</div >
	);
}

export default SendApplicationSuccesModal