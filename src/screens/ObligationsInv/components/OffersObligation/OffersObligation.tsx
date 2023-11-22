'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import s from './OffersObligation.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { StaticImageData } from 'next/image';
import ObliagtionOfferItem from '@/screens/ObligationsInv/components/ObliagtionOfferItem/ObliagtionOfferItem';

type dep = {
  name: string;
  sub: string;
  price: number;
  change: string;
  subPrice?: string;
  img: StaticImageData;
  subChange: string;
};
type ChangeTimeT = {
  date: string;
  time: string;
};
type Props = {
  offers: dep[];
  count: string;
  options: string[];
  changeTime: ChangeTimeT;
};

const OffersObligation = ({ offers, options, count, changeTime }: Props) => {
  const itemStocks = useRef<HTMLLIElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState<string>('Доходность по убыванию');
  const [arrRender, setArrRender] = useState([...offers].sort((x: dep, y: dep) => y.price - x.price));

  const heightItem = useMemo(() => {
    if (!itemStocks.current) return 128;
    return itemStocks.current.getBoundingClientRect().height;
  }, [itemStocks.current]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    itemStocks.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const quantityItems = useMemo(() => {
    return offers.length >= 4 ? 4 : 1;
  }, [offers.length]);

  useEffect(() => {
    if (sortType === 'Доходность по убыванию') {
      setArrRender((old) => {
        return old.sort((x: dep, y: dep) => x.price - y.price);
      });
    }
    if (sortType === 'Доходность по возрастанию') {
      setArrRender((old) => {
        return old.sort((x: dep, y: dep) => y.price - x.price);
      });
    }
  }, [sortType]);

  const sortStoocks = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    if (sortType === e.currentTarget.value) return;
    setSortType(e.currentTarget.value);
  };

  const offerMap = arrRender.map((el, index) => (
    <li key={index} ref={!index ? itemStocks : null}>
      <ObliagtionOfferItem
        name={el.name}
        subChange={el.subChange}
        sub={el.sub}
        price={el.price}
        change={el.change}
        img={el.img}
        subPrice={el.subPrice}
        key={index}
      />
    </li>
  ));

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>{count}</span>
        <CustomSelect img={lines} options={options} handleSort={(e) => sortStoocks(e)} />
        <span className={s.time}>{`Обновлено ${changeTime.date} в ${changeTime.time}`}</span>
      </div>
      <ul
        className={s.deposit_offers}
        style={{
          height: !isOpen
            ? `${heightItem * quantityItems + 15}px`
            : `${heightItem * offers.length + 5 * offers.length - 1}px`,
        }}
      >
        {offerMap}
      </ul>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} onClick={handleClick} />
      </div>
    </div>
  );
};

export default OffersObligation;
