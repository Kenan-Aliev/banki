import React from 'react';
import ProfileContainer from '@/containers/ProfileContainer';
import s from './NewAppealProfile.module.scss';
import arr from '@/assets/icons/Arrow Left.svg';
import Image from 'next/image';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import Link from 'next/link';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInput from '@/UI/CustomInput/CustomInput';

const NewAppealProfile = () => {
  return (
    <ProfileContainer>
      <div className={s.wrapper}>
        <Link href={'/profile/help'} className={s.btn_back}>
          <Image src={arr} alt={''} />
          <span>Вернуться назад</span>
        </Link>
        <h1 className={s.title}>Новое обращение</h1>
        <div className={s.inp_ont}>
          <CustomWhiteSelectTitle options={['Выберите категорию...']} title={'Категория'} width={321} />
          <CustomInputTitle
            title={'Тема'}
            place={'Напишите тему обращения'}
            colorTitle={'#121212'}
            width={658}
          />
          <textarea placeholder={'Опишите вашу проблему ...'} />
        </div>
        <div className={s.more_info}>
          <div>
            <span>Прикрепите файлы (по необходимости)</span>
            <BlueBtn text={'Выбрать файл'} width={346} />
          </div>
          <div>
            <span>Добавьте ссылки (по необходимости)</span>
            <CustomInput place={'Введите ссылку'} border={'#FFF'} width={617} />
          </div>
          <div>
            <span>Уведомления об ответах</span>
            <CustomInput place={'Добавить адресата'} border={'#D9DBDF'} width={985} />
          </div>
        </div>
        <BlueBtn text={'Отправить обращение'} width={985} />
      </div>
    </ProfileContainer>
  );
};

export default NewAppealProfile;
