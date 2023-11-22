export interface BanksResponseT {
    banks: BankT[];
    result: boolean;
    len: number;
}

export interface BankT {
    license?: number;
    id: number;
    form?: any;
    name: string;
    phones: string;
    image: string;
    region: string;
    since?: any;
    address: string;
    rating: number;
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
        bank_logo:string
        bank_name:string
    }
}


export interface BankResponseT {
    bank: BankT;
    result: boolean
}