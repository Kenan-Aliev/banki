'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './Offers.module.scss';
import Image from './Image';
import OfferItem from '../OffersItem/OffersItem';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { nanoid } from 'nanoid';
import { CreditCardT } from '@/models/Cards/Cards';

interface OffersProps {
  cards: any[];
}

const Offers = ({ cards }: OffersProps) => {
  const [cardsLength, setCardsLenth] = useState([]);
  const titleScroll = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<(number | string)[]>([]);
  const [higthItems, setHigthItems] = useState(0);

  const cardsAreRolledIntoBanks = useMemo(() => {
    const _cardsAreRolledIntoBanks = cards.reduce((arr, el) => {
      const avilable = arr.find((bank) => bank[0].bank_name === el.bank_name);
      if (avilable) {
        avilable.push(el);
      } else {
        const nevArr = [el];
        arr.push(nevArr);
      }
      return arr;
    }, []);

    _cardsAreRolledIntoBanks.map((el) => {
      return el.map((elem) => {
        return { ...elem, length: el.length };
      });
    });

    return _cardsAreRolledIntoBanks;
  }, [cards]);

  const leaderBanks = useMemo(() => {
    const _leaderBanks = cardsAreRolledIntoBanks.reduce((arr, el) => {
      arr.push(el[0]);
      return arr;
    }, []);

    return _leaderBanks;
  }, [cardsAreRolledIntoBanks]);

  useEffect(() => {
    if (!leaderBanks) return;
    setCardsLenth(leaderBanks.slice(0, 4));
  }, []);

  const handleClick = () => {
    titleScroll.current.scrollIntoView({
      behavior: 'smooth',
    });
    setCardsLenth((prevState) => (prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4)));
  };

  const handleOpenChildren = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: CreditCardT) => {
      setHigthItems(e.currentTarget.parentElement.parentElement.getBoundingClientRect().height);
      const presence = isOpen.find((el) => el === item.bank_name);
      if (!presence) {
        setIsOpen((currentVal) => [...currentVal, item.bank_name]);
      } else {
        setIsOpen((currentVal) => currentVal.filter((el) => el !== item.bank_name));
      }
    },
    [isOpen],
  );

  const presenceClassName = (item: CreditCardT) => {
    const presence = isOpen.find((el) => el === item.bank_name);

    return presence ? true : false;
  };

  return (
    <div className={styles.main_container} ref={titleScroll}>
      <div className={styles.count_container}>
        <div className={styles.right_container}>
          <p className={styles.blue}>{cards.length}</p>
          <p>предложения</p>
        </div>
        <div className={styles.left_container}>
          <Image />
          <p>Сравнение</p>
        </div>
      </div>
      <ul className={styles.deposit_offers}>
        {cardsLength.map((item) => {
          const arrChildren = cardsAreRolledIntoBanks.find((el) => el[0].bank_name === item.bank_name);
          return (
            <li key={nanoid()}>
              <OfferItem
                item={item}
                arrChildren={arrChildren ? arrChildren.slice(1) : []}
                openChildren={(e) => handleOpenChildren(e, item)}
              />
              <ul
                className={styles.deposit_offers_children}
                style={{
                  height: presenceClassName(item)
                    ? `${(arrChildren.length - 1) * higthItems + (arrChildren.length - 1) * 15}px`
                    : '0',
                }}
              >
                {arrChildren.slice(1).map((child: CreditCardT) => (
                  <li key={nanoid()} style={{ marginTop: '2.5px', marginBottom: '2.5px' }}>
                    <OfferItem child item={child} />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className={styles.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default Offers;
