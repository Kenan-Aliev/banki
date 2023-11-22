import React from 'react';
import CatalogItem from '@/components/Catalog/CatalogItem/CatalogItem';
import { StaticImageData } from 'next/image';

type catalogT = {
  name: string;
  img: StaticImageData;
};
type Props = {
  items: catalogT[];
};

const CatalogItemsMap = ({ items }: Props) => {
  return (
    <>
      {items.map((el, index) => (
        <CatalogItem key={index} name={el.name} img={el.img} />
      ))}
    </>
  );
};

export default CatalogItemsMap;
