export interface CreditItemT {
  id?: number;
  bank_name: string;
  name: string;
  type: string;
  min_procent: number;
  max_procent: number;
  min_amount: number;
  max_amount: number;
  timeframe_min: number;
  timeframe_max: number;
}

export interface CreditsResponseT {
  cards: CreditItemType[];
  result: boolean;
  len: number;
}

export type CreditItemType = {
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
};

export interface CreditResponseT {
  card: CreditItemType;
  result: boolean;
}
