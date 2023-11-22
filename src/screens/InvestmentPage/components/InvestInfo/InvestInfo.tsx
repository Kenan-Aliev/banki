import React from 'react';
import s from './InvestInfo.module.scss';
import Image, { StaticImageData } from 'next/image';
import info_img from '@/assets/icons/info_img.png';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import BankImgItemSlideMap from '@/components/Banki/BankiImg/BankImgItemSlideMap/BankImgItemSlideMap';

type Props = {
  banks: StaticImageData[];
};
const InvestInfo = ({ banks }: Props) => {
  return (
    <div className={s.wrapp}>
      <div className={s.l}>
        <div className={s.title}>Альтернатива вкладам</div>
        <div className={s.sub}>
          Готовые инвестиционные решения для инвесторов с разными задачами и суммами вложений. В них входят:
          модельные портфели и инвестиционные стратегии с доверительным управлением, инвестиции с защитой
          капитала и страхованием жизни, предложения с рекомендациями для экономии времени и повышения
          эффективности инвестирования. Также это отличный вариант для новичков, которые пока не уверены в
          своей инвестиционной тактике.
        </div>
        <div className={s.info_items}>
          <div className={s.info_item}>
            <Image src={info_img} alt={'info img'} />
            <div className={s.inf_title}>Кешбэк до 23 000 ₽ за инвестиции</div>
            <div className={s.inf_sub}>
              Возвращайте кешбэк 2,3% за покупку ценных бумаг. Получайте потенциальный доход от ваших
              инвестиций.
            </div>
            <WhiteBorderBlueBtn text={'Открыть счёт'} />
          </div>
          <div className={s.info_item}>
            <Image src={info_img} alt={'info img'} />
            <div className={s.inf_title}>Кешбэк до 23 000 ₽ за инвестиции</div>
            <div className={s.inf_sub}>
              Возвращайте кешбэк 2,3% за покупку ценных бумаг. Получайте потенциальный доход от ваших
              инвестиций.
            </div>
            <WhiteBorderBlueBtn text={'Открыть счёт'} />
          </div>
        </div>
        <BlueBtn text={'Смотреть все варианты'} width={612} />
      </div>
      <div className={s.line}></div>
      <div className={s.r}>
        <div className={s.title}>
          Паевые
          <br /> инвестиционные фонды (ПИФы)
        </div>
        <div className={s.sub}>
          Оптимальный вариант для начинающих инвесторов, у которых не хватает времени и знаний для поиска
          инвестиционных идей. Как это работает: покупая долю в фонде, инвестор распределяет свои деньги сразу
          по нескольким активам, которыми управляют профессионалы под присмотром ЦБ. Доход управляющего фондом
          привязан к объему активов под управлением, поэтому ему выгодно, чтобы стоимость активов росла. А
          вместе с ней будет расти и стоимость акций фонда, следовательно, и ваша прибыль.
        </div>
        <div className={s.cont_bank}>
          <BankImgItemSlideMap images={banks} />
        </div>
        <BlueBtn text={'Смотреть все ПИФы'} width={484} />
      </div>
    </div>
  );
};

export default InvestInfo;
