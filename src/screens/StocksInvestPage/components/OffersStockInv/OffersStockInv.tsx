'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import s from './OffersStockInv.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { StaticImageData } from 'next/image';
import StockOfferItem from '@/screens/StocksInvestPage/components/StockOfferItem/StockOfferItem';

type dep = {
  name: string;
  sub: string;
  price: number;
  change: string;
  subPrice?: string;
  img: StaticImageData;
};
type Props = {
  offers: dep[];
  count: number;
  options: string[];
  isSelect: boolean;
};

const OffersStockInv = ({ offers, options, isSelect }: Props) => {
  const itemStocks = useRef<HTMLLIElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState<string>('По убыванию цены за акцию');
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
    if (sortType === 'По убыванию цены за акцию') {
      setArrRender((old) => {
        return old.sort((x: dep, y: dep) => x.price - y.price);
      });
    }
    if (sortType === 'По возрастанию цены за акцию') {
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
      <StockOfferItem
        name={el.name}
        sub={el.sub}
        price={`${el.price} $`}
        change={el.change}
        img={el.img}
        subPrice={el.subPrice}
      />
    </li>
  ));

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>{offers.length} акций</span>
        {isSelect && <CustomSelect img={lines} options={options} handleSort={(e) => sortStoocks(e)} />}
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

export default OffersStockInv;
