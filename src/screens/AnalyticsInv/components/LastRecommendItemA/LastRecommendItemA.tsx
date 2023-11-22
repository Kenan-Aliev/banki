import React from 'react';
import s from './LastRecommendItemA.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  name: string;
  sub: string;
  img: StaticImageData;
  recommendation: boolean;
  stockName: string;
  subName: string;
};

const LastRecommendItemA = ({ recommendation, sub, img, name, stockName, subName }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.up}>
        <div className={s.info}>
          <Image src={img} alt={'иконка банка'} />
          <div className={s.name}>
            <div>{name}</div>
            <span>{sub}</span>
          </div>
          <div className={s.about_b}>
            <div className={s.info_item}>
              <div className={s.title}>Рекомендации</div>
              <span style={{ color: '#4DA7FF' }}>{recommendation ? 'Покупать' : 'Не покупать'}</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Акции</div>
              <span>{stockName}</span>
              <div className={s.title} style={{ marginBottom: '0', marginTop: '10px' }}>
                {subName}
              </div>
            </div>
          </div>
        </div>
        <BlueBtn text={'Подробнее'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default LastRecommendItemA;
