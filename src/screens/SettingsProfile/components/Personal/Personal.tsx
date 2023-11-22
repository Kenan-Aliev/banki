import React from 'react';
import s from './Personal.module.scss';
import profile_img from '@/assets/icons/profile_img.png';
import Image from 'next/image';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';

const Personal = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Личная информация</h1>
      <div className={s.info}>
        <div className={s.profile_img}>
          <div className={s.img}>
            <Image src={profile_img} alt={'profile img'} />
          </div>
          <span>Фото профиля</span>
        </div>
        <div className={s.inps_cont}>
          <CustomInputTitle title={'Имя'} width={148} />
          <CustomInputTitle title={'Фамилия'} width={148} />
          <CustomInputTitle title={'Отчество'} width={304} />
          <CustomWhiteSelectTitle options={['Мужской']} title={'Пол'} width={148} />
          <div className={s.inpDate}>
            <span>Дата рождения</span>
            <input type='date' />
          </div>
        </div>
      </div>
      <span className={s.bluetxt}>Редактировать</span>
    </div>
  );
};

export default Personal;
