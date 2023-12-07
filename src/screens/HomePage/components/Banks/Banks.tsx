'use client';

import React, { useEffect, useMemo, useState } from 'react';
import s from './Banks.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import BankiItem from '@/components/Banki/BankiItem/BankiItem';
import { StaticImageData } from 'next/image';
import Search from '@/UI/Search/Search';
import Link from "next/link";
import { BankT } from "@/models/Banks/banks";
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectBanks } from '@/core/store/banks/banks-selectors';
import { getBanks } from '@/core/store/banks/banks-actions';
import { resetBanks } from '@/core/store/banks/banks-slice';

type Props = {
    data: BankT[];
};

const Banks = ({ data }: Props) => {

    const [searchValue, setSearchValue] = useState('')
    const [timer, setTimer] = useState(null);

    const filteredBanks = useAppSelector(selectBanks).results

    const dispatch = useAppDispatch()


    const banks = useMemo(() => {
        return data?.map((el, index) => (
            <Link href={`/banks/${el.id}`} key={el.id}>
                <BankiItem key={index} img={el.logo} name={el.name} />
            </Link>
        ))
    }, [data]);


    const handleChangeSearchValue = (e: any) => {
        setSearchValue(e.target.value)
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(() => {
                handleFilterBanks(e.target.value)
            }, 1000)
        );
    }

    const handleFilterBanks = (value: string) => {
        dispatch(resetBanks())
        if (value) {
            dispatch(getBanks({ name: value, limit: 5, offset: 0 }))
        }
    }


    return (
        <div className={s.banks}>
            <div className={s.title}>
                Все банки <span>в Кыргызстане</span>
            </div>
            <div className={s.bank_map_cont}>
                <div className={s.picture} />
                <div className={s.bank_map}>
                    <div className={s.banK_mWrap}>{banks}</div>
                    <div className={s.nav_search}>
                        <Link href={'/banks'}>
                            <BlueBtn text={'Весь список банков'} width={273} />
                        </Link>
                        <Search
                            placeholder={'Введите название банка...'}
                            width={431}
                            height={60}
                            margin={0}
                            btnHidden={true}
                            filteredArr={filteredBanks}
                            onChange={handleChangeSearchValue}
                            value={searchValue}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Banks;
