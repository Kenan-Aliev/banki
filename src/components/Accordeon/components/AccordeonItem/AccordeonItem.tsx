'use client';

import React, { useState } from 'react';
import s from './AccordeonItem.module.scss';
import arr from '@/assets/icons/arr_d_spec.svg';
import Image from 'next/image';

type Props = {
  numb: string;
  sub: string;
  text: string;
};

const AccordeonItem = ({ numb, sub,text }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => setActive(!active);
  return (
    <div className={s.acc_item} onClick={handleActive} style={{ maxHeight: active && 'fit-content' }}>
      <div className={s.info}>
        <div>
          <span>{numb}</span>
          {sub}
        </div>
        <Image className={active ? s.image_a : s.image} src={arr} alt={'стрелочка вниз'} />
      </div>
      <div className={s.text}>
        {text}
      </div>
    </div>
  );
};

export default AccordeonItem;
