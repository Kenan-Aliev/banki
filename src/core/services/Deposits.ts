import instance from '@/core/services/index';
import { getDepositsI } from '@/models/Services';
import { DepositItemResponseT, DepositsResponseT, DepositItemT, TopDepositsResponse } from '@/models/Deposit/Deposit';

const DepositsApi = {
  getDeposits(params: getDepositsI) {
    return instance.get<DepositsResponseT<DepositItemT>>('/vklad', {
      params
    });
  },
  getDeposit({ depositId }: { depositId: number }) {
    return instance.get<DepositItemResponseT>(`deposit?deposit=${depositId}`);
  },

  getTopDeposits() {
    return instance.get<TopDepositsResponse>('/vklad/top');
  },
};

export default DepositsApi;
