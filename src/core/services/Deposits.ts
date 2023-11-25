import instance from '@/core/services/index';
import { getDepositsI } from '@/models/Services';
import { DepositItemResponseT, DepositsResponseT } from '@/models/Deposit/Deposit';

const DepositsApi = {
  getDeposits(params: getDepositsI) {
    return instance.get<DepositsResponseT>('/deposits', {
      params
    });
  },
  getDeposit({ depositId }: { depositId: number }) {
    return instance.get<DepositItemResponseT>(`deposit?deposit=${depositId}`);
  },
};

export default DepositsApi;
