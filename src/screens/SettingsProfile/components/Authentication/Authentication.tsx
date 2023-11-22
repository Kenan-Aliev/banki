import React from 'react';
import s from './Authentication.module.scss';
import qr from '@/assets/icons/QR Code.svg';
import smart from '@/assets/icons/Smartphone2.svg';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Authentication = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Двухфакторная аутентификация</h1>
      <div className={s.info_cont}>
        <span className={s.info_item}>
          <Image src={qr} alt={'qr-code icon'} />
          Двухфакторная аутентификация через приложение
        </span>
        <span className={s.info_item}>
          <Image src={smart} alt={'smartphone icon'} />
          Двухфакторная аутентификация через СМС
        </span>
      </div>
      <BlueBtn text={'Настройки двухфакторной аутентификации'} width={467} />
    </div>
  );
};

export default Authentication;
