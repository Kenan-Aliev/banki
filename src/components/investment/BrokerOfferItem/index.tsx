import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockBankImage from '@/assets/icons/banki_icon/loco.svg';
import { BrokerItemT } from '@/models/Investment/Investment';

interface BrokerOfferItemProps {
  item: BrokerItemT;
}

const BrokerOfferItem = (props: BrokerOfferItemProps) => {
  const {
    item: { name, description },
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
              <div className={s.title}>Комиссия за сделку</div>
              <span>{'10,10'}%</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Обслуживание в мес.</div>
              <span>{'от 0'} ₽</span>
            </div>
          </div>
        </div>
        <button className={s.btn_dung}>
          <Image src={dang_i} alt='иконка опасности' />
        </button>
      </div>
      <div className={s.down}>
        {/* <div className={s.count}>
                    {'Ещё 12 тарифов'}
                    <Image src={arr_d} alt={'иконка стрелочки вниз'}/>
                </div> */}
        <div className={s.blue_charc}>
          {['Партнер раздела'].map((el, index) => {
            if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14} />;
          })}
        </div>
        <BlueBtn text={'Открыть счет'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default BrokerOfferItem;
