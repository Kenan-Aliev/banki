'use client';
import React from 'react';
import s from './MoneySelect.module.scss';
import { getDepositsI } from '@/models/Services';

type Props = {
    width?: number;
    handleChange?: (prop: string, value: any) => void
    amount?: number
    currency_id?: number,
    title?: string
};

const MoneySelect = ({ width, amount, currency_id, handleChange, title }: Props) => {
    return (
        <div className={s.summa} style={{ width: `${width}px` }}>
            <div className={s.sum_info}>
                <div>{title}</div>
                <input type='number'
                    value={amount}
                    onChange={(e) => handleChange('amount', e.target.value)} />
            </div>
            <div className={s.select}>
                <select
                    value={currency_id}
                    onChange={(e) => handleChange('currency_id', e.target.value)}>
                    <option value='2'>С</option>
                    <option value='1'>₽</option>
                    <option value='3'>$</option>
                </select>
            </div>
        </div>
    );
};

export default MoneySelect;
