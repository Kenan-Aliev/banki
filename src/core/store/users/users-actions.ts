import { toastError, toastSuccess } from '@/core/libs/utils/toastify';
import UsersApi from '@/core/services/Users';
import { sendApplicationData } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendApplication = createAsyncThunk(
	'users/sendApplication',
	async (data: sendApplicationData, { rejectWithValue }) => {
		try {
			const response = await UsersApi.sendApplication(data)
			toastSuccess('Вы успешно отправили заявку')
			return response.data
		} catch (err: any) {
			toastError('Произошла ошибка')
			return rejectWithValue(err.response.data.message)
		}
	})
