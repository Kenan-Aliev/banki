import React from 'react';
import s from './Contacts.module.scss';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Контактная информация</h1>
      <div className={s.input_cont}>
        <CustomInputTitle title={'Адрес'} width={419} />
        <CustomInputTitle title={'Электронная почта'} width={419} />
        <CustomInputTitle title={'Номер телефона'} width={419} />
      </div>
      <span className={s.bluetxt}>Редактировать</span>
    </div>
  );
};

export default Contacts;
