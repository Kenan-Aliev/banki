'use client';

import React, {useEffect, useState} from 'react';
import s from './CalcDeposit.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import Link from "next/link";

type Props = {
    currency?: string;
    setCurrency?: React.Dispatch<string>;
}
const CalcDeposit = ({currency, setCurrency}: Props) => {
    const [money, setMoney] = useState<number>(200000);
    const [days, setDays] = useState<number>(365);
    const [pay, setPay] = useState<number>(0);
    const [stavka, setStavka] = useState<number>(22);
    useEffect(() => {
        if (currency === 'руб') {
            setStavka(10)
        } else if (currency === 'долл') {
            setStavka(10)
        } else {
            setStavka(20);
        }
        const result = Math.round((money * stavka * days) / 365 / 100);
        setPay(result);
    }, [days, money, pay,currency]);

    return (
        <div className={s.calc_i}>
            <div className={s.calc_inps}>
                <MoneySelect currency={currency} setCurrency={setCurrency} value={money} setValue={setMoney}/>
                <div className={s.stavka}>
                    <span>Ставка :</span>
                    <span>От {stavka}%</span>
                </div>
                <CustomInputTitle value={days} setValue={setDays} title={'Срок в днях'}/>
                <div className={s.stavka}>
                    <span>Профит :</span>
                    <span>{pay} {currency}</span>
                </div>
            </div>
            <Link href={'/deposits'}>
                <BlueBtn text={'Подобрать вклад'} width={840}/>
            </Link>
        </div>
    );
};

export default CalcDeposit;
