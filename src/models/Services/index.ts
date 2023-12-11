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
    amount?: number;
    first_payment?: number;
    bank?: string;
    type?: string;
    timeframe?: number;
    page?: number;
    limit?: number;
    sort?: string;
    sort_type?: number;
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
    news_type?: string
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

export type RequestStatus = 'initial' | 'loading' | 'success' | 'error'