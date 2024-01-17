import React from 'react';
import s from './OurStrongs.module.scss';

interface Props {
  data: {
    num: string
    title: string
    sub: string
  }[]
}

const OurStrongs = (props: Props) => {
  const { data } = props
  return (
    <div className={s.our_strongs}>
      <div className={s.info}>
        <div className={s.title}>
          В чём наши <mark>преимущества</mark>
        </div>
        {data.map(d => {
          return <div className={s.strong_item} key={d.num}>
            <div className={s.title}>
              <span>{d.num}</span>
              <span>{d.title}</span>
            </div>
            <p>{d.sub}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default OurStrongs;
