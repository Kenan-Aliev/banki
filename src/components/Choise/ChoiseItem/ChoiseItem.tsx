'use client';

import React from 'react';
import s from './ChoiseItem.module.scss';
import Link from 'next/link';

type Props = {
  name: string;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<string | number>>;
  href?: string;
  id?: number
};

const ChoiseItem = ({ name, active, setActive, href,id }: Props) => {
  const setCurrentActive = () => {
    if(id){
      setActive(id)
    }
    else{
      setActive(name)
    }
  };
  if (href) {
    return (
      <Link onClick={setCurrentActive} className={active ? s.item_active : s.item} href={href ? href : ''}>
        {name}
      </Link>
    );
  }

  return (
    <div onClick={setCurrentActive} className={active ? s.item_active : s.item}>
      {name}
    </div>
  );
};

export default ChoiseItem;
