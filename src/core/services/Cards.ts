import instance from '@/core/services/index';
import { getCardsI } from '@/models/Services';
import { CardItemsResponseT } from '@/models/Cards/Cards';

const CardsApi = {
  getCards(params: getCardsI) {
    return instance.get<CardItemsResponseT>(
      '/card/', {
      params
    }
    );
  },
};

export default CardsApi;
