export interface DepositCardInterface {
  bank_id: number | string;
  description?: string;
  id: number;
  max_amount?: number;
  min_amount?: number;
  name: string;
  rate?: number;
  rating?: number;
  timeframe_max?: number;
  timeframe_min?: number;
  title_1?: string;
  count1?: string;
  title_2?: string;
  count2?: string;
}

export type DepositItemT = {
  max_amount: number;
  id: number;
  timeframe_min: number;
  name: string;
  min_amount: number;
  rate: number;
  bank_id: number;
  timeframe_max: number;
  description: string;
  rating: number;
};

export type DepositsResponseT = {
  cards: DepositItemT[];
  result: boolean;
  len: number;
};

export interface DepositItemResponseT {
  card: DepositItemT;
  result: boolean;
}
