import instance from '@/core/services/index';
import { CreditsResponseT } from '@/models/Credits/Credits';
import { getCreditsI } from '@/models/Services';

const CreditsApi = {
  getCredits(params: getCreditsI) {
    return instance.get<CreditsResponseT>('/credit/list/', {
      params
    });
  },
};

export default CreditsApi;
