import instance from '@/core/services/index';
import {getBusinessCardsI, getBusinessCreditsI} from '@/models/Services';
import {
    BusinessCardItemResponseT,
    BusinessCardsResponseT,
    BusinessCreditItemResponseT,
    BusinessCreditsResponseT,
} from '@/models/business/Business';

const BusinessApi = {

    getCards({bank, page, limit, sort, sort_type}: getBusinessCardsI) {
        return instance.get<BusinessCardsResponseT>(
            `business-cards?bank=${bank}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
        );
    },


    getCardItem({card}: { card: number }) {
        return instance.get<BusinessCardItemResponseT>(`business-card?=${card}`);
    },


    getCredits({amount, timeframe, page, limit, sort, sort_type}: getBusinessCreditsI) {
        return instance.get<BusinessCreditsResponseT>(
            `/business-credits?amount=${amount}&timeframe=${timeframe}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
        );
    },

    getCredit({credit}: { credit: number }) {
        return instance.get<BusinessCreditItemResponseT>(`business-credit?credit=${credit}`);
    },
};

export default BusinessApi;
