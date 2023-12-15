import React from 'react';
import s from './CatalogItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  img: StaticImageData;
  link?: string
};

const CatalogItem = ({ name, img, link }: Props) => {

  if (link) {
    return <Link href={link} className={s.catalog_item}>
      <Image alt={'catalog image'} src={img} width={35} height={35} />
      <span>{name}</span>
    </Link>
  }

  return <div className={s.catalog_item}>
    <Image alt={'catalog image'} src={img} width={35} height={35} />
    <span>{name}</span>
  </div>

};

export default CatalogItem;
