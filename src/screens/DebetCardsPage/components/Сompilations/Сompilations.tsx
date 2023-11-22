import React from 'react';
import styles from './Сompilations.module.scss';
import CatalogItemsMap from '@/components/Catalog/CatalogItemsMap/CatalogItemsMap';
import data from '@/core/data/index';

const Сompilations = () => {
  const dataMap = data.DebitCardsPage.compilationData;
  return (
    <div className={styles.main_container}>
      <p className={styles.text}>Наши подборки</p>
      <div className={styles.compilations_container}>
        <CatalogItemsMap items={dataMap} />
      </div>
    </div>
  );
};

export default Сompilations;
