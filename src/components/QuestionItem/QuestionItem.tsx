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
        <h4 className={s.title}>{item.title}</h4>
        <Image className={open ? s.plus_a : s.plus} src={plus} alt='' />
      </div>
      <p className={s.text}>
        {item.text}
      </p>
    </div>
  );
};

export default QuestionItem;
