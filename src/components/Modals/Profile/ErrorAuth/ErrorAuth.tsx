import React from 'react';
import s from './ErrorAuth.module.scss';
import Image from 'next/image';
import close from '@/assets/icons/Close Circle.svg';
import guard from '@/assets/icons/Warning.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';

const ErrorAuth = () => {
  return (
    <div className={s.back}>
      <div className={s.modal}>
        <div className={s.modal_h}>
          Подключение двухфакторной аутентификации
          <Image className={s.close} src={close} alt={''} />
        </div>
        <p className={s.text}>
          <Image src={guard} alt={''} />
          Tincidunt ut morbi nibh lectus. Eu felis suspendisse consequat arcu enim.
        </p>
        <div className={s.btnCont}>
          <BlueBtn text={'Ещё раз'} width={159} />
          <WhiteBorderBlueBtn text={'Закрыть'} width={159} height={60} fz={20} />
        </div>
      </div>
    </div>
  );
};

export default ErrorAuth;
