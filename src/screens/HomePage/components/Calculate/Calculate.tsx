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
    { name: 'Кредиты', active: true },
    { name: 'Вклады', active: false },
    { name: 'Ипотека', active: false },
    { name: 'Автокредиты', active: false }
];

const Calculate = () => {

    const [currentChoose, setCurrentChoose] = useState<string>('Кредиты');

    const choiseItems = choises.map((el, index) => (
        <ChoiseItem key={index} name={el.name} setActive={setCurrentChoose} active={currentChoose === el.name} />
    ));


    return (
        <div className={s.calc}>
            <div className={s.choises_items}>{choiseItems}</div>
            {currentChoose === 'Кредиты' && <CalcCredits />}
            {currentChoose === 'Вклады' && <CalcDeposit />}
            {currentChoose === 'Ипотека' && <CalcMortgage />}
            {currentChoose === 'Автокредиты' && <CalcAutoCredits />}
        </div>
    );
};

export default Calculate;
