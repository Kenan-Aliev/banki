import React from 'react';
import s from './AddAuth.module.scss';
import Image from 'next/image';
import close from '@/assets/icons/Close Circle.svg';
import CustomInput from '@/UI/CustomInput/CustomInput';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';

const AddAuth = () => {
  return (
    <div className={s.back}>
      <div className={s.modal}>
        <div className={s.modal_h}>
          Подключение двухфакторной аутентификации через СМС
          <Image className={s.close} src={close} alt={''} />
        </div>
        <p className={s.text}>
          <div className={s.title}>Lorem ipsum dolor sit amet consectetur.</div>
          Tincidunt ut morbi nibh lectus. Eu felis suspendisse consequat arcu enim. Scelerisque donec sed
          venenatis odio neque enim morbi dui. Et ut massa pretium nisl cursus suspendisse.
        </p>
        <div className={s.inp_cont}>
          <CustomInput width={467} place={'Телефон'} border={'#D9DBDF'} />
          <BlueBtn text={'Получить код подтверждения'} width={467} />
        </div>
        <div className={s.timer}>До повторной отправки кода осталось: 50 секунд</div>
        <div className={s.inp_cont}>
          <label>Введите код из СМС</label>
          <CustomInput width={467} place={'Введите код из СМС'} border={'#D9DBDF'} />
        </div>
        <div className={s.btnCont}>
          <BlueBtn text={'Подтвердить'} width={276} />
          <WhiteBorderBlueBtn text={'Отменить'} width={175} height={60} fz={20} />
        </div>
      </div>
    </div>
  );
};

export default AddAuth;
