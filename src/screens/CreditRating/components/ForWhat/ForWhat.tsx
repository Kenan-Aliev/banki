import React from 'react';
import s from './ForWhat.module.scss';
import for_what from '@/assets/icons/for_what_2.svg';
import for_what_2 from '@/assets/icons/for_what_1.svg';
import Image from 'next/image';

const ForWhat = () => {
  return (
    <div className={s.forWhat}>
      <h2 className={s.title}>
        Для чего нужен <mark>кредитный рейтинг?</mark>
      </h2>
      <div className={s.items_cont}>
        <div className={s.item}>
          <Image alt={'icon'} src={for_what} style={{ marginBottom: '10px', marginTop: '20px' }} />
          <h3 className={s.title}>Оцените свои шансы на получение кредита</h3>
          <p className={s.sub}>
            Кредитный рейтинг - это балл, рассчитанный на основе кредитной истории заемщика. Чем выше балл,
            тем выше вероятность получить кредит.
          </p>
        </div>
        <div className={s.item}>
          <Image alt={'icon'} src={for_what_2} />
          <div className={s.title}>Экономьте время</div>
          <p className={s.sub}>
            После расчета кредитного рейтинга мы бесплатно подберем только те банки, которые готовы выдать вам
            кредит.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForWhat;
