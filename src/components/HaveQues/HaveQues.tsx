import React from 'react';
import s from './HaveQues.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';

const HaveQues = () => {
  return (
    <div className={s.wrap}>
      <div className={s.info_cont}>
        <div className={s.title}>Остались вопросы?</div>
        <div className={s.sub}>Вам позвонит эксперт из (НАЗВАНИЕ СЕРВИСА)</div>
        <div className={s.inp_cont}>
          <input type='text' placeholder={'Номер телефона'} />
          <BlueBtn text={'Отправить'} width={171} />
        </div>
        <div className={s.check}>
          <CustomCheckboxAround checked={false} />
          <span>
            Предоставляю своё <mark>согласие</mark> на обработку персональных данных
          </span>
        </div>
        <div className={s.check}>
          <CustomCheckboxAround checked={true} />
          <span>
            {' '}
            Предоставляю своё <mark>согласие</mark> на получение рекламы и<br /> информационных сообщений
          </span>
        </div>
      </div>
    </div>
  );
};

export default HaveQues;
