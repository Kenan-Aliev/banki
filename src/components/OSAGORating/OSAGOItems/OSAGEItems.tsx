import React from 'react';
import styles from './OSAGOItems.module.scss';

const OsageItems = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.name_container}>
        <p className={styles.main_text}>Локо-Банк</p>
        <p className={styles.little_text}>Добро пожаловать. Локо</p>
      </div>
      <div className={styles.rating_container}>
        <p className={styles.top_text}>Рейтинг</p>
        <p className={styles.text}>100%</p>
      </div>
      <div className={styles.feedback_container}>
        <p className={styles.top_text}>Отзывы</p>
        <p className={styles.text}>14 560</p>
      </div>
      <div className={styles.answered_container}>
        <p className={styles.top_text}>Ответы компании</p>
        <p className={styles.text}>20 872</p>
      </div>
      <div className={styles.comleted_container}>
        <p className={styles.top_text}>Решено проблем</p>
        <p className={styles.text}>593</p>
      </div>
    </div>
  );
};

export default OsageItems;
