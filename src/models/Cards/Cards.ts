export type CreditCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  limit: number;
  grace_period: number;
  rate: number;
  service_1_year: number;
  follow_up_service: number;
};
export type DebitCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  interest_on_balance: number;
  cash_back: number;
  service_1_year: number;
  follow_up_service: number;
};

export type CardItemT = {
  price: number;
  id: number;
  cashback: number;
  max_amount?: any;
  timeframe_min?: any;
  name: string;
  bank_id: number;
  type: string;
  max_points: number;
  min_amount?: any;
  rate: number;
  timeframe_max?: any;
  description: string;
  rating: number;
};

export type CardItemsResponseT = {
  cards: CardItemT[];
  result: boolean;
  len: number;
};
export interface CardItemResposeT {
  card: CardItemT;
  result: boolean;
}
