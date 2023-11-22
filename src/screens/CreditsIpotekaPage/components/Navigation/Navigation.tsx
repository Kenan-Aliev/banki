import React from 'react';
import styles from './Navigation.module.scss';
import Parametrs from '@/screens/CreditsIpotekaPage/components/Navigation/Parametrs/Parametrs';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import CustomBtnChange from '@/UI/CustomBtnChange/CustomBtnChange';

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
          <p>Ипотека</p>
          <p className={styles.blue_text}>в Бишкеке</p>
        </div>
        <div className={styles.little_text}>
          На (НАЗВАНИЕ СЕРВИСА) можно с легкостью подобрать ипотечный кредит и оформить онлайн-заявку. Вы
          получите ипотеку на самых выгодных условиях*. У нас большая база ипотечных предложений от разных
          банков. Также на сайте вы найдете отзывы реальных клиентов и заключения экспертов (НАЗВАНИЕ СЕРВИСА)
          с описанием преимуществ и недостатков каждого предложения. Это позволит найти подходящий ипотечный
          кредит и быть уверенным в своем выборе!
        </div>
      </div>
      <Parametrs />
      <div className={styles.choose_container}>
        <div className={styles.inputs}>
          <div className={styles.input_cont}>
            <CustomCheckboxAround checked={true} />
            Есть 1 ребёнок после 2018 года
          </div>
          <div className={styles.input_cont}>
            <CustomCheckboxAround checked={true} />2 ребёнка младше 18 лет
          </div>
        </div>
        <div className={styles.text_container}>
          <CustomInputTitle width={385} title={'Стоимость жилья, ₽'} />
          <CustomBtnChange title={'Параметры'} />
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
