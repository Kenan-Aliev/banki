import instance from '@/core/services/index';
import { getCardsI } from '@/models/Services';
import { CardItemsResponseT, TopCardsResponseT } from '@/models/Cards/Cards';

const CardsApi = {
  getCards(params: getCardsI) {
    return instance.get<CardItemsResponseT>(
      '/card/', {
      params
    }
    );
  },
  getTopCreditCards() {
    return instance.get<TopCardsResponseT>('/card/top-credit/');
  },
  getTopDebitCards() {
    return instance.get<TopCardsResponseT>('/card/top-debit/');
  }
};

export default CardsApi;
