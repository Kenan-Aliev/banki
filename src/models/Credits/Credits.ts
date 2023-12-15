export interface CreditItemT {
  id: number
  rating: {
    min: number
    max: number
  }
  bank: number
  bank_title: string
  bank_logo: string
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
  next: string | null
  previous: string | null
  results: CreditItemT[];
}

