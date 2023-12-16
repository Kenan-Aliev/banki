export interface BanksResponseT {
    results: BankT[];
    count: number;
    next: string | null
    previous: string | null
}

export interface BankT {
    id: number,
    name: string,
    legal_name: string
    type: string,
    fiancial_rating: number,
    assets: number,
    organizationInfo?: string
    logo: string
    contacts: {
        phones: string
        address: string
    }[]
}

export interface BankOfficesResponseT {
    offices: OfficeBanksT[];
    result: boolean;
    len: number;
}

export interface OfficeBanksT {
    name: string;
    id: number;
    lat?: number;
    address: string;
    bank_id: number;
    region: number | string;
    lon?: number;
    bank: {
        bank_logo: string
        bank_name: string
    }
}


export interface BankResponseT {
    bank: BankT;
    result: boolean
}