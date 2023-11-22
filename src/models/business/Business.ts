export type SlideItemT = {
  title: string;
  subtitle: string;
};

export type BusinessCardsT = {
  license: number;
  id: number;
  form?: any;
  address: string;
  region: string;
  since?: any;
  image: string;
  name: string;
  phones: string;
  rating: number;
};
export type BusinessCardsResponseT = {
  cards: BusinessCardsT[];
  result: boolean;
  len: number;
};

export interface BusinessCardItemResponseT {
  card: BusinessCardItemT;
  result: boolean;
}

export interface BusinessCardItemT {
  price: number;
  id: number;
  cashback: number;
  min_amount: string;
  rate: number;
  timeframe_max: string;
  description: string;
  max_points: number;
  bank_id: number;
  type: string;
  max_amount: string;
  timeframe_min: string;
  name: string;
  rating: number;
}

export interface BusinessCreditsResponseT {
  cards: BusinessCreditItemT[];
  result: boolean;
  len: number;
}

export interface BusinessCreditItemT {
  id: number;
  bank_id: number;
  min_amount: number;
  rate: number;
  timeframe_max: number;
  description: string;
  type: string;
  max_amount: number;
  timeframe_min: number;
  name: string;
  rating: number;
}

export interface BusinessCreditItemResponseT {
  card: BusinessCreditItemT;
  result: boolean;
}
