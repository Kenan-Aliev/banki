'use client';

import React, { useState } from 'react';
import s from './Calculate.module.scss';
import ChoiseItem from '@/components/Choise/ChoiseItem/ChoiseItem';
import CalcCredits from '@/screens/HomePage/components/Calculate/CalcCredits';
import CalcDeposit from '@/screens/HomePage/components/Calculate/CalcDeposit';
import CalcMortgage from '@/screens/HomePage/components/Calculate/CalcMortgage';
import CalcAutoCredits from './CalcAutoCredits';

type choiseItemsT = {
    name: string;
    active: boolean;
};
const choises: choiseItemsT[] = [
    { name: 'Кредитный калькулятор', active: true },
    { name: 'Расчет вкладов', active: false },
    { name: 'Калькулятор ипотеки', active: false },
    { name: 'Калькулятор автокредита', active: false }
];

const Calculate = () => {

    const [currentChoose, setCurrentChoose] = useState<string>('Кредитный калькулятор');

    const choiseItems = choises.map((el, index) => (
        <ChoiseItem key={index} name={el.name} setActive={setCurrentChoose} active={currentChoose === el.name} />
    ));


    return (
        <div className={s.calc}>
            <div className={s.choises_items}>{choiseItems}</div>
            {currentChoose === 'Кредитный калькулятор' && <CalcCredits />}
            {currentChoose === 'Расчет вкладов' && <CalcDeposit />}
            {currentChoose === 'Калькулятор ипотеки' && <CalcMortgage />}
            {currentChoose === 'Калькулятор автокредита' && <CalcAutoCredits />}
        </div>
    );
};

export default Calculate;
