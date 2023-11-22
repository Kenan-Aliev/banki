import React from 'react';
import styles from './Question.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const Question = () => {
  return (
    <div className={styles.main_container}>
      <p>Вопрос об ипотеке эксперту </p>
      <button className={styles.btn}>Посмотреть ответы</button>
      <BlueBtn text={'Задать вопрос'} width={230} height={40} fSize={16} />
    </div>
  );
};

export default Question;
