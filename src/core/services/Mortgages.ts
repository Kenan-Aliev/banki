import instance from '@/core/services/index';
import { MortgageItemResponseT, MortgagesResponseT } from '@/models/Mortgages/Mortgages';
import { getMortgage, getMortgages } from '@/models/Services';

const MortgagesApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMorgages({ bank, limit, page, sort, sort_type, type, first_payment, amount, timeframe }: getMortgages) {
    return instance.get<MortgagesResponseT>(
      `mortgages?amount=${amount}&first-payment=${first_payment}&timeframe=${timeframe}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getMortgage({ mortgage, first_payment, amount, timeframe }: getMortgage) {
    return instance.get<MortgageItemResponseT>(
      `mortgage?mortgage=${mortgage}&amount=${amount}&first-payment=${first_payment}&timeframe=${timeframe}`,
    );
  },
};

export default MortgagesApi;
