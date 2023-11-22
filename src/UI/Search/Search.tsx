/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, {useEffect, useState} from 'react';
import s from './Search.module.scss';
import Image from 'next/image';
import lupa from '@/assets/icons/search.svg';
import Link from 'next/link';

type Props = {
    placeholder: string;
    margin?: number;
    lupaSee?: boolean;
    height?: number;
    btnHidden?: boolean;
    itemsSearch?: any[];
    value?: string;
    setValue?: React.Dispatch<string>;
    filterArr?: any;
    width?: number;
};

const Search = (props: Props) => {

    const {
        placeholder,
        margin,
        height,
        btnHidden,
        itemsSearch,
        setValue,
        value,
        filterArr,
        width
    } = props;


    const [searchVis, setSearchVis] = useState<boolean>(false);
    const [filteredArr, setFilteredArr] = useState<any[]>([]);

    const onChangeInp = (e) => setValue && setValue(e.target.value);

    {
        itemsSearch &&
        useEffect(() => {
            if (value?.length === 0) {
                setSearchVis(false);
            } else {
                setSearchVis(true);
            }
            const result = filterArr(itemsSearch);
            setFilteredArr(result);
        }, [value]);
    }

    return (
        <div className={s.search} style={{margin: `${margin}px`, height: `${height}px`, width: `${width}px`}}>
            <Image alt={'lupa'} src={lupa} height={40} width={40}/>
            <input type='text' value={value} onChange={onChangeInp} placeholder={placeholder}/>

            {btnHidden ? '' : <button>Найти</button>}

            {searchVis && itemsSearch && (
                <div className={s.drop_down}>
                    {filteredArr?.map((el, index) => {


                        if (el.link) {
                            return (
                                <Link href={el.link} key={el.id}>
                                    {el.text || el.name}
                                </Link>
                            );
                        } else if (el.a) {
                            return (
                                <a target={'_blank'} href={el.a} key={index} rel='noreferrer'>
                                    {el.name}
                                </a>
                            );
                        } else {
                            return (
                                <Link href={`/banks/${el.id}`}>
                                    <div
                                        key={index}
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
                                        <span>{el.name || el.title}</span>
                                        {el.rating && <span>рейтинг {el.rating}</span>}
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default Search;
