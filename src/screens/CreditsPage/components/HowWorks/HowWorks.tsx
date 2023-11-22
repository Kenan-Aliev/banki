import React from 'react';
import s from './HowWorks.module.scss';
import Image from 'next/image';
import o1 from '@/assets/icons/serv_o.svg';
import o2 from '@/assets/icons/serv_d.png';

const HowWorks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>Как работает </mark>
        наш сервис
      </div>
      <div className={s.cont}>
        <div className={s.item}>
          <div className={s.main}>
            <Image src={o1} alt={''} />
            <div className={s.text}>
              Нажмите <mark>«Продолжить»</mark> и заполните анкету на Банки.ру.
              <br />
              На основе вашей анкеты мы найдем банки, которые одобрят
              <br /> кредит. <mark>Это займет не более пяти минут.</mark>
            </div>
          </div>
          <div className={s.info}>
            Сервис «Мастер подбора кредита» осуществляет бесплатный поиск выгодных предложений с учетом
            кредитной истории заемщика. Процентные ставки и срок погашения кредита индивидуальны, зависят от
            выбранного банка и могут составлять от 7,77% годовых до 40,4% годовых, срок от 1 месяца до 20 лет.
          </div>
        </div>
        <div className={s.item}>
          <div className={s.main}>
            <Image src={o2} alt={''} />
            <div className={s.text}>
              Выберите предложение, которое вас устроит и обратитесь <br />в банк для получения кредита.
            </div>
          </div>
          <div className={s.info}>
            Пример расчета:При сумме кредита 25 000 руб. сроком на 3 года по ставке 11.5% годовых ежемесячный
            платеж составит 824 руб, а общая переплата — 4 664 руб. Адрес: 117638, г. Москва, улица Одесская,
            д. 2, этаж 19
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
