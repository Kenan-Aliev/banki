import React from 'react';
import s from './DeleteAuthSucces.module.scss';
import succ_i from '@/assets/icons/gal_blue.svg';
import close from '@/assets/icons/Close Circle.svg';
import Image from 'next/image';

const DeleteAuthSucces = () => {
  return (
    <div className={s.back}>
      <div className={s.modal}>
        <Image src={succ_i} alt={''} />
        Отключение двухфакторной аутентификации прошло успешно
        <Image className={s.close} src={close} alt={''} />
      </div>
    </div>
  );
};

export default DeleteAuthSucces;
