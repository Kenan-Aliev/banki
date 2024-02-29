'use client';
import React, { useState } from 'react';
import s from './MobileNav.module.scss';
import MobileNavItem from '@/components/MobileHeader/MobileNavItem/MobileNavItem';
import mobileNav from '@/core/data/mobileNav';
import Search from '@/UI/Search/Search';
import { useAppSelector } from '@/hooks/redux';
import { Box } from '@mui/material';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileNav = ({ visible, setVisible }: Props) => {
  const { serviceItems } = useAppSelector((state) => state.home);
  const [searchVal, setSearchVal] = useState<string>('');

  const handleChangeSearchVal = (e: any) => {
    setSearchVal(e.target.value)
  }

  const filteredArr =
    serviceItems.filter((i) => i.text.toLowerCase().includes(searchVal.toLowerCase()));

  const navMap = mobileNav.map((el, index) => (
    <MobileNavItem
      setVisible={setVisible}
      name={el.name}
      navs={el.navs}
      key={index}
    />
  ));
  return (
    <nav className={visible ? s.nav_a : s.nav}>
      <div className={s.line}></div>
      {/* <div className={s.search}>
        <input type='text' placeholder={'Поиск по сайту'} />
      </div> */}
      <Box m='10px auto 20px' width='90%'>
        <Search
          onChange={handleChangeSearchVal}
          value={searchVal}
          placeholder={'Поиск'}
          filteredArr={filteredArr}
          height={50}
          margin={0}
          btnHidden={true}
        />
      </Box>

      <div className={s.line}></div>
      <div className={s.nav_items}>{navMap}</div>
    </nav>
  );
};

export default MobileNav;
