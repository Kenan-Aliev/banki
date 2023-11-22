import React from 'react';
import s from './MobileNavItem.module.scss';
import arr from '@/assets/icons/arr_d_spec.svg';
import Image from 'next/image';
import Link from 'next/link';

type ItemT = {
  text: string;
  link: string;
};
type Props = {
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  current: string;
  name: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navs?: ItemT[][];
};
const MobileNavItem = ({ setCurrent, current, name, navs, setVisible }: Props) => {
  const setVis = () => setCurrent(name);
  const onLink = () => setVisible(false);

  return (
    <div className={current === name ? s.item_a : s.item} onClick={setVis}>
      <div className={s.info}>
        {name}
        <Image className={current === name ? s.img_a : ''} src={arr} alt={'arrow down'} />
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
          {navs &&
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
