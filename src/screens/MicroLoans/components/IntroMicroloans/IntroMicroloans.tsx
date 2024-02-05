'use client'

import React, { useState } from 'react';
import s from './IntroMicroloans.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import Application from '@/components/Application/Application';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
  setActive?: React.Dispatch<string>;
  current?: string;
};

const IntroMicroloans = ({ items, current, setActive }: Props) => {
  const [applicationModal, setApplicationModal] = useState(false)

  const handleChangeApplicationModal = () => {
    setApplicationModal(!applicationModal)
  }
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Микрозаймы</mark>
        </div>
        <div className={s.title}>
          Микрозаймы <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          Выгодные предложения по срочным микрозаймам для физических лиц.
          <br /> Выбирайте низкие проценты, удобные способы оплаты и зачисления денег на карту.
          <br />
          <mark onClick={handleChangeApplicationModal}>Оставьте заявку на микрозайм онлайн.</mark>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={items} />
        </div>
      </div>
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModal}
      />
    </div>
  );
};

export default IntroMicroloans;
