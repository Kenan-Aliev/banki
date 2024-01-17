import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface Props {
	items: {
		name: string
		link?: string
	}[]
}

function ProductItems({ items }: Props) {
	return (
		<Stack rowGap='10px'>
			{
				items.map((item, index) => {
					return (
						<Link
							key={index}
							href={item.link}
						>
							<Typography
								sx={{
									fontSize: '12px',
									color: '#000',
									fontFamily: 'inherit',
									fontWeight: 600,
								}}
							>
								{item.name}
							</Typography>
						</Link>
					)
				})
			}
		</Stack>
	)
}

export default ProductItems