import React, {useCallback, useRef} from 'react';
import s from './Stock.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import StockItem from '@/components/StockItem/StockItem';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import Link from "next/link";

export type ItemsActionT = {
    id: number;
    subtitle: string;
    text: string;
    title: string;
};

interface Props {
    promotions: any[]
}

const Stock = ({promotions}: Props) => {
    const sliderRef = useRef(null);
    const handle = useCallback((index) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideTo(index);
    }, []);

    const stockItems = promotions?.map((el, index) => (
        <StockItem
            onClick={() => {
                handle(index);
            }}
            key={index}
            title={el.title}
            sup={el.subtitle}
        />
    ));
    const slides = promotions?.map((el, index) => (
        <SwiperSlide key={index}>
            <div className={s.info}>
                <div className={s.title}>{el.title}</div>
                <div className={s.sup}>{el.subtitle}</div>
                <div className={s.btns}>
                    { el.title.toLowerCase().includes('кредит') &&
                        <Link href={'/credits'}>
                            <BlueBtn text={'Подобрать кредит'} width={240}/>
                        </Link>
                    }
                    { el.title.toLowerCase().includes('ипотека') &&
                        <Link href={'/ipoteka'}>
                            <BlueBtn text={'Подать заявку'} width={240}/>
                        </Link>
                    }
                    { el.title.toLowerCase().includes('карт') &&
                        <Link href={'/cards/select-cards'}>
                            <BlueBtn text={'Подобрать карту'} width={240}/>
                        </Link>
                    }
                    { el.title.toLowerCase().includes('вклады') &&
                        <Link href={'/cards/select-cards'}>
                            <BlueBtn text={'Подобрать вклад'} width={240}/>
                        </Link>
                    }
                    {/*<div className={s.btn}>Кнопка 2</div>*/}
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div>
            <div className={s.stock}>
                <Swiper ref={sliderRef} autoplay={true}>
                    {slides}
                    <div className={s.stock_items}>{stockItems}</div>
                </Swiper>
            </div>
        </div>
    );
};

export default Stock;
