export interface getBusinessCardsI {
    bank?: number;
    page?: number;
    limit?: number;
    sort?: number;
    sort_type?: number;
}

export interface getBusinessCreditsI {
    amount?: number;
    timeframe?: number;
    page?: number;
    limit?: number;
    sort?: number;
    sort_type?: number;
}

export interface getCardsI {
    bank?: number;
    page?: number;
    limit?: number;
    sort?: number;
    sort_type?: number;
}

export interface getDepositsI {
    amount_range?: number;
    bank_id?: string[] | string;
    term_range?: string;
    limit: number;
    offset: number
    interest_rate?: string
    currency?: string
    special_offer?: boolean
    offer_of_the_month?: boolean
    ordering?: string
    deposit_type?: string
    withdrawal_option?: boolean
    replenishment_option?: boolean
    monthly_interest_payment?: boolean
    capitalization?: boolean
}

export interface getInvestNewsI {
    page?: number;
    limit?: number;
    sort?: string | number;
    sort_type?: number;
}

export interface getMarketsI {
    search?: string;
    page?: number;
    limit?: number;
    sort?: string;
    sort_type?: number;
}

export interface getBrokers {
    search?: string;
    market?: string;
    page?: number;
    limit?: number;
    sort?: string;
    sort_type?: number;
}

export interface getMortgages {
    currency?: string
    summa?: string
    bank?: string
    initialPayment?: string;
    age?: string
    max_interest_rate?: string
    min_interest_rate?: string
    ipoteka_time?: string
    ordering?: string
    offer_of_the_month?: boolean
    limit: number
    offset: number
}

export interface getMortgage {
    mortgage?: number;
    amount?: number;
    first_payment?: number;
    timeframe?: number;
}

export interface getNewsT {
    date?: string
    now_date?: string
    tags?: string
    contenttype?: string
    news_type?: number
    newsofday?: boolean
    search?: string
    ordering?: string
}

export interface getAllBanksT {
    offset: number,
    limit: number,
    type?: string
    financial_rating?: string
    name?: string
    assets?: string
}


export interface getBanksOfficesT {
    page?: number,
    limit?: number,
    sort?: string,
    sort_type?: number
}

export interface sendApplicationData {
    name: string,
    phone: number,
    product: string,
    product_id: number
}

export interface getReviewsListData {
    product_type?: string
    rate?: string
    date?: string
    verified?: boolean
    search?: string
    ordering?: string
    limit: number
    offset: number

}

export interface getReviewsCategoriesData {
    search?: string
    limit: number
    offset: number
}


export interface getCreditsI {
    max_rating?: string
    min_rating?: string
    offerOfTheMonth?: boolean
    bank?: string | string[]
    loanType?: string
    specialOffer?: boolean
    noDocumentsRequired?: boolean
    collateralFree?: boolean
    without_reference?: boolean
    summa?: number
    credit?: string // срок кредита
    search?: string
    ordering?: string
    currency?: string
    limit: number
    offset: number
}



export type RequestStatus = 'initial' | 'loading' | 'success' | 'error'