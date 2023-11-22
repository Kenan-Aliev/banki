'use client';
import React, { useState } from 'react';
import s from './MobileNav.module.scss';
import MobileNavItem from '@/components/MobileHeader/MobileNavItem/MobileNavItem';
import mobileNav from '@/core/data/mobileNav';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileNav = ({ visible, setVisible }: Props) => {
  const [current, setCurrent] = useState<string>('');
  const navMap = mobileNav.map((el, index) => (
    <MobileNavItem
      setVisible={setVisible}
      setCurrent={setCurrent}
      current={current}
      name={el.name}
      navs={el.navs}
      key={index}
    />
  ));
  return (
    <nav className={visible ? s.nav_a : s.nav}>
      <div className={s.line}></div>
      <div className={s.search}>
        <input type='text' placeholder={'Поиск по сайту'} />
      </div>
      <div className={s.line}></div>
      <div className={s.nav_items}>{navMap}</div>
    </nav>
  );
};

export default MobileNav;
