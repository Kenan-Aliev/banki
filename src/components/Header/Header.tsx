'use client';

import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import Image from 'next/image';
import pointImg from '@/assets/icons/Map Point.svg';
import searchImg from '@/assets/icons/search.svg';
import Nav from '@/components/Header/Nav/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/icons/logo.png';

type navItemsT = {
  name: string;
  id: number;
  link: string;
};

const Header = () => {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<string>('');
  const [currentLink, setCurrentLink] = useState<string>('');
  const [vis, setVis] = useState<boolean>(false);

  useEffect(() => {
    const pa = pathName.split('/');
    setCurrentPage(pa[1]);
  }, [pathName]);

  const onMouseNav = (name: string) => {
    setCurrentLink(name);
    name === 'Ещё' ? setVis(false) : setVis(true);
  };

  const navItems: navItemsT[] = [
    { name: 'Вклады', id: 1, link: 'deposits' },
    { name: 'Кредиты', id: 2, link: 'credits' },
    { name: 'Ипотека', id: 3, link: 'ipoteka' },
    { name: 'Страхование', id: 4, link: 'insurance' },
    { name: 'Инвестиции', id: 5, link: 'investment' },
    { name: 'Карты', id: 6, link: 'cards' },
    { name: 'Бизнес', id: 7, link: 'business' },
    { name: 'Новости', id: 8, link: 'news' },
    { name: 'Ещё', id: 9, link: 'more' },
  ];
  const navMap = navItems.map((el) => {
    return (
      <p
        key={el.id}
        className={currentPage.includes(el.link) ? s.nav_item_active : s.nav_item}
        onMouseEnter={() => onMouseNav(el.name)}
      >
        {el.name}
      </p>
    );
  });

  return (
    <div className='container'>
      <header className={s.header}>
        <Link href={'/'} onClick={() => setVis(false)}>
          {/*<div className={s.logo}>Логотип</div>*/}
          <Image src={logo} className={s.logo} alt={'logo'}/>
        </Link>
        <nav className={s.nav}>{navMap}</nav>
        <nav className={s.icons}>
          <Link
            href={'/profile/applications'}
            className={currentPage.includes('profile') ? s.active_link : ''}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle className='' cx='12' cy='6' r='4' stroke='#121212' strokeWidth='1.5' />
              <path
                d='M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147
                             16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398
                              21.8433 17 21.5634'
                stroke='#121212'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </Link>
          <Image alt={'icon'} priority src={pointImg} width={24} height={24} />
          <Image alt={'icon'} priority src={searchImg} width={24} height={24} />
        </nav>
      </header>
      {vis && <Nav path={currentLink} setActive={setVis} />}
    </div>
  );
};

export default Header;
