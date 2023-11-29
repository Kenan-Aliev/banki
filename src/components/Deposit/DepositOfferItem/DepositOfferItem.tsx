/* eslint-disable react/display-name */
import React, { useState } from 'react';
import s from './DepositOfferItem.module.scss';
import Image from 'next/image';
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockBankImage from '@/assets/icons/banki_icon/loco.svg';
import { DepositItemT } from '@/models/Deposit/Deposit';
import Application from '@/components/Application/Application';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { currencies } from '@/core/data/currency';
import { Box } from '@mui/material';

interface DepositOfferItemProps {
  item: DepositItemT;
  openChildren?: (bankId: number) => void;
  child?: boolean;
  count?: number
  activeCurrency: number
}

const DepositOfferItem = React.memo((props: DepositOfferItemProps) => {
  const {
    item: { name, rate, min_amount, max_amount, timeframe_min, timeframe_max, description, id, bank, bank_id },
    openChildren,
    child,
    count,
    activeCurrency
  } = props;

  const [openApplicationForm, setOpenApplicationForm] = useState(false)

  const currency = currencies.find((c) => c.id == activeCurrency)?.text

  const handleChangeApplicationForm = () => {
    setOpenApplicationForm(!openApplicationForm)
  }

  return (
    <div className={s.item}>
      <Application
        open={openApplicationForm}
        handleClose={handleChangeApplicationForm}
        productId={id}
        productType='deposit' />
      <div className={s.up}>
        <div className={s.info}>
          <Image src={bank.bank_logo ?? mockBankImage} alt={'иконка банка'} width={50} height={50} />
          <div className={s.name}>
            <div>{bank.bank_name}</div>
            <p>{name}</p>
          </div>
          <div className={s.about_b}>
            <div className={s.info_item}>
              <div className={s.title}>
                Ставка
                <Image src={ques_I} alt={'иконка вопроса'} />
              </div>
              <span>{rate}%</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Срок</div>
              <span>
                {timeframe_min} — {timeframe_max} мес.
              </span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Сумма</div>
              <span>
                {min_amount} — {max_amount} {currency}
              </span>
            </div>
          </div>
        </div>
        <button className={s.btn_dung}>
          <Image src={dang_i} alt='иконка опасности' />
        </button>
      </div>
      <div className={s.down}>
        {count && count > 0
          ? (
            <div className={s.count} onClick={(e) => openChildren(+bank_id)}>
              Ещё {count} вкладов
              {child ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          )
          : null}
        {/* <div className={s.blue_charc}>
          {['Партнер раздела'].map((el, index) => {
            if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14} />;
          })}
        </div> */}

        <BlueBtn text={'Открыть вклад'} width={222} fSize={20} onClick={handleChangeApplicationForm} />
      </div>
    </div>
  );
});

export default DepositOfferItem;
