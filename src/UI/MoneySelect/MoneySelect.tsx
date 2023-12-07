'use client';
import React from 'react';
import s from './MoneySelect.module.scss';

type Props = {
    moneyProp?: string
    currencyProp?: string
    width?: number;
    handleChange?: (prop: string, value: any) => void
    amount?: number
    currency?: string,
    title?: string
};

const MoneySelect = ({ width, amount, currency, handleChange, title, currencyProp, moneyProp }: Props) => {
    return (
        <div className={s.summa} style={{ width: width ? width + 'px' : '100%' }}>
            <div className={s.sum_info}>
                <div>{title}</div>
                <input type='number'
                    value={amount}
                    onChange={(e) => handleChange(moneyProp ?? 'amount_tange', e.target.value)} />
            </div>
            <div className={s.select}>
                <select
                    value={currency}
                    onChange={(e) => handleChange(currencyProp ?? 'currency', e.target.value)}>
                    <option value='kgs'>&#8384;</option>
                    <option value='rub'>₽</option>
                    <option value='dol'>$</option>
                </select>
            </div>
        </div>
    );
};

export default MoneySelect;
