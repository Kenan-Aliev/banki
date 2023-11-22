import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/core/store/store'
import { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector