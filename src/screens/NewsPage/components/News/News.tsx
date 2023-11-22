import React from 'react';
import styles from './News.module.scss';
import NewsItem from '@/screens/NewsPage/components/News/NewsItem/NewsItem';
import { NewsInterface } from '@/models/News/News';

interface NewsProps {
  news: NewsInterface[];
}

const News = (props: NewsProps) => {
  const { news } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.left_container}>
        <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
        <div className={styles.line} />
        <p>Банк БКС ввел новый вклад «Накопительный» в китайских юанях</p>
        <div className={styles.line} />
        <p>Альфа-Банк изменил условия по вкладам</p>
        <div className={styles.line} />
        <p>Сбер обещает массово запустить платежные стикеры в ближайшие дни</p>
        <div className={styles.line} />
        <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
        <div className={styles.line} />
        <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
        <button className={styles.button}>Смотреть все новости</button>
      </div>
      <div className={styles.right_container}>
        <div className={styles.news_container}>
          {news.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
