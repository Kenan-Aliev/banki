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
  promotion_of_month: boolean
  special_condition?: string
  bank?: {
    bank_logo: string
    bank_name: string
  },
}

interface AmountRange {
  min: number;
  max: number;
}

interface TermRange {
  min: number;
  max: number;
}

export type DepositItemT = {
  deposit_id: number;
  deposit_name: string;
  amount_range: AmountRange;
  term_range: TermRange;
  interest_rate: number;
  special_interest_rate: number;
  bank_id: number;
  bank_title: string
  bank_logo: string
  currency: string;
  withdrawal_option: boolean;
  replenishment_option: boolean;
  monthly_interest_payment: boolean;
  capitalization: boolean;
  deposit_type: string;
  special_offer: boolean;
  special_offer_details: string | null;
  offer_of_the_month: boolean;
  interest_payment_frequency: string;
  description: string;
  additional_fields: any[];
};

export interface DepositsResponseT<T> {
  results: T[];
  count: number;
};

export interface DepositItemResponseT {
  card: DepositItemT;
  result: boolean;
}

export interface TopDepositsResponse {
  count: number
  results: {
    id: number
    vklad: DepositItemT
  }[]
}
