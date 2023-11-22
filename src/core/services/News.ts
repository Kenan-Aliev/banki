import instance from '@/core/services/index';
import { NewItemReponseT, NewsResponseT } from '@/models/News/News';
import { getNews } from '@/models/Services';

const NewsApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getNews({ search, page, sort, sort_type, limit }: getNews) {
    return instance.get<NewsResponseT>(
      `news?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getNewItem({ newId }: { newId: number }) {
    return instance.get<NewItemReponseT>(`new?new=${newId}`);
  },
};

export default NewsApi;
