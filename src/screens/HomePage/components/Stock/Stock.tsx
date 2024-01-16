'use client'

import React, { useEffect, useRef, useState } from 'react';
import s from './Stock.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import StockItem from '@/components/StockItem/StockItem';
import Link from "next/link";
import { Promotion } from '@/models/Promotions/Promotions';
import Slider from '@/components/Slider/Slider';
import useDeviceSize from '@/hooks/useDeviceSize';

interface Props {
    promotions: Promotion[]
}

const Stock = ({ promotions }: Props) => {
    const [width] = useDeviceSize()

    const sliderRef = useRef(null);

    const handle = (index: number) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideTo(index);
    };


    const stockItems = promotions?.map((el, index) => (
        <StockItem
            onClick={() => {
                handle(index);
            }}
            key={index}
            title={el.title}
            sup={el.subtitle}
            img={el.img}
            isMobile={width <= 480}
        />
    ));

    const slides = promotions?.map((el) => {
        return {
            node: <div className={s.info}>
                <div className={s.title}>{el.title}</div>
                <div className={s.sup}>{el.subtitle}</div>
                <div className={s.btns}>
                    {el.subtitle.toLowerCase().includes('кредит') &&
                        <Link href={'/credits'}>
                            <BlueBtn text={'Подобрать кредит'} width={240} />
                        </Link>
                    }
                    {el.subtitle.toLowerCase().includes('ипот') &&
                        <Link href={'/ipoteka/offers'}>
                            <BlueBtn text={'Получить ипотеку'} width={240} />
                        </Link>
                    }
                    {el.title.toLowerCase().includes('карт') &&
                        <Link href={'/cards/select-cards'}>
                            <BlueBtn text={'Подобрать карту'} width={240} />
                        </Link>
                    }
                    {el.subtitle.toLowerCase().includes('вклад') &&
                        <Link href={'/deposits'}>
                            <BlueBtn text={'Подобрать вклад'} width={240} />
                        </Link>
                    }
                </div>
            </div>
        }
    })


    return (
        <div>
            <div className={s.stock}>
                {width > 480 &&
                    <Slider data={slides}
                        responsive={{
                            "320": 1,
                            "480": 1,
                            "640": 1,
                            "768": 1,
                            "1500": 1
                        }}
                        infinite={true}
                        leftArr={false}
                        rightArr={false}
                        ref={sliderRef}
                        centered={false}
                        autoplay={true}
                    />
                }
                <div className={s.stock_items}>{stockItems}</div>
            </div>
        </div>
    );
};

export default Stock;
