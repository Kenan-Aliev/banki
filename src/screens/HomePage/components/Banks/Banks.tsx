'use client';

import React, {useState} from 'react';
import s from './Banks.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import BankiItem from '@/components/Banki/BankiItem/BankiItem';
import {StaticImageData} from 'next/image';
import Search from '@/UI/Search/Search';
import Link from "next/link";
import {BankT} from "@/models/Banks/banks";

const Banks = ({data}: Props) => {

    const viewBanks = data.slice(0, 10)

    const bankiMap = viewBanks.map((el, index) => (
        <Link href={`/banks/${el.id}`} key={el.id}>
            <BankiItem key={index} img={el.image} name={el.name} rating={el.rating}/>
        </Link>
    ));

    const [searchName, setSearchName] = useState<string>('');

    const filterArr = (items) => items.filter((i) => i.name.toLowerCase().includes(searchName.toLowerCase()));


    return (
        <div className={s.banks}>
            <div className={s.title}>
                Все банки <span>в Кыргызстане</span>
            </div>
            <div className={s.bank_map_cont}>
                <div className={s.picture}/>
                <div className={s.bank_map}>
                    <div className={s.banK_mWrap}>{bankiMap}</div>
                    <div className={s.nav_search}>
                        <Link href={'/banks'}>
                            <BlueBtn text={'Весь список банков'} width={273}/>
                        </Link>
                        <Search
                            setValue={setSearchName}
                            value={searchName}
                            filterArr={filterArr}
                            itemsSearch={data}
                            placeholder={'Введите название банка...'}
                            width={431}
                            height={60}
                            margin={0}
                            btnHidden={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

type Props = {
    data: BankT[];
};

export default Banks;
