import React from 'react';
import s from './CalculateBroker.module.scss';
import CustomInput from '@/UI/CustomInput/CustomInput';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};
const CalculateBroker = ({ items }: Props) => {
  return (
    <div className={s.wrapper}>
      <CustomInput border={'#D9DBDF'} height={60} width={467} place={'Рынки'} />
      <CustomInput border={'#D9DBDF'} height={60} width={467} place={'Брокеры'} />
      <BlueBtn text={'Подобрать'} width={186} />
      <div className={s.choose}>
        <ChoiseItemsMap choiseItems={items} />
      </div>
    </div>
  );
};

export default CalculateBroker;
