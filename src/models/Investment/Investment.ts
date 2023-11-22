export type InvestmentNewsItemT = {
  subtitle: string;
  id: number;
  image: string;
  title: string;
  text: string;
};

export interface InvestNewsResponseT {
  cards: InvestmentNewsItemT[];
  result: boolean;
  len: number;
}

export interface InvestNewsItemResponseT {
  card: InvestmentNewsItemT[];
  result: boolean;
}

export interface MarketItemT {
  name: string;
  description: string;
  id: number;
}

export interface InvestMarketsResponseT {
  markets: MarketItemT[];
  result: boolean;
  len: number;
}

export interface BrokerItemT {
  id: number;
  license: string;
  name: string;
  description: string;
  bank_id: number;
  image: string;
  market: number;
  link: string;
  rating: number;
}

export interface BrokersResponseT {
  brokers: BrokerItemT[];
  result: boolean;
  len: number;
}

export interface TariffItemT {
  broker_id: number;
  name: string;
  payment: number;
  description: string;
  commission: number;
  id: number;
  link: string;
  rating: number;
}

export interface BrokerItemResponseT {
  broker: BrokerItemT;
  tariffs: TariffItemT[];
  result: boolean;
}

export interface TariffItemResponseT {
  tariff: TariffItemT;
  result: boolean;
}
