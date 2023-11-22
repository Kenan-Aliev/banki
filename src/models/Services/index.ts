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
    amount?: number;
    bank?: string;
    timeframe?: number;
    page?: number;
    limit?: number;
    sort?: number;
    sort_type?: number;
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

export interface getNews {
    search?: string;
    page?: number;
    limit?: number;
    sort?: string;
    sort_type?: number;
}

export interface getAllBanksT {
    page: number,
    limit: number,
    sort: string,
    sort_type: number
}


export interface getBanksOfficesT {
    page?: number,
    limit?: number,
    sort?: string,
    sort_type?: number
}