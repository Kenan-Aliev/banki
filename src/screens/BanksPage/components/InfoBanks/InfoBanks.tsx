import React from 'react';
import s from './InfoBanks.module.scss';
import CustomWhiteSelect from '@/UI/CustomWhiteSelect/CustomWhiteSelect';
import Image from 'next/image';
import map from '@/assets/icons/Карта.png';

const InfoBanks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.banks}>
        <div className={s.title}>328 банков</div>
        <div className={s.inp_cont}>
          <div className={s.name}>Показать банки</div>
          <CustomWhiteSelect width={530} height={48} options={['Все банки региона']} />
        </div>
        <div className={s.inp_cont}>
          <div className={s.name}>Форма собственности</div>
          <CustomWhiteSelect width={530} height={48} options={['Любая']} />
        </div>
        <div className={s.inp_cont}>
          <div className={s.name}>Сортировать</div>
          <CustomWhiteSelect width={530} height={48} options={['По названию']} />
        </div>
      </div>
      <div className={s.banks}>
        <div className={s.title}>
          Банки на карте
          <div className={s.link}>Перейти на карту</div>
        </div>
        <Image className={s.map} src={map} alt={'map'} />
      </div>
    </div>
  );
};

export default InfoBanks;
