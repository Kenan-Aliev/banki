import instance from '@/core/services/index';
import { NewsCategory, NewsInterface } from '@/models/News/News';
import { getNewsT } from '@/models/Services';

const NewsApi = {
  getNews(params: getNewsT) {
    return instance.get<NewsInterface[]>(
      '/news/list/', {
      params
    }
    );
  },

  getNewsCategories() {
    return instance.get<NewsCategory[]>('/news/type/list/');
  },
};

export default NewsApi;
