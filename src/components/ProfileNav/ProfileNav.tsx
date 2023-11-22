'use client';

import React from 'react';
import s from './ProfileNav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { name: 'Дашборд', link: '/profile/dashboard' },
  { name: 'Мои заявки', link: '/profile/applications' },
  { name: 'Настройки профиля', link: '/profile/settings' },
  { name: 'Мои отзывы', link: '/profile/feedback' },
  { name: 'Уведомления', link: '/profile/notifications' },
  { name: 'Сообщения', link: '/profile/messages' },
  { name: 'История активности', link: '/profile/history' },
  { name: 'Избранное', link: '/profile/favourites' },
  { name: 'Помощь', link: '/profile/help' },
];

const ProfileNav = () => {
  const pathName = usePathname();

  return (
    <nav className={s.wrapper}>
      {nav.map((el, index) => (
        <Link
          key={index}
          className={pathName.includes(el.link) ? s.nav_item_active : s.nav_item}
          href={el.link}
        >
          {el.name}
        </Link>
      ))}
    </nav>
  );
};

export default ProfileNav;
