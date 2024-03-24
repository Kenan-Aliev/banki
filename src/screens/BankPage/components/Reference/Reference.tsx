import React from 'react'
import {
	Stack, SxProps, Theme, Typography,
	Accordion, AccordionSummary, AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const stackStyles: SxProps<Theme> = {
	border: '1px solid #CCE6FF',
	borderRadius: '7px',
	background: 'white',
	padding: '24px 24px 40px 24px',
	"& p": {
		fontFamily: 'inherit'
	}
}

function Reference() {
	return (
		<Stack sx={stackStyles} gap='15px'>
			{/* <Typography component='p'>
				ПАО «Росбанк» – универсальный финансовый институт с хорошо развитой филиальной сетью,
				один из крупнейших банков России. Ключевые направления деятельности – розничный бизнес,
				обслуживание корпоративных клиентов, инвестиционно-банковские услуги,
				а также private banking. Крупнейшим источником фондирования банка являются
				средства корпоративных клиентов и населения.
			</Typography>
			<Typography component='p'>
				Банк был зарегистрирован в 1993 году под наименованием «Независимость».
			</Typography>
			<Typography component='p'>Дата последнего изменения: 26.07.2023</Typography> */}
			{/* <Accordion
				elevation={0}
			>
				<AccordionSummary
					sx={{
						width: 'fit-content',
						color: '#4DA7FF',
						padding: 0
					}}
				expandIcon={<ExpandMoreIcon sx={{ color: '#4DA7FF' }} />}
				>
				<Typography>Показать еще</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
			</AccordionDetails>
		</Accordion> */}
		</Stack >
	)
}

export default Reference