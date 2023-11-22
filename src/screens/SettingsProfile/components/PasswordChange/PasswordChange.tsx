import React from 'react';
import s from './PasswordChange.module.scss';
import CustomInput from '@/UI/CustomInput/CustomInput';

const PasswordChange = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Изменение пароля</h1>
      <div className={s.inp_cont}>
        <CustomInput place={'Введите текущий пароль'} width={337} />
        <CustomInput place={'Введите новый пароль'} width={337} />
      </div>
      <span className={s.bluetxt}>Изменить</span>
    </div>
  );
};

export default PasswordChange;
