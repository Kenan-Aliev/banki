import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import { BrokerItemT } from '@/models/Investment/Investment';
import mockBrokerImage from '@/assets/icons/banki_icon/ifk_solid.svg';

interface BrokerItemProps {
  item: BrokerItemT;
}

const BrokerItem = (props: BrokerItemProps) => {
  const {
    item: { name, description },
  } = props;

  return (
    <div className={s.loan_org}>
      <Image alt={'icon'} src={mockBrokerImage} />
      <div className={s.info}>
        <div>{name}</div>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default BrokerItem;
