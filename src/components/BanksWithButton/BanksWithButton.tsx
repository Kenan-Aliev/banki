import React from 'react';
import styles from './BanksWithButton.module.scss';
import BankCardItem from '@/components/BanksWithButton/BankCardItem/BankCardItem';
import { nanoid } from 'nanoid';
import { CreditCardT, DebitCardT } from '@/models/Cards/Cards';

interface BanksWithButtonProps {
  text: string;
  sub_value: string;
  cards: CreditCardT[] | DebitCardT[];
}

const BanksWithButton = (props: BanksWithButtonProps) => {
  const { text, sub_value, cards } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <mark>{text}</mark> {sub_value}
      </div>
      {}
      <ul className={styles.items_container}>
        {cards.slice(0, 10).map((item) => (
          <li key={nanoid()}>
            <BankCardItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BanksWithButton;
