interface Quantity {
  min: number
  max: number
}

export interface MortgageItemT {
  id: number
  name: string
  bank: number;
  bank_title: string
  bank_logo: string
  conditions: string
  currency: string
  initialPayment: number
  offer_of_the_month: boolean
  link: string
  description: string
  interest_rate: Quantity
  loan_amount: Quantity
  loan_term: Quantity
  age_restriction: Quantity
}

export interface MortgagesResponseT {
  results: MortgageItemT[];
  count: number
}

