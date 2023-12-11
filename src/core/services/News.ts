import instance from '@/core/services/index';
import { NewsInterface } from '@/models/News/News';
import { getNewsT } from '@/models/Services';

const NewsApi = {
  getNews(params: getNewsT) {
    return instance.get<NewsInterface[]>(
      '/news/list/', {
      params
    }
    );
  },
};

export default NewsApi;
