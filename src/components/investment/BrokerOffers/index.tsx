'use client';
import React, { useMemo, useRef, useState } from 'react';
import s from './index.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import BrokerOfferItem from '@/components/investment/BrokerOfferItem';
import { BrokerItemT } from '@/models/Investment/Investment';

interface BrokerOffersProps {
  brokers: BrokerItemT[];
  title: string;
  options?: string[];
  isSelect?: boolean;
}

const BrokerOffers = (props: BrokerOffersProps) => {
  const { brokers, title, options = ['Обслуживание в мес.'], isSelect = true } = props;
  const firstOffer = useRef<HTMLLIElement>();
  const [isOpen, setIsOpen] = useState(false);

  const heightItem = useMemo(() => {
    if (!firstOffer.current) return 175;
    return firstOffer.current.getBoundingClientRect().height;
  }, [firstOffer.current]);

  const handleClick = () => {
    setIsOpen(!isOpen);

    firstOffer.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const quantityItems = useMemo(() => {
    return brokers.length >= 4 ? 4 : 1;
  }, [brokers.length]);

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>{title}</span>
        {isSelect && <CustomSelect img={lines} options={options} />}
      </div>
      <ul
        className={s.deposit_offers}
        style={{
          height: !isOpen
            ? `${heightItem * quantityItems + 15}px`
            : `${heightItem * brokers.length + 5 * brokers.length - 1}px`,
        }}
      >
        {brokers.map((item, index) => (
          <li key={item.id} ref={index === 0 ? firstOffer : null}>
            <BrokerOfferItem item={item} />
          </li>
        ))}
      </ul>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} onClick={handleClick} />
      </div>
    </div>
  );
};

export default BrokerOffers;
