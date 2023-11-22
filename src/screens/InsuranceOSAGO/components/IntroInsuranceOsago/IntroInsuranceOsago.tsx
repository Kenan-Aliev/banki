import React from 'react';
import s from './IntroInsuranceOsago.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import CustomInput from '@/UI/CustomInput/CustomInput';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items?: ItemT[];
};

const IntroInsuranceOsago = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Страхование / <mark> ОСАГО</mark>
        </div>
        <div className={s.title}>
          <mark>Калькулятор ОСАГО</mark>
        </div>
        <div className={s.sub}>
          Рассчитайте стоимость страховки на машину сразу в топ-15 страховых компаний и купите полис
          <br />
          ОСАГО на 2023 год с выгодой до 74%
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
        <div className={s.infoCont}>
          <div className={s.l}>
            <div className={s.title}>Введите госномер — данные заполнятся автоматически</div>
            <div className={s.inp}>
              <CustomInput place={'Гос. номер'} />
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

export default IntroInsuranceOsago;
