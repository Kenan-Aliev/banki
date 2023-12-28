import instance from '@/core/services/index';
import { MortgagesResponseT } from '@/models/Mortgages/Mortgages';
import { getMortgages } from '@/models/Services';

const MortgagesApi = {
  getMorgages(params: getMortgages) {
    return instance.get<MortgagesResponseT>('/ipoteka/list', {
      params
    });
  },
};

export default MortgagesApi;
