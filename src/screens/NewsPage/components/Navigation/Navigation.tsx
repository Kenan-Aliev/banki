import React from 'react';
import styles from './Navigation.module.scss';
import s from '@/screens/NewsPage/NewsPage.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import data from '@/core/data/index';

type Props = {
  setCurrent?: React.Dispatch<string>;
  current?: string;
};

const Navigation = ({ setCurrent, current }: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation_container}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.grey_text}>Инвестиции</p>
      </div>
      <div className={styles.text_container}>
        <p className={styles.blue_text}>Новости</p>
        <p className={styles.text}>
          Как происходящее в мире влияет на ваши финансы. <br /> Советы экспертов, аналитика, инструкции,
          полезные подборки, <br /> личный опыт, лайфхаки.
        </p>
      </div>
      <div className={styles.button}>
        Читать в Telegram
        <svg xmlns='http://www.w3.org/2000/svg' width='19' height='16' viewBox='0 0 19 16' fill='none'>
          <path
            d='M18.6278 1.38147C18.7703 0.460935 17.895 -0.265653 17.0765 0.0937092L0.774357 7.25125C0.187397 7.50896 0.230332 8.39801 0.839098 8.59187L4.20102 9.66249C4.84266 9.86682 5.53745 9.76117 6.09775 9.37407L13.6774 4.13745C13.906 3.97954 14.1551 4.30453 13.9598 4.50586L8.50384 10.131C7.97458 10.6767 8.07963 11.6013 8.71624 12.0005L14.8248 15.8312C15.5099 16.2608 16.3913 15.8292 16.5195 15.0013L18.6278 1.38147Z'
            fill='white'
          />
        </svg>
      </div>
      <div className={s.cont}>
        <ChoiseItemsMap
          setActive={setCurrent}
          choiseItems={data.NewsPage.chooseIntro}
          currentChoise={current}
        />
      </div>
    </div>
  );
};

export default Navigation;
