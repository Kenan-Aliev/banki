'use client'

import React from 'react';
import CatalogItem from '@/components/Catalog/CatalogItem/CatalogItem';
import { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

type catalogT = {
  name: string;
  img: StaticImageData;
  link?: string
};
type Props = {
  items: catalogT[];
  handleShowCatalogItems?: (item: string) => void
};

const CatalogItemsMap = ({ items, handleShowCatalogItems }: Props) => {
  return (
    <>
      {items.map((el, index) => (
        <Box key={index}
          onClick={handleShowCatalogItems ? () => { handleShowCatalogItems(el.name) } : null}
          sx={{
            "&:hover": {
              cursor: handleShowCatalogItems || el.link ? 'pointer' : 'default'
            },
            "@media(max-width:640px)": {
              width: '100%'
            }
          }}
        >
          <CatalogItem name={el.name} img={el.img} link={el.link} />
        </Box>
      ))}
    </>
  );
};

export default CatalogItemsMap;
