'use client'

import React, { useState } from 'react';
import s from './HowWorks.module.scss';
import Image from 'next/image';
import o1 from '@/assets/icons/serv_o.svg';
import o2 from '@/assets/icons/serv_d.png';
import Application from '@/components/Application/Application';
import Link from 'next/link';
import arrow from "@/assets/icons/credits_how_it_works_arrow.svg"
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';

const HowWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [succesModal, setSuccessModal] = useState(false)

  const handleChangeOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeOpenModal()
    handleChangeSuccessModal()
  }
  return (
    <div className={s.wrapper}>
      <Application
        handleClose={handleChangeOpenModal}
        open={isModalOpen}
        onSuccessSendApplication={onSuccessSendApplication}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
      />
      <div className={s.arrow}>
        <Image src={arrow} alt="Стрелка" />
      </div>
      <h3 className={s.title}>
        <mark>Как работает </mark>
        наш сервис
      </h3>
      <div className={s.cont}>
        <div className={s.item}>
          <div className={s.main}>
            <Image src={o1} alt={''} />
            <div className={s.text}>
              Нажмите <mark onClick={handleChangeOpenModal}>«Продолжить»</mark> и заполните анкету на vsebanki.kg.
              <br />
              На основе вашей анкеты мы найдем банки, которые одобрят
              <br /> кредит. <mark>Это займет не более пяти минут.</mark>
            </div>
          </div>
          {/* <div className={s.info}>
            Сервис «Мастер подбора кредита» осуществляет бесплатный поиск выгодных предложений с учетом
            кредитной истории заемщика. Процентные ставки и срок погашения кредита индивидуальны, зависят от
            выбранного банка и могут составлять от 7,77% годовых до 40,4% годовых, срок от 1 месяца до 20 лет.
          </div> */}
        </div>
        <div className={s.item}>
          <div className={s.main}>
            <Image src={o2} alt={''} />
            <div className={s.text}>
              Ознакомьтесь с различными типами кредитов на нашем сайте.
            </div>
            <ul className={s.list}>
              <li>
                <Link href='/credits/consumer-credits'>
                  Потребительские кредиты
                </Link>
              </li>
              <li>
                <Link href='/ipoteka/credits'>
                  Ипотечные кредиты
                </Link>
              </li>
              <li>
                <Link href='/credits/autocredit'>
                  Автокредиты
                </Link>
              </li>
              <li>
                <Link href='/credits/microloans'>
                  Микрозаймы
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className={s.info}>
            Пример расчета:При сумме кредита 25 000 руб. сроком на 3 года по ставке 11.5% годовых ежемесячный
            платеж составит 824 руб, а общая переплата — 4 664 руб. Адрес: 117638, г. Москва, улица Одесская,
            д. 2, этаж 19
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
