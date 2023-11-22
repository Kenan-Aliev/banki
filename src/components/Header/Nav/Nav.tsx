import React from 'react';
import styles from './Nav.module.scss';
import navigate from '@/core/data/navigate';
import Link from 'next/link';

const Nav = ({
  path,
  setActive,
}: // handleClick,
{
  path: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  // handleClick?: () => void;
}) => {
  const DepositMap = navigate.deposits.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const CreditsMap = navigate.credits.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const IpotekaMap = navigate.ipoteka.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const CardsMap = navigate.cards.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const InsuranceMap = navigate.insurance.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const InvestmentMap = navigate.investment.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const BusunesMap = navigate.business.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });
  const NewsMap = navigate.news.map((el, index) => {
    return (
      <div key={index} className={styles.column} onClick={() => setActive(false)}>
        {el.map((el, index) => (
          <Link key={index} href={el.link} className={styles.link}>
            {el.text}
          </Link>
        ))}
      </div>
    );
  });

  return (
    <div
      className={styles.main_container}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={() => setActive(false)}
    >
      {path === 'Вклады' && DepositMap}
      {path === 'Кредиты' && CreditsMap}
      {path === 'Ипотека' && IpotekaMap}
      {path === 'Карты' && CardsMap}
      {path === 'Страхование' && InsuranceMap}
      {path === 'Инвестиции' && InvestmentMap}
      {path === 'Бизнес' && BusunesMap}
      {path === 'Новости' && NewsMap}
    </div>
  );
};

export default Nav;
