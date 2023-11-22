'use client';
import React, { useState } from 'react';
import s from './MobileHeader.module.scss';
import userImg from '@/assets/icons/User.svg';
import Image from 'next/image';
import MobileNav from '@/components/MobileHeader/MobileNav/MobileNav';
import Link from 'next/link';
import logo from '@/assets/icons/logo.png';

const MobileHeader = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const setVisNav = () => setVisible(!visible);
  // useEffect(() => {
  //     visible && setTimeout(setVisNav, 5000)
  // }, [visible])

  return (
    <>
      <MobileNav visible={visible} setVisible={setVisible} />
      <header className={s.header}>
        <div className={s.btn} onClick={setVisNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link href={'/'}>
          <Image src={logo} className={s.logo} alt={'logo'}/>
        </Link>
        <Image alt={'icon'} priority src={userImg} width={20} height={20} />
      </header>
    </>
  );
};

export default MobileHeader;
