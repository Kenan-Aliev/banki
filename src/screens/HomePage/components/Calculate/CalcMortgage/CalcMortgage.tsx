'use client';

import React, { useEffect, useState } from 'react';
import s from './CalcMortgage.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Link from "next/link";

type Props = {
    currency?: string;
    setCurrency?: React.Dispatch<string>;
}
const CalcMortgage = ({ currency, setCurrency }: Props) => {

    const [money, setMoney] = useState<number>(120000);
    const [moneytow, setMoneytow] = useState<number>(1200);
    const [years, setYears] = useState<string>('3');
    const [pay, setPay] = useState<number>(7988);


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [economy, setEconomy] = useState<number>(0);
    const stavka = 8;


    useEffect(() => {
        const procent = stavka / 100;
        const sun = procent + (procent / (1 + procent)) * (Number(years) * 12 - 1);
        const sum = money * sun;
        const result = Math.round(sum / (Number(years) * 12));
        setPay(result);
    }, [years, money, pay]);

    return (
        <div className={s.calc_i}>
            <div className={s.calc_inps}>
                <MoneySelect currency={+currency} amount={money}
                    title={'Стоимость недвижимости'}
                />
                <div className={s.stavka}>
                    <span>Ставка:</span>
                    <span>От {stavka}%</span>
                </div>
                <MoneySelect currency={+currency} amount={moneytow}
                    title={'Первоначальный взнос'}
                />
                <div className={s.stavka}>
                    <span>Платеж:</span>
                    <span>{pay} {currency}</span>
                </div>
                <CustomWhiteSelectTitle
                    value={years}
                    // setValue={setYears}
                    title={'Срок в годах'}
                    options={[
                        {
                            text: '1',
                            value: 1
                        },
                        {
                            text: '2',
                            value: 2
                        }
                    ]}
                />
                <div className={s.stavka}>
                    <span>Экономия в месяц:</span>
                    <span>{economy} {currency}</span>
                </div>
            </div>
            <Link href={'/ipoteka'}>
                <BlueBtn text={'Подобрать кредит'} width={840} />
            </Link>
        </div>
    );
};

export default CalcMortgage;
