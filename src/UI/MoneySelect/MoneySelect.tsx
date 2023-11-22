'use client';
import React from 'react';
import s from './MoneySelect.module.scss';

type Props = {
    width?: number;
    value?: number;
    setValue?: React.Dispatch<number>;
    title?: string;
    currency?: string;
    setCurrency?: React.Dispatch<string>;
};

const MoneySelect = ({width, value, setValue, title, setCurrency, currency}: Props) => {
    const handleChange = (e) => setValue(e.target.value);
    const setCurrentCurrency = (e) => setCurrency && setCurrency(e.target.value);


    return (
        <div className={s.summa} style={{width: `${width}px`}}>
            <div className={s.sum_info}>
                <div>{title || 'Cумма'}</div>
                <input type='number' value={value} onChange={handleChange}/>
            </div>
            <div className={s.select}>
                <select value={currency} onChange={setCurrentCurrency}>
                    <option value='сом'>сом</option>
                    <option value='руб'>руб</option>
                    <option value='долл'>долл</option>
                </select>
            </div>
        </div>
    );
};

export default MoneySelect;
