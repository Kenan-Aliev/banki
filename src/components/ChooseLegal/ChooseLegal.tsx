import React from 'react';
import s from './ChooseLegal.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';

const ChooseLegal = () => {
  return (
    <div className={s.legal}>
      <p>
        Выберите тип юр. лица и рассчитайте расходы по тарифусравнить тарифы и рассчитать
        <br /> финальную стоимость обслуживания по индивидуальным параметрам.
      </p>
      <div className={s.btns}>
        <WhiteBorderBlueBtn text={'ООО'} width={117} height={40} fz={16} />
        <BlueBtn text={'ИП'} width={104} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default ChooseLegal;
