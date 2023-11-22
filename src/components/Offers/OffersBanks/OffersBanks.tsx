'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import s from './OffersBanks.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { nanoid } from 'nanoid';
import { offerT } from '@/screens/DepositsPage/DepositsPage';
import classNames from 'classnames';

interface OfferBanksProps {
  deposits: offerT[];
  title: string;
  sub: string;
  options: string[];
  isSelect: boolean;
}

const OffersBanks = (props: OfferBanksProps) => {
  const { deposits, options, title, sub, isSelect } = props;
  const titleScroll = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<(number | string)[]>([]);
  const [depositsLength, setDepositsLenth] = useState([]);
  const [higthDepositItem, setHigthDepositItem] = useState(0);
  const [sortValue, setSortValue] = useState('По процентной ставке');

  const depositsAreRolledUpAcrossBanks = useMemo(() => {
    const _depositsAreRolledUpAcrossBanks = deposits.reduce((arr, el) => {
      const avilable = arr.find((bank) => bank[0].bank_id === el.bank_id);
      if (avilable) {
        avilable.push(el);
      } else {
        const nevArr = [el];
        arr.push(nevArr);
      }
      return arr;
    }, []);

    _depositsAreRolledUpAcrossBanks.map((el) => {
      return el.map((elem) => {
        return (elem.length = el.length);
      });
    });

    return _depositsAreRolledUpAcrossBanks;
  }, [deposits]);

  const leaderBanks = useMemo(() => {
    const _leaderBanks = depositsAreRolledUpAcrossBanks.reduce((arr, el) => {
      arr.push(el[0]);
      return arr;
    }, []);

    return _leaderBanks;
  }, [depositsAreRolledUpAcrossBanks]);

  useEffect(() => {
    if (!leaderBanks) return;
    setDepositsLenth(leaderBanks.slice(0, 4));
  }, []);

  const handleClick = () => {
    titleScroll.current.scrollIntoView({
      behavior: 'smooth',
    });
    setDepositsLenth((prevState) => (prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4)));
  };

  const handleOpenChildren = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: offerT) => {
      setHigthDepositItem(e.currentTarget.parentElement.parentElement.getBoundingClientRect().height);
      const presence = isOpen.find((el) => el === item.bank_id);
      if (!presence) {
        setIsOpen((currentVal) => [...currentVal, item.bank_id]);
      } else {
        setIsOpen((currentVal) => currentVal.filter((el) => el !== item.bank_id));
      }
    },
    [isOpen],
  );

  const presenceClassName = (item: offerT) => {
    const presence = isOpen.find((el) => el === item.bank_id);

    return presence ? true : false;
  };

  const sortOffers = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    if (sortValue === e.currentTarget.value) return;
    setSortValue(e.currentTarget.value);
  };

  function sortOffer(criterion: 'rate' | 'rating' | 'min_amount') {
    depositsAreRolledUpAcrossBanks.map((bankOf: offerT[]) => {
      return bankOf.sort((x, y) => {
        return y[criterion] - x[criterion];
      });
    });

    leaderBanks.sort((x, y) => {
      return y[criterion] - x[criterion];
    });

    setDepositsLenth(leaderBanks.slice(0, 4));
  }

  useEffect(() => {
    if (sortValue === '') return;
    switch (sortValue) {
      case 'По процентной ставке':
        sortOffer('rate');
        break;
      case 'По рейтингу банка':
        sortOffer('rating');
        break;
      case 'По максимальному взносу':
        sortOffer('min_amount');
        break;
    }
  }, [sortValue]);

  return (
    <div className={s.deposits}>
      <div className={s.title} ref={titleScroll}>
        <span>
          <mark>{title}</mark>
          {sub}
        </span>
        {isSelect && <CustomSelect img={lines} options={options} handleSort={(e) => sortOffers(e)} />}
      </div>
      <ul className={s.deposit_offers}>
        {depositsLength.map((item) => {
          const arrChildren = depositsAreRolledUpAcrossBanks.find((el) => el[0].bank_id === item.bank_id);
          return (
            <li key={nanoid()}>
              <DepositOfferItem
                item={item}
                arrChildren={arrChildren ? arrChildren.slice(1) : []}
                openChildren={(e) => handleOpenChildren(e, item)}
              />
              <ul
                className={classNames(s.deposit_offers_children)}
                style={{
                  height: presenceClassName(item)
                    ? `${(arrChildren.length - 1) * higthDepositItem + (arrChildren.length - 1) * 10}px`
                    : '0',
                }}
              >
                {arrChildren.slice(1).map((child: offerT) => (
                  <li key={nanoid()} style={{ marginTop: '2.5px', marginBottom: '2.5px' }}>
                    <DepositOfferItem child item={child} />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default OffersBanks;
