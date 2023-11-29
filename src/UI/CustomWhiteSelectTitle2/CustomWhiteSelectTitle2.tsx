'use client'

import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material"
import React from "react"


interface IMenuItem {
	value: string | number
	text: string
}
interface ISelect {
	name: string
	prop: string
	defaultValue: string | number | string[] | number[]
	items: IMenuItem[]
	isAllExist: boolean
	onChange: (prop: string, value: any) => void
	labelName?: string
	onBlur?: (e: React.FocusEvent<any>) => void
	error?: boolean
	errorMessage?: string
	value?: any
	disabled?: boolean
	multiple?: boolean
}
const CustomWhiteSelectTitle2: React.FC<ISelect> = ({
	labelName,
	value,
	items,
	defaultValue,
	name,
	prop,
	isAllExist,
	onChange,
	onBlur,
	disabled = false,
	error = false,
	errorMessage = "",
	multiple = false,
}) => {
	return (
		<FormControl sx={{ width: "100%" }}>
			<InputLabel id={labelName}>{labelName}</InputLabel>
			<Select
				id={labelName}
				error={error}
				value={value}
				disabled={disabled}
				name={name}
				onChange={(e) => onChange(prop, e.target.value)}
				onBlur={onBlur}
				defaultValue={defaultValue}
				multiple={multiple}
				label={labelName}
				sx={{
					background: '#F5F5F5'
				}}
			>
				{isAllExist && <MenuItem value=''>Все</MenuItem>}
				{items?.map((selectObj, index) => (
					<MenuItem key={index} value={selectObj.value}>
						{selectObj.text}
					</MenuItem>
				))}
			</Select>
			{error && <FormHelperText error>{errorMessage}</FormHelperText>}
		</FormControl>
	)
}

export default CustomWhiteSelectTitle2