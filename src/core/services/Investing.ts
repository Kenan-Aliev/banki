import instance from '@/core/services/index';
import { getBrokers, getInvestNewsI, getMarketsI } from '@/models/Services';
import {
  BrokerItemResponseT,
  BrokersResponseT,
  InvestMarketsResponseT,
  InvestNewsItemResponseT,
  InvestNewsResponseT,
  TariffItemResponseT,
} from '@/models/Investment/Investment';

const InvestingApi = {
  getInvestmentNews({ page, sort, sort_type, limit }: getInvestNewsI) {
    return instance.get<InvestNewsResponseT>(
      `investing/news?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getInvestmentNewsItem({ newId }: { newId: number }) {
    return instance.get<InvestNewsItemResponseT>(`investing/new?new=${newId}`);
  },
  getMarkets({ sort, sort_type, limit, page, search }: getMarketsI) {
    return instance.get<InvestMarketsResponseT>(
      `markets?page=${page}&search=${search}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getBrokers({ sort_type, sort, page, limit, search, market }: getBrokers) {
    return instance.get<BrokersResponseT>(
      `brokers?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}&market=${market}&search=${search}`,
    );
  },
  getBroker({ brokerId }: { brokerId: number }) {
    return instance.get<BrokerItemResponseT>(`broker?broker=${brokerId}`);
  },
  getTariff({ tariffId }: { tariffId: number }) {
    return instance.get<TariffItemResponseT>(`tariff?tariff=${tariffId}`);
  },
};

export default InvestingApi;
