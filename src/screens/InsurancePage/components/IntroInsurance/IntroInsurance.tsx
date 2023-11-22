import React from 'react';
import s from './IntroInsurance.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import CustomInput from '@/UI/CustomInput/CustomInput';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items?: ItemT[];
  setActive?: React.Dispatch<React.SetStateAction<string>>;
  current?: string;
};

const IntroInsurance = ({ items, current, setActive }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Страхование</mark>
        </div>
        <div className={s.title}>
          <mark>Страхование</mark>
        </div>
        <div className={s.sub}>
          Выбирайте и сравнивайте предложения ведущих страховых компаний онлайн. Мы покажем цены,
          <br />
          условия и реальные отзывы клиентов. Сразу после оплаты направим на email электронный полис —<br />
          он имеет ту же юридическую силу, что и бумажный.
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={items} />
        </div>
        <div className={s.infoCont}>
          <div className={s.l}>
            <div className={s.title}>Введите госномер — данные заполнятся автоматически</div>
            <div className={s.inp}>
              <CustomInput />
              <BlueBtn text={'Рассчитать'} width={173} />
            </div>
            <div className={s.subtitle}>
              или <mark>выберите марку</mark> самостоятельно
            </div>
          </div>
          <div className={s.right}>
            <div className={s.name}>Здесь будут показаны ваши последние расчеты и оформленные полисы</div>
            <div className={s.btn}>Войти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroInsurance;
