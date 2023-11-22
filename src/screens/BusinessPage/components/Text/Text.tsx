import React from 'react';
import styles from './Text.module.scss';

const Text = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.main_text}>Страхование</p>
      <p className={styles.text}>
        Выгодные программы страхования для юридических лиц. Индивидуальные условия страхования вашего бизнеса
        и сотрудников на случай непредвиденных обстоятельств.
      </p>
    </div>
  );
};

export default Text;
