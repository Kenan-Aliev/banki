'use client'

import React from 'react';
import s from './CatalogItems.module.scss';
import CatalogItemsMap from '@/components/Catalog/CatalogItemsMap/CatalogItemsMap';
import { StaticImageData } from 'next/image';

type catalogT = {
  name: string;
  img: StaticImageData;
  link?: string
};
type Props = {
  title: string;
  items: catalogT[];
  width?: string;
  handleShowCatalogItems?: (item: string) => void
};

const CatalogItems = ({ title, items, width, handleShowCatalogItems }: Props) => {
  return (
    <div className={s.catalog_items}>
      <div className={s.title}>{title}</div>
      <div className={s.items_cont} style={{ width: `${width}` }}>
        <CatalogItemsMap items={items} handleShowCatalogItems={handleShowCatalogItems} />
      </div>
    </div>
  );
};

export default CatalogItems;
