import instance from "@/core/services/index";
import { BankT, BanksResponseT } from '@/models/Banks/banks';
import { getBanksOfficesT, getAllBanksT } from "@/models/Services";


const BanksApi = {

    getBanks(params: getAllBanksT) {
        return instance.get<BanksResponseT>(`/banks/list/`, {
            params
        })
    },

    getBank(id: number) {
        return instance.get<BankT>(`/banks/detail/${id}`)
    },

    getBankOffices({ page, limit, sort, sort_type }: getBanksOfficesT) {
        return instance.get(`banks-offices?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`)
    },

    getPromotions() {
        return instance.get(`https://api.vsebanki.kg/api/promotions?page=1&limit=10&sort=id&sort_type=1`)
    }
}

export default BanksApi;