import React from 'react';
import styles from './OffersBanks.module.scss';
import Items from '@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { nanoid } from 'nanoid';
import { CreditCardT } from '@/models/Cards/Cards';

interface OffersBanksProps {
  cards: CreditCardT[];
  title?: string;
}

const OffersBanks = (props: OffersBanksProps) => {
  const { cards, title } = props;

  return (
    <div className={styles.container}>
      {title ? <div className={styles.title}>{title}</div> : ''}
      <div className={styles.map_cont}>
        {cards.slice(0, 12).map((item) => (
          <Items key={nanoid()} item={item} />
        ))}
      </div>
      <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60} />
    </div>
  );
};

export default OffersBanks;
