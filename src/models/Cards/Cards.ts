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
  id: number
  name: string
  image: string
  issuing_bank: number
  bank_title: string
  bank_logo: string
  card_type: string
  credit_limit: number
  interest_rate: number
  issuance_fee: number
  currency: string
  offer_of_the_month: boolean
  special_offer: boolean
  special_offer_text: string
  card_network: {
    id: number
    name: string
  }
  service_fee: {
    free: boolean
    cost: number
  },
  cashback: {
    available: boolean
    percentage: number
  }
  commission_free_withdrawal: {
    available: boolean,
  },
};

export type CardItemsResponseT = {
  count: number;
  results: CardItemT[]
};

export type TopCardsResponseT = {
  count: number
  results: {
    id: number
    card: CardItemT
  }[]
}

