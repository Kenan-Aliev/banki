export interface CreditItemT {
  id: number
  bank: number
  bank_title: string
  bank_logo: string
  min_rating: number
  max_rating: number
  specialInterestRate: boolean
  currency: string
  loanName: string
  loanType: string
  offerOfTheMonth: boolean
  collateralFree: boolean
  noDocumentsRequired: boolean
  specialOffer: boolean
  loan_amount: {
    min: number
    max: number
  }
  loan_term: {
    min: number
    max: number
  }
  without_reference: boolean
  link: string
  pakege?: string
  security?: string
  specialOfferText?: string
  description?: string
}

export interface CreditType {
  id: number
  title: string
}

export interface CreditsResponseT {
  count: number
  results: CreditItemT[];
}


export interface TopCreditsResponse {
  count: number
  results: {
    id: number
    credit: CreditItemT
  }[]
}

