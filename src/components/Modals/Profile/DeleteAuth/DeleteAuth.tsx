import React from 'react';
import s from './DeleteAuth.module.scss';
import Image from 'next/image';
import close from '@/assets/icons/Close Circle.svg';
import guard from '@/assets/icons/Warning.svg';
import CustomInput from '@/UI/CustomInput/CustomInput';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';

const DeleteAuth = () => {
  return (
    <div className={s.back}>
      <div className={s.modal}>
        <div className={s.modal_h}>
          <Image src={guard} alt={''} />
          Отключение двухфакторной аутентификации
          <Image className={s.close} src={close} alt={''} />
        </div>
        <p className={s.text}>Tincidunt ut morbi nibh lectus. Eu felis suspendisse consequat arcu enim.</p>
        <div className={s.inp_cont}>
          <label>Введите код из СМС</label>
          <CustomInput width={640} place={'Введите код из СМС'} border={'#D9DBDF'} />
        </div>
        <div className={s.timer}>Отправить код повторно</div>
        <div className={s.btnCont}>
          <BlueBtn text={'Отменить'} width={175} />
          <WhiteBorderBlueBtn text={'Подтвердить'} width={207} height={60} fz={20} />
        </div>
      </div>
    </div>
  );
};

export default DeleteAuth;
