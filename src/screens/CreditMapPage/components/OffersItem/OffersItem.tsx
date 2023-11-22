import React from 'react';
import styles from './OffersItem.module.scss';
import cart from '../../../../assets/icons/card.png';
import Arrow from './Image';
import CheckImage from '@/screens/CreditMapPage/components/OffersItem/CheckImage';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import warningImg from '@/assets/icons/warning_icon.png';
import { CreditCardT } from '@/models/Cards/Cards';

interface OffersItemProps {
  item: CreditCardT;
  arrChildren?: [];
  openChildren?: (e) => void;
  child?: boolean;
}

const OffersItem = (props: OffersItemProps) => {
  const { item, arrChildren, openChildren, child } = props;

  return (
    <div className={styles.main_container}>
      <div>
        <Image src={cart} alt='Карта' />
        {!child && arrChildren.length > 0 && (
          <div className={styles.count_cart} onClick={(e) => openChildren(e)}>
            <p>Еще {arrChildren ? arrChildren.length : 0} карты</p>
            <Arrow />
          </div>
        )}
      </div>
      <div className={styles.bank_container}>
        <p className={styles.bold_text}>{item.bank_name}</p>
        <p className={styles.grey_text}>{item.name}</p>
      </div>
      <div className={styles.types_container}>
        <div className={styles.top_container}>
          <div>
            <p className={styles.blue_text}>Льготный период</p>
            <p className={styles.text}>до 55 дней</p>
          </div>
          <div>
            <p className={styles.blue_text}>Баллы</p>
            <p className={styles.text}>до 6000/мес.</p>
          </div>
          <div>
            <p className={styles.blue_text}>Обслуживание</p>
            <p className={styles.text}>590 ₽ в год </p>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_container_active_container}>Партнер раздела</div>
          <div className={styles.bottom_container_container}>Партнер раздела</div>
          <div className={styles.bottom_container_container}>На любые цели</div>
        </div>
      </div>
      <div className={styles.get_cart_container}>
        <div className={styles.top_container}>
          <div className={styles.check_container}>
            <CheckImage />
            <p>Сравнить</p>
          </div>
          <div className={styles.warning_container}>
            <Image src={warningImg} alt={'warning'} className={styles.image} />
          </div>
        </div>
        <BlueBtn text={'Оформить карту'} width={222} height={60} fSize={20} />
      </div>
    </div>
  );
};

export default OffersItem;
