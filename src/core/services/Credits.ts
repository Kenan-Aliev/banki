import instance from '@/core/services/index';
import { CreditItemT, CreditType, CreditsResponseT } from '@/models/Credits/Credits';
import { getCreditsI } from '@/models/Services';

const CreditsApi = {
  getCredits(params: getCreditsI) {
    return instance.get<CreditsResponseT>('/credit/list/', {
      params
    });
  },

  getCreditTypes() {
    return instance.get<CreditType[]>('/credit/type/list/');
  },

  getCreditDetails(id: number) {
    return instance.get<CreditItemT>(`/credit/${id}`);
  },
};

export default CreditsApi;
