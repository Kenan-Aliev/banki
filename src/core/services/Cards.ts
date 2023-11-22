import instance from '@/core/services/index';
import { getCardsI } from '@/models/Services';
import { CardItemResposeT, CardItemsResponseT } from '@/models/Cards/Cards';

const CardsApi = {
  getCards({ bank, page, limit, sort, sort_type }: getCardsI) {
    return instance.get<CardItemsResponseT>(
      `cards?bank=${bank}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getCard({ card }: { card: number }) {
    return instance.get<CardItemResposeT>(`card?card=${card}`);
  },
};

export default CardsApi;
