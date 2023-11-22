export interface MortgageItemT {
  bank_id: number;
  type: string;
  max_amount: number;
  timeframe_min: number;
  name: string;
  min_amount: number;
  id: number;
  rate: number;
  timeframe_max: number;
  description: string;
  rating: number;
  monthly_payment: number;
}

export interface MortgagesResponseT {
  cards: MortgageItemT[];
  result: boolean;
  len: number;
}

export interface MortgageItemResponseT {
  card: MortgageItemT;
  result: boolean;
}
