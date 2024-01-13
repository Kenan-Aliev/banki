import React from 'react';
import styles from './BanksWithButton.module.scss';
import BankCardItem from '@/components/BanksWithButton/BankCardItem/BankCardItem';
import { CardItemT } from '@/models/Cards/Cards';

interface BanksWithButtonProps {
  text: string;
  sub_value: string;
  cards: CardItemT[]
}

const BanksWithButton = (props: BanksWithButtonProps) => {
  const { text, sub_value, cards } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <mark>{text}</mark> {sub_value}
      </div>
      { }
      <ul className={styles.items_container}>
        {cards?.map((item) => (
          <li key={item.id}>
            <BankCardItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BanksWithButton;
