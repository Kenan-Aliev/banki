'use client';

import React, { useEffect, useState } from 'react';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Link from "next/link";
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { Box, Grid, SxProps, Theme } from '@mui/material';
import background from '@/assets/icons/calc.png'

const boxStyles: SxProps<Theme> = {
    width: '100%',
    marginBottom: '2rem',
    borderRadius: '14px',
    paddingTop: '4rem',
    paddingLeft: '2rem',
    border: '1px solid #d9dbdf',
    background: '#fff',
    backgroundImage: `url(${background.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    "@media(max-width:480px)": {
        padding: '10px',
        backgroundImage: 'none'
    }
}

const mainGridStyles: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '1rem',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    "@media(max-width:480px)": {
        width: '100%'
    }
}

const rateStyles: SxProps<Theme> = {
    height: '60px',
    borderRadius: '9px',
    border: '1px solid #d9dbdf',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
}

const paymentStyles: SxProps<Theme> = {
    height: '60px',
    borderRadius: '9px',
    border: '1px solid #d9dbdf',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
}

const CalcCredits = () => {

    const [data, setData] = useState({
        currency: 'kgs',
        amount_range: 12000,
        years: '1',
        pay: 7988,
        stavka: 15
    })

    const handleChangeData = (prop: string, value: any) => {
        setData({ ...data, [prop]: value })
    }

    useEffect(() => {
        if (data.currency === 'rub') {
            handleChangeData('stavka', 13)
        } else if (data.currency === 'dol') {
            handleChangeData('stavka', 10)
        } else {
            handleChangeData('stavka', 15)
        }

    }, [data.currency]);


    useEffect(() => {
        const procent = data.stavka / 100;
        const sun = procent + (procent / (1 + procent)) * (Number(data.years) * 12 - 1);
        const sum = data.amount_range * sun;
        const result = Math.round(sum / (Number(data.years) * 12));
        handleChangeData('pay', result)
    }, [data.years, data.amount_range, data.pay, data.stavka])



    return (
        <Box sx={boxStyles}>
            <Grid sx={mainGridStyles} container>
                <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8}>
                    <MoneySelect
                        title='Сумма'
                        currency={data.currency}
                        amount={data.amount_range}
                        handleChange={handleChangeData}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={rateStyles}>
                    <span>Ставка:</span>
                    <span>{data.stavka}%</span>
                </Grid>

                <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8}>
                    <CustomWhiteSelectTitle2
                        value={data.years}
                        defaultValue={data.years}
                        isAllExist={false}
                        onChange={handleChangeData}
                        prop='years'
                        name='years'
                        labelName='Срок в годах'
                        items={[
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
                </Grid>

                <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={paymentStyles}
                >
                    <span>Платеж:</span>
                    <span>{data.pay} {data.currency}</span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Link href={'/credits'}>
                        <BlueBtn text={'Подобрать кредит'} />
                    </Link>
                </Grid>
            </Grid >

        </Box >
    );
};

export default CalcCredits;
