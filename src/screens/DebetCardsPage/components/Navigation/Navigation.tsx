import React from 'react';
import styles from './Navigation.module.scss';
import ParametrsItem from '@/screens/DebetCardsPage/components/Navigation/Parametrs/ParametrsItem/ParametrsItem';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

const data = [
  {
    name: 'Все',
    active: true,
  },
  {
    name: 'Карты МИР',
    active: false,
  },
  {
    name: 'Карты Union Pay',
    active: false,
  },
  {
    name: 'Бесплатное обслуживание',
    active: false,
  },
  {
    name: 'Кэшбэк рублями',
    active: false,
  },
  {
    name: 'Супермаркеты',
    active: false,
  },
  {
    name: 'Транспорт и АЗС',
    active: false,
  },
];
type Props = {
  setActive?: React.Dispatch<string>;
  current?: string;
};

const Navigation = ({ current, setActive }: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        Главная / Карты / <mark>Дебетовые карты</mark>
      </div>
      <div className={styles.main_text_container}>
        <div className={styles.text_cont}>
          Дебетовые карты <mark>в Бишкеке</mark>
        </div>
        <div className={styles.little_text_cont}>
          <p>
            На (НАЗВАНИЕ СЕРВИСА) есть 859 банковских карт от 202 банков. Также на сайте вы найдете
            специальные предложения по дебетовым картам.
          </p>
        </div>
      </div>
      <div className={styles.cont}>
        <ChoiseItemsMap choiseItems={data} currentChoise={current} setActive={setActive} />
        <ParametrsItem text='Все параметры' active={false} icon={true} />
      </div>
    </div>
  );
};

export default Navigation;
