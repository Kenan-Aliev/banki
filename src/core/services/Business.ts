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

};

export default BusinessApi;
