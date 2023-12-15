import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockBankImage from '@/assets/icons/banki_icon/loco.svg';
import { CreditItemT } from '@/models/Credits/Credits';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface CreditBankItemProps {
  item: CreditItemT;
  openChildren?: (bankId: number) => void;
  child?: boolean;
  count?: number
}

const CreditBankItem = (props: CreditBankItemProps) => {
  const {
    item: { bank, bank_title, loanName, loan_term, loan_amount },
    openChildren,
    child,
    count
  } = props;

  return (
    <div className={s.item}>
      <div className={s.up}>
        <div className={s.info}>
          <Image src={mockBankImage} alt={'иконка банка'} />
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
              <span>10%</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Срок</div>
              <span>
                {loan_term.min} — {loan_term.max} мес.
              </span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Сумма</div>
              <span>
                {loan_amount.min} — {loan_amount.max} ₽
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
            <div className={s.count} onClick={(e) => openChildren(bank)}>
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
        <BlueBtn text={'Открыть вклад'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default CreditBankItem;
