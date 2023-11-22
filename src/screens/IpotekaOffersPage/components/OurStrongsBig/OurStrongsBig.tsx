import React from 'react';
import styles from './OurStrongsBig.module.scss';
import { nanoid } from 'nanoid';

const OurStrongsBig = () => {
  const data = [
    {
      number: '01',
      name: 'Бесплатная услуга',
      text: 'Наши услуги абсолютно бесплатны для наших клиентов. Более 100 000 человек каждый месяц находят ипотеку через наш сервис.',
    },
    {
      number: '02',
      name: 'Сэкономьте свое время',
      text: 'Вам не нужно тратить время на просмотр огромного каталога предложений и самим разбираться с условиями банков.',
    },
    {
      number: '03',
      name: 'Индивидуальный подход',
      text: 'На основе кредитного рейтинга и требований банков мы подберем только подходящие для вас предложения с высокой вероятностью одобрения.',
    },
    {
      number: '04',
      name: 'Ваши данные под защитой',
      text: 'Вы сами решаете в какие банки отправлять заявку. Ваши личные данные никому не передаются без вашего ведома.',
    },
  ];
  return (
    <div className={styles.main_contianer}>
      <div className={styles.text_container}>
        <p>В чем наши</p>
        <p className={styles.blue}>преимущества</p>
      </div>
      <div className={styles.items_container}>
        {data.map((el) => (
          <div key={nanoid()} className={styles.item_cont}>
            <div className={styles.top_cont}>
              <p className={styles.text_blue}>{el.number}</p>
              <p className={styles.text}>{el.name}</p>
            </div>
            <div className={styles.text_container}>{el.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStrongsBig;
