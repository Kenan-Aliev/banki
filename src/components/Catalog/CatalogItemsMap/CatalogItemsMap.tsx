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
          onClick={() => el.link ? null : handleShowCatalogItems(el.name)}
          sx={{
            "&:hover": {
              cursor: 'pointer'
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
