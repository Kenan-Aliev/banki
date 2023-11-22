import React from 'react';
import styles from './Ecvaring.module.scss';
import Items from '@/screens/BusinessPage/components/Ecvaring/Items/Items';
import prosto_bank from '@/assets/icons/bank_icons/prosto_bank.svg';
import fora_bank from '@/assets/icons/bank_icons/fora_bank.svg';
import { nanoid } from 'nanoid';

const Ecvaring = () => {
  const data = [
    {
      image: prosto_bank,
      komissia: 'от 0,29%',
      text: '«Тариф эквайринга под ваш бизнес»',
    },
    {
      image: fora_bank,
      komissia: 'от 0,7%',
      text: '«0,7% и точка»',
    },
    {
      image: fora_bank,
      komissia: 'от 0,4%',
      text: '«QR эквайринг»\n',
    },
  ];

  return (
    <div className={styles.main_container}>
      <p className={styles.main_text}>Эквайринг</p>
      <p className={styles.little_text}>Тарифы на эквайринг в банках для ИП и ООО.</p>
      <div className={styles.items_container}>
        {data.map((el) => (
          <Items key={nanoid()} text={el.text} image={el.image} komissia={el.komissia} />
        ))}
      </div>
    </div>
  );
};

export default Ecvaring;
