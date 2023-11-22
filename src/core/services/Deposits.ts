import instance from '@/core/services/index';
import { getDepositsI } from '@/models/Services';
import { DepositItemResponseT, DepositsResponseT } from '@/models/Deposit/Deposit';

const DepositsApi = {
  getDeposits({ bank, timeframe, page, sort, sort_type, limit, amount }: getDepositsI) {
    return instance.get<DepositsResponseT>(
      `deposits?amount=${amount}&timeframe=${timeframe}&bank=${bank}&page=${page}&limit=${limit}&sort=${sort}&sort_type=${sort_type}`,
    );
  },
  getDeposit({ depositId }: { depositId: number }) {
    return instance.get<DepositItemResponseT>(`deposit?deposit=${depositId}`);
  },
};

export default DepositsApi;
