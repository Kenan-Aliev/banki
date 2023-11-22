import React from 'react';
import s from './BanksItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type charsT = {
  name: string;
  count: number;
};
type Props = {
  title: string;
  sub: string;
  img: StaticImageData;
  chars: charsT[];
  m1: number;
  m2: number;
};

const BanksItem = ({ chars, m1, m2, title, sub, img }: Props) => {
  return (
    <div className={s.item}>
      <Image src={img} alt={''} />
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.sub}>{sub}</div>
        <div className={s.chars}>
          {chars.map((el, index) => (
            <div key={index} className={s.char_item}>
              {el.name}
              <mark>{el.count}</mark>
            </div>
          ))}
        </div>
      </div>
      <div className={s.btn}>
        <span>
          <mark>{m1} место</mark> по Кыргызстану
          <br />
          <mark>{m2} место</mark>
        </span>
        <BlueBtn text={'Задать вопрос'} width={220} />
      </div>
    </div>
  );
};

export default BanksItem;
