import React from 'react';
import s from './ApplicationItem.module.scss';

type Props = {
  name: string;
  date: string;
  status: number;
  contact: string;
};
const ApplicationItem = ({ date, status, name, contact }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.info_m}>
        <div className={s.info}>
          <span>{name}</span>
          <span>
            Дата подачи заявки: <mark>{date}</mark>
          </span>
        </div>
        {status === 0 && <button className={s.btn_zero}>Одобрено</button>}
        {status === 1 && <button className={s.btn_one}>В обработке</button>}
        {status === 2 && <button className={s.btn_two}>Отклонено</button>}
      </div>
      <div className={s.contact}>
        Контактное лицо учреждения – <mark>{contact}</mark>
      </div>
    </div>
  );
};

export default ApplicationItem;
