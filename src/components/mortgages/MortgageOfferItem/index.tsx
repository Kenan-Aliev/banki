import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import arr_d from '@/assets/icons/Arrow_d.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockBankImage from '@/assets/icons/banki_icon/loco.svg';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';

interface MortgageOfferItemProps {
  item: MortgageItemT;
}

const MortgageOfferItem = (props: MortgageOfferItemProps) => {
  const {
    item: { name, rate, monthly_payment, description },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.up}>
        <div className={s.info}>
          <Image src={mockBankImage} alt={'иконка банка'} />
          <div className={s.name}>
            <div>{name}</div>
            <span>{description}</span>
          </div>
          <div className={s.about_b}>
            <div className={s.info_item}>
              <div className={s.title}>
                Ставка
                <Image src={ques_I} alt={'иконка вопроса'} />
              </div>
              <span>{rate}%</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Платеж</div>
              <span>{monthly_payment} ₽</span>
            </div>
          </div>
        </div>
        <button className={s.btn_dung}>
          <Image src={dang_i} alt='иконка опасности' />
        </button>
      </div>
      <div className={s.down}>
        <div className={s.count}>
          Ещё {12}
          <Image src={arr_d} alt={'иконка стрелочки вниз'} />
        </div>
        <div className={s.blue_charc}>
          {['Партнер раздела'].map((el, index) => {
            if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14} />;
          })}
        </div>
        <BlueBtn text={'Отправить заявку'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default MortgageOfferItem;
