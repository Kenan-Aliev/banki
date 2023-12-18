'use client'

import React, { useState } from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockBankImage from '@/assets/icons/banki_icon/loco.svg';
import { CreditItemT } from '@/models/Credits/Credits';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CreditInfoModal from '../CreditInfoModal';
import { currencies } from '@/core/data/currency';
import { baseUrl } from '@/core/const/baseUrl';

interface CreditBankItemProps {
  item: CreditItemT;
  openChildren?: (bankId: number) => void;
  child?: boolean;
  count?: number
  activeCurrency?: string
}

const CreditBankItem = (props: CreditBankItemProps) => {
  const {
    item: { currency: creditCurrency, bank, bank_title, loanName, loan_term, loan_amount, id, min_rating, max_rating, bank_logo },
    openChildren,
    child,
    count,
    activeCurrency
  } = props;

  const [infoModal, setInfoModal] = useState(false)

  const currency = currencies.find((c) => c.value == activeCurrency)?.text
  const handleChangeInfoModal = () => {
    setInfoModal(!infoModal)
  }

  return (
    <div className={s.item}>
      {
        infoModal && <CreditInfoModal
          open={infoModal}
          handleClose={handleChangeInfoModal}
          bank={{
            id: bank,
            name: bank_title
          }}
          loan={{
            id,
            name: loanName
          }}
        />
      }
      <div className={s.up}>
        <div className={s.info}>
          <Image src={baseUrl + bank_logo} alt={'иконка банка'} width={50} height={50} />
          <div className={s.name}>
            <div>{bank_title}</div>
            <span>{loanName}</span>
          </div>
          <div className={s.about_b}>
            <div className={s.info_item}>
              <div className={s.title}>
                Ставка
                <Image src={ques_I} alt={'иконка вопроса'} />
              </div>
              <span>{min_rating === max_rating ? min_rating : `${min_rating} - ${max_rating}`} %</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Срок</div>
              <span>
                {loan_term.min === 0 ? `до ${loan_term.max}` : `${loan_term.min} — ${loan_term.max} `} мес.
              </span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Сумма</div>
              <span>
                {loan_amount.min} — {loan_amount.max} {activeCurrency ? currency : creditCurrency}
              </span>
            </div>
          </div>
        </div>
        <button className={s.btn_dung} onClick={handleChangeInfoModal}>
          <Image src={dang_i} alt='иконка опасности' />
        </button>
      </div>
      <div className={s.down}>
        {count && count > 0
          ? (
            <div className={s.count} onClick={(e) => openChildren(bank)}>
              Ещё {count} кредитов
              {child ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          )
          : null}

        {/* <div className={s.blue_charc}>
          {['Партнер раздела'].map((el, index) => {
            if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14} />;
          })}
        </div> */}
        <BlueBtn text={'Онлайн заявка'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default CreditBankItem;
