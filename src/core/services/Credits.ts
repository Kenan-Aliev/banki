import instance from '@/core/services/index';
import { CreditResponseT, CreditsResponseT } from '@/models/Credits/Credits';
import { getBusinessCreditsI } from '@/models/Services';

const CreditsApi = {
  getCredits({ amount, timeframe, page, limit, sort, sort_type }: getBusinessCreditsI) {
    return instance.get<CreditsResponseT>(
      `credits?amount=${amount}&timeframe=${timeframe}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getCredit({ creditId }: { creditId?: number }) {
    return instance.get<CreditResponseT>(`credit?credit=${creditId}`);
  },
};

export default CreditsApi;
