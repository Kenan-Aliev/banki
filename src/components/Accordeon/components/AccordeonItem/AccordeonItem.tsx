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

const AccordeonItem = ({ numb, sub }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => setActive(!active);
  return (
    <div className={s.acc_item} onClick={handleActive} style={{ maxHeight: active && '250px' }}>
      <div className={s.info}>
        <div>
          <span>{numb}</span>
          {sub}
        </div>
        <Image className={active ? s.image_a : s.image} src={arr} alt={'стрелочка вниз'} />
      </div>
      <div className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque sagittis dolor in
        ornare. Morbi vitae metus tempor, maximus ante vel, suscipit libero. Vivamus sagittis nunc nec laoreet
        eleifend. P
      </div>
    </div>
  );
};

export default AccordeonItem;
