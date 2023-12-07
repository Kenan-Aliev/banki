/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import s from './Search.module.scss';
import Image from 'next/image';
import lupa from '@/assets/icons/search.svg';
import Link from 'next/link';
import { BankT } from '@/models/Banks/banks';

type Props = {
    placeholder: string;
    onChange: (e: any) => void
    value: string;
    filteredArr: {
        id: number
        name: string
    }[]
    margin?: number;
    lupaSee?: boolean;
    height?: number;
    btnHidden?: boolean;
    width?: number;
};

const Search = (props: Props) => {

    const {
        placeholder,
        margin,
        height,
        btnHidden,
        value,
        width,
        onChange,
        lupaSee,
        filteredArr
    } = props;


    const [searchVis, setSearchVis] = useState<boolean>(false);


    useEffect(() => {
        if (value?.length === 0) {
            setSearchVis(false);
        } else {
            setSearchVis(true);
        }
    }, [value]);

    return (
        <div className={s.search} style={{ margin: `${margin}px`, height: `${height}px`, width: `${width}px` }}>
            <Image alt={'lupa'} src={lupa} height={40} width={40} />
            <input type='text' value={value} onChange={onChange} placeholder={placeholder} />

            {btnHidden ? '' : <button>Найти</button>}

            {searchVis && (
                <div className={s.drop_down}>
                    {filteredArr?.map((el, index) => {
                        return (
                            <Link href={`/banks/${el.id}`}
                                key={index}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '10px',
                                        borderBottom: '1px solid black',
                                        fontSize: '14px',
                                    }}
                                >
                                    <span>{el.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Search;
