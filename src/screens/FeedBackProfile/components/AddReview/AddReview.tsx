import React from 'react';
import s from './AddReview.module.scss';
import CustomInput from '@/UI/CustomInput/CustomInput';
import Image from 'next/image';
import star from '@/assets/icons/Star.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const AddReview = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Добавить новый отзыв</h1>
      <div className={s.cont}>
        <div className={s.date}>
          Дата написания отзыва: <mark>21/07/2023</mark>
        </div>
        <div className={s.inp_cont}>
          <label>Название выбранного продукта</label>
          <CustomInput border={'#D9DBDF'} height={50} width={388} />
        </div>
        <div className={s.inp_cont}>
          <label>Как вам качество предоставленной услуги?</label>
          <div className={s.stars}>
            <Image src={star} alt={'star'} />
            <Image src={star} alt={'star'} />
            <Image src={star} alt={'star'} />
          </div>
        </div>
        <div className={s.inp_cont}>
          <label>Название выбранного продукта</label>
          <textarea placeholder={'Ваш отзыв...'} className={s.textarea} />
        </div>
        <BlueBtn text={'Отправить отзыв'} width={386} height={50} fSize={18} />
      </div>
    </div>
  );
};

export default AddReview;
