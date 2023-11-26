'use client';

import React, { useEffect, useState } from 'react';
import s from './OffersBanks.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { useAppSelector } from '@/hooks/redux';
import { selectDeposits, selectGetDepositsStatus } from '@/core/store/deposits/deposits-selectors';
import Loading from '@/app/loading';
import { getDepositsI } from '@/models/Services';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';

interface OfferBanksProps {
  options: {
    text: string
    value: string | number
  }[];
  filterData: getDepositsI
  handleChangeFilter: (prop: string, value: any) => void
}

const OffersBanks = (props: OfferBanksProps) => {
  const { options, filterData, handleChangeFilter } = props;
  const { deposits, len } = useAppSelector(selectDeposits)
  const getDepositsStatus = useAppSelector(selectGetDepositsStatus)

  const [sortValue, setSortValue] = useState('По процентной ставке');

  const sortOffers = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    if (sortValue === e.currentTarget.value) return;
    setSortValue(e.currentTarget.value);
  };

  function sortOffer(criterion: 'rate' | 'rating' | 'min_amount') {

  }

  useEffect(() => {
    if (sortValue === '') return;
    switch (sortValue) {
      case 'По процентной ставке':
        sortOffer('rate');
        break;
      case 'По рейтингу банка':
        sortOffer('rating');
        break;
      case 'По максимальному взносу':
        sortOffer('min_amount');
        break;
    }
  }, [sortValue]);


  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{len ?? 0} вкладов {" "}</mark>
          подобрано
        </span>
        <CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} />
      </div>
      <ul className={s.deposit_offers}>
        {
          getDepositsStatus === 'loading' ?
            <Loading />
            :
            deposits?.map((item) => {
              return (
                <li key={item.id}>
                  <DepositOfferItem
                    item={item}
                  />
                </li>
              )
            })
        }
      </ul>
      {len && len > filterData.page * filterData.limit &&
        <div className={s.btn_cont}>
          <BlueBtn text={'Показать еще'} width={235}
            onClick={() => handleChangeFilter('page', filterData.page + 1)}
          />
        </div>}

    </div>
  );
};

export default OffersBanks;
