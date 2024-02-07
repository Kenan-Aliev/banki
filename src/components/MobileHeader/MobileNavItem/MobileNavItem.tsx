import React, { useState } from 'react';
import s from './MobileNavItem.module.scss';
import arr from '@/assets/icons/arr_d_spec.svg';
import Image from 'next/image';
import Link from 'next/link';

type ItemT = {
  text: string;
  link: string;
};
type Props = {
  name: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navs?: ItemT[][];
};
const MobileNavItem = ({ name, navs, setVisible }: Props) => {
  const onLink = () => setVisible(false);
  const [isActive, setIsActive] = useState(false)

  const handleChangeIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={isActive ? s.item_a : s.item} onClick={handleChangeIsActive}>
      <div className={s.info}>
        {name}
        <Image className={isActive ? s.img_a : ''} src={arr} alt={'arrow down'} />
      </div>
      <div className={s.items}>
        <div>
          {navs &&
            navs[0].map((el, index) => (
              <Link onClick={onLink} key={index} href={el.link}>
                {el.text}
              </Link>
            ))}
        </div>
        <div>
          {navs && navs[1] && navs[1].length > 0 &&
            navs[1].map((el, index) => (
              <Link onClick={onLink} key={index} href={el.link}>
                {el.text}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItem;
