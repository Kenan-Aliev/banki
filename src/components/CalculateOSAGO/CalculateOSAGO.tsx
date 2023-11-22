import React from 'react';
import styles from './CalculateOSAGE.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const CalculateOSAGO = () => {
  return (
    <div className={styles.container}>
      <p className={styles.main_text}>
        Калькулятор <span>ОСАГО</span>
      </p>
      <p className={styles.text}>Рассчитайте цену и оформите полис онлайн</p>
      <div className={styles.form_container}>
        <p className={styles.text}>Собственник</p>
        <input className={styles.input} placeholder={'Город регистрации'} />
        <p className={styles.text}>Автомобиль</p>
        <div className={styles.input_container}>
          <input className={styles.input} placeholder={'Город регистрации'} style={{ width: '327px' }} />
          <input className={styles.input} placeholder={'Модель'} style={{ width: '212px' }} disabled={true} />
          <input
            className={styles.input}
            placeholder={'Год выпуска'}
            style={{ width: '223px' }}
            disabled={true}
          />
          <input
            className={styles.input}
            placeholder={'Мощность, л. с.'}
            style={{ width: '371px' }}
            disabled={true}
          />
        </div>
        <p className={styles.text}>Водители</p>
        <div className={styles.input_container}>
          <button className={styles.button} disabled={true}>
            1 или более
          </button>
          <button className={styles.button}>Неограниченно</button>
        </div>
        <div className={styles.input_container}>
          <input
            className={styles.input}
            placeholder={'Минимальный возраст водителя'}
            style={{ width: '327px', marginBottom: '0px' }}
          />
          <input
            className={styles.input}
            placeholder={'Минимальный стаж вождения'}
            style={{ width: '327px', marginBottom: '0px' }}
          />
          <div className={styles.select}>
            <div>
              <p className={styles.grey_text}>Сколько лет без ДТП (КБМ)</p>
              <p className={styles.text}>0 лет - КБМ 1.17</p>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
              <path
                d='M12.6966 6.65039L8.02995 10.6504L6.86328 9.65039M3.36328 6.65039L4.91884 7.98372'
                stroke='#212121'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <p className={styles.text_little}>
          КБМ влияет на цену полиса и учитывает историю ДТП по собственной вине водителя
        </p>
      </div>
      <BlueBtn text={'Расчитать стоимость'} width={295} height={60} fSize={20} />
    </div>
  );
};

export default CalculateOSAGO;
