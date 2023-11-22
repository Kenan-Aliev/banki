import React from 'react';
import s from './BlueLikeBtn.module.scss';
import like from '@/assets/icons/Like_blue.svg';
import Image from 'next/image';

type Props = {
  title: string;
};

const BlueLikeBtn = ({ title }: Props) => {
  return (
    <div className={s.likeBtn}>
      <Image alt='like' src={like} />
      {title}
    </div>
  );
};

export default BlueLikeBtn;
