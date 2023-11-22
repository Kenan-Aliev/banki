import React, { useRef, useState } from 'react';
import s from './index.module.scss';
import { oneOfferConsumerCreditsT } from '@/screens/ConsumerCreditsPage/ConsumerCreditsPage';
import CreditBankItem from '../CreditBankItem';
import { nanoid } from 'nanoid';

interface CreditBankItemProps {
  item: oneOfferConsumerCreditsT;
  arr?: [];
}

const ItemAndChildren = (props: CreditBankItemProps) => {
  const { item, arr } = props;
  const [isOpen, setIsOpen] = useState(false);
  const headItem = useRef<HTMLLIElement>();

  const heightItem = () => {
    if (!headItem.current) return;

    return headItem.current.getBoundingClientRect().height * (arr.length - 1) + 10 * (arr.length - 1);
  };

  return (
    <>
      <CreditBankItem item={item} arrChildren={arr} openChildren={() => setIsOpen(!isOpen)} />
      <ul
        className={s.deposit_offers_children}
        style={{
          height: isOpen ? `${heightItem()}px` : 0,
        }}
      >
        {arr.slice(1).map((child: oneOfferConsumerCreditsT, index) => (
          <li
            key={nanoid()}
            style={{ marginTop: '2.5px', marginBottom: '2.5px' }}
            ref={index === 0 ? headItem : null}
          >
            <CreditBankItem child item={child} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(ItemAndChildren);
