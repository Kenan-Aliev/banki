import instance from '@/core/services/index';
import { CreditType, CreditsResponseT } from '@/models/Credits/Credits';
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
};

export default CreditsApi;
