import PageWrapper from '@/containers/PageWrapper'
import { Box, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'
import telegram from '@/assets/icons/footer_telegram.svg'
import twitter from '@/assets/icons/footer_twitter.svg'
import odnoklassniki from '@/assets/icons/footer_odnoklassniki.svg'
import vk from '@/assets/icons/footer_vk.svg'
import Image from 'next/image'



const links = [
	{
		text: 'О проекте',
		link: ''
	},
	{
		text: 'Как это работает',
		link: ''
	},
	{
		text: 'Наши награды',
		link: ''
	},
	{
		text: 'Отзывы о vsebanki.kg',
		link: ''
	},
	{
		text: 'Работа на vsebanki.kg',
		link: ''
	},
	{
		text: 'Реклама',
		link: ''
	},
	{
		text: 'Контакты',
		link: ''
	},
	{
		text: 'Партнерская программа',
		link: ''
	},
	{
		text: 'Служба поддержки',
		link: ''
	},
	{
		text: 'Карта сайта',
		link: ''
	}
]

const stackStyles: SxProps<Theme> = {
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	gap: '15px',
	"@media(max-width:480px)": {
		flexDirection: 'column',
		alignItems: 'center'
	}
}


function FooterLinks() {
	return (
		<Box sx={{
			background: '#E1E1E1',
			mt: '25px',
			padding: '50px 0',
			"& h1,p": {
				fontFamily: 'inherit'
			}
		}}>
			<PageWrapper>
				<Stack direction='row' alignItems='center'
					sx={stackStyles}
				>
					<Typography component='h3'
						sx={{
							fontSize: '24px',
							color: '#121212',
							textAlign: 'center'
						}}
					>
						vsebanki.kg ФИНАНСОВЫЙ МАРКЕТПЛЕЙС В КЫРГЫЗСТАНЕ
					</Typography>
					<Stack direction='row' spacing={1}>
						<Image src={telegram} alt='telegram' />
						<Image src={twitter} alt='twitter' />
						<Image src={odnoklassniki} alt='odnoklassniki' />
						<Image src={vk} alt='vk' />
					</Stack>
				</Stack>

				<Stack direction='row' mt='30px'
					sx={stackStyles}
				>
					{
						links.map(link => (
							<Typography
								key={link.text}
								sx={{
									color: '#000000',
									fontSize: '12px'
								}}
							>
								{link.text}
							</Typography>))
					}
				</Stack>

				<Stack direction='row' mt='30px'
					sx={stackStyles}
				>
					<Typography
						sx={{
							fontSize: '10px',
							width: '50%',
							"@media(max-width:480px)": {
								width: '100%',
								textAlign: 'center',
							}
						}}
					>
						Наша информационная платформа использует файлы cookie
						для обеспечения максимального удобства наших пользователей
						и оптимальной работоспособности веб-сайта и предлагаемых сервисов.
						Файлы cookie – это небольшие файлы данных, которые сохраняют информацию
						о ваших настройках и предыдущих посещениях нашего сайта.
						Если вы предпочитаете не использовать файлы cookie,
						вы можете в любой момент изменить соответствующие настройки
						в вашем браузере. Подробнее об условиях использования вы можете узнать здесь.
					</Typography>
					<Typography
						sx={{
							fontSize: '10px',
							height: 'fit-content',
							borderBottom: '1px solid #000',
							textAlign: 'center',
							"@media(max-width:480px)": {
								borderBottom: 'none'
							}
						}}>
						Пользовательское соглашение Политика обработки персональных данных
					</Typography>
				</Stack>
			</PageWrapper>
		</Box>

	)
}

export default FooterLinks