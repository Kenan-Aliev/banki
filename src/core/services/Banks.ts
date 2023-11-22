import instance from "@/core/services/index";
import {getBanksOfficesT} from "@/models/Services";


const BanksApi = {

    getBanks(page, limit, sort_type, sort) {
        return instance.get(`banks?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`)
    },

    getBank({bankId}: { bankId: number }) {
        return instance.get(`bank?bank=${bankId}`)
    },

    getBankOffices({page, limit, sort, sort_type}: getBanksOfficesT) {
        return instance.get(`banks-offices?page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`)
    },

    getPromotions(){
        return instance.get(`https://api.vsebanki.kg/api/promotions?page=1&limit=10&sort=id&sort_type=1`)
    }
}

export default BanksApi;