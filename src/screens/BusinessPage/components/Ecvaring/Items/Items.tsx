import React from 'react';
import styles from './Items.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  komissia: string;
  text: string;
};

const Items = ({ komissia, text, image }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={'bank icon'} />
      <p className={styles.text}>{text}</p>
      <div className={styles.line} />
      <p className={styles.blue_text}>Комиссия</p>
      <p className={styles.grey_text}>{komissia}</p>
      <button className={styles.button}>Подробнее</button>
    </div>
  );
};

export default Items;
