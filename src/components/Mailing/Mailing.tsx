'use client';

import React, { useState } from 'react';
import s from './Mailing.module.scss';
import mail from '@/assets/icons/rassilka.svg';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';

const Mailing = () => {
  const [accessOne, setAccessOne] = useState<boolean>(true);
  const [accessTwo, setAccessTwo] = useState<boolean>(true);
  const handleChangeOne = () => setAccessOne(!accessOne);
  const handleChangeTwo = () => setAccessTwo(!accessTwo);
  return (
    <div className={s.mailing}>
      <div className={s.info}>
        <div className={s.title}>
          Подпишитесь на нашу рассылку, <mark>чтобы быть в курсе новых предложений</mark>
        </div>
        <div className={s.mailing_i}>
          <div className={s.mail_cont}>
            <input type='email' placeholder='Введите вашу почту' />
            <BlueBtn text={'Подписаться'} width={170} />
          </div>
          <div className={s.inp_label}>
            <div>
              <CustomCheckboxAround handleChecked={handleChangeOne} checked={accessOne} />
            </div>
            <span>
              Предоставляю своё <a href={''}>согласие</a> на обработку персональных данных
            </span>
          </div>
          <div className={s.inp_label}>
            <div>
              <CustomCheckboxAround handleChecked={handleChangeTwo} checked={accessTwo} />
            </div>
            <span>
              Предоставляю своё <a href={''}>согласие</a> на получение рекламы и информационных сообщений
            </span>
          </div>
        </div>
      </div>
      <Image src={mail} alt={'рассылка фото'} />
    </div>
  );
};

export default Mailing;
