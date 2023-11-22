'use client';

import React, { useState } from 'react';
import s from './QuestionItem.module.scss';
import Image from 'next/image';
import plus from '@/assets/icons/plus.svg';

type Props = {
  item: {
    text: string;
    title: string;
  };
};

const QuestionItem = ({ item }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={open ? s.item_active : s.item} onClick={toggleOpen}>
      <div className={s.info}>
        <div className={s.title}>{item.title}</div>
        <Image className={open ? s.plus_a : s.plus} src={plus} alt='' />
      </div>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien vitae tortor
        vestibulum mollis nec non orci. Phasellus fringilla, odio nec suscipit varius, purus libero bibendum
        lacus, non vulputate urna tortor eget libero. Etiam efficitur lacus libero, eget blandit libero
        molestie ut.
      </p>
    </div>
  );
};

export default QuestionItem;
