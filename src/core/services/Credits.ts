import instance from '@/core/services/index';
import { CreditResponseT, CreditsResponseT } from '@/models/Credits/Credits';
import { getBusinessCreditsI } from '@/models/Services';

const CreditsApi = {
  getCredits(params: getBusinessCreditsI) {
    return instance.get<CreditsResponseT>('/credits');
  },
  getCredit({ creditId }: { creditId?: number }) {
    return instance.get<CreditResponseT>(`credit?credit=${creditId}`);
  },
};

export default CreditsApi;
