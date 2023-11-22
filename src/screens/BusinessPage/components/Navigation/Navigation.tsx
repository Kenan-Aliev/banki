import React from 'react';
import styles from './Navigation.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

const data = [
  {
    name: 'Все продукты',
    active: true,
  },
  {
    name: 'Расчетный счет (РКО)',
    active: false,
  },
  {
    name: 'Кредиты',
    active: false,
  },
  {
    name: 'Бизнес карты',
    active: false,
  },
];

type Props = {
  current?: string;
  setActive?: React.Dispatch<string>;
};
const Navigation = ({ current, setActive }: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation_container}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>Бизнес</p>
        <p className={styles.text}>/</p>
        <p className={styles.grey_text}>Все продукты</p>
      </div>
      <div className={styles.text_container}>
        <p className={styles.blue_text}>Бизнес</p>
        <p className={styles.text}>
          В этом разделе вы сможете подобрать инструменты для развития вашего бизнеса
        </p>
      </div>
      <div className={styles.cont_choise}>
        <ChoiseItemsMap choiseItems={data} currentChoise={current} setActive={setActive} />
      </div>
    </div>
  );
};

export default Navigation;
