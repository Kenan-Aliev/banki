import React from 'react';
import styles from './Navigation.module.scss';
import Parametrs from '@/screens/CreditsIpotekaPage/components/Navigation/Parametrs/Parametrs';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Navigation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation}>
        <p>Главная</p>
        <p>/</p>
        <p className={styles.grey_text}>Ипотека</p>
      </div>
      <div className={styles.main_text_container}>
        <div className={styles.main_text_cont}>
          <p>Ипотека со скидкой от застройщиков</p>
          <p className={styles.blue_text}>в Бишкеке</p>
        </div>
        <div className={styles.little_text}>
          Ипотеку от застройщиков с выгодными условиями в 2023 можно выбрать онлайн на <br /> маркетплейсе
          (НАЗВАНИЕ СЕРВИСА). <br /> <br /> Мы собрали актуальную информацию по действующим кредитным
          программам — ставки, условия, доступные лимиты и многое другое. Принять решение помогут отзывы
          клиентов, рейтинги финансовых организаций и экспертные материалы.
        </div>
      </div>
      <Parametrs />
      <div className={styles.choose_container}>
        <div className={styles.inputs}>
          <div className={styles.input_cont}>
            <input type={'checkbox'} className={styles.input} />
            Есть 1 ребёнок после 2018 года
          </div>
          <div className={styles.input_cont}>
            <input type={'checkbox'} className={styles.input} />2 ребёнка младше 18 лет
          </div>
        </div>
        <div className={styles.text_container}>
          <div className={styles.item_cont}>
            <div className={styles.item}>
              <p className={styles.grey_text_item}>Стоимость жилья, ₽</p>
              <p className={styles.text_item}>4 000 000</p>
            </div>
            <button className={styles.button}>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
                <path
                  d='M9.99609 14C11.6529 14 12.9961 15.3431 12.9961 17C12.9961 18.6568 11.6529 20 9.99609 20C8.33924 20 6.99609 18.6568 6.99609 17C6.99609 15.3431 8.33924 14 9.99609 14Z'
                  stroke='#121212'
                  strokeWidth='1.5'
                />
                <path
                  d='M14.9961 3.99998C13.3392 3.99998 11.9961 5.34312 11.9961 6.99998C11.9961 8.65683 13.3392 9.99998 14.9961 9.99998C16.6529 9.99998 17.9961 8.65683 17.9961 6.99998C17.9961 5.34312 16.6529 3.99998 14.9961 3.99998Z'
                  stroke='#121212'
                  strokeWidth='1.5'
                />
                <path
                  d='M11.4962 7.00001L6.49619 7M3.49611 7.00001L2.49609 7.00001'
                  stroke='#121212'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
                <path
                  d='M13.4961 17L18.4961 17M21.4961 17L22.4962 17'
                  stroke='#121212'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
                <path d='M2.49609 17L6.49609 17' stroke='#121212' strokeWidth='1.5' strokeLinecap='round' />
                <path d='M22.4961 7L18.4961 7' stroke='#121212' strokeWidth='1.5' strokeLinecap='round' />
              </svg>
              Параметры
            </button>
          </div>
          <div className={styles.item_cont}>
            <div className={styles.item}>
              <p className={styles.grey_text_item}>Первоначальный взнос, ₽</p>
              <p className={styles.text_item}>2 500 000</p>
            </div>
            <BlueBtn text={'Подобрать'} width={173} height={60} fSize={20} />
          </div>
          <div className={styles.item_cont}>
            <div className={styles.item_with_img}>
              <div>
                <p className={styles.grey_text_item}>Срок</p>
                <p className={styles.text_item}>20 лет</p>
              </div>
              <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
                <path
                  d='M13.6322 6L8.96549 10L7.79883 9M4.29883 6L5.85438 7.33333'
                  stroke='#212121'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
