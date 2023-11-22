import React from 'react';
import styles from './index.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Image from 'next/image';
import image from '@/assets/icons/image.png';
import MortgageSpecialItem from 'src/components/mortgages/MortgageSpecialItem';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';

interface MortgageSpecialListProps {
  mortgages: MortgageItemT[];
}

const MortgageSpecialList = (props: MortgageSpecialListProps) => {
  const { mortgages } = props;

  return (
    <div className={styles.container}>
      <div className={styles.map_cont}>
        {mortgages.map((item) => (
          <MortgageSpecialItem key={item.id} item={item} />
        ))}
        <Image src={image} alt={'asd'} height={307} width={279} className={styles.image} />
        <Image src={image} alt={'asd'} height={307} width={279} className={styles.image} />
      </div>
      <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60} />
    </div>
  );
};

export default MortgageSpecialList;
