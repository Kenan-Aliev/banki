import React from 'react';
import s from './CatalogItems.module.scss';
import CatalogItemsMap from '@/components/Catalog/CatalogItemsMap/CatalogItemsMap';
import { StaticImageData } from 'next/image';

type catalogT = {
  name: string;
  img: StaticImageData;
};
type Props = {
  title: string;
  items: catalogT[];
  width?: string;
};

const CatalogItems = ({ title, items, width }: Props) => {
  return (
    <div className={s.catalog_items}>
      <div className={s.title}>{title}</div>
      <div className={s.items_cont} style={{ width: `${width}` }}>
        <CatalogItemsMap items={items} />
      </div>
    </div>
  );
};

export default CatalogItems;
