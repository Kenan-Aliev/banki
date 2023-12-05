'use client';

import React, { useEffect, useState } from 'react';
import s from './OffersBanks.module.scss';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { useAppSelector } from '@/hooks/redux';
import { selectDeposits, selectGetDepositsStatus } from '@/core/store/deposits/deposits-selectors';
import Loading from '@/app/loading';
import { getDepositsI } from '@/models/Services';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';
import { DepositItemT } from '@/models/Deposit/Deposit';
import ExpandedDeposits from '../ExpandedOffers/ExpandedOffers';

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
  const { results: deposits, count } = useAppSelector(selectDeposits)
  const getDepositsStatus = useAppSelector(selectGetDepositsStatus)

  const [expandedBankIds, setExpandedBankIds] = useState<number[]>([]);
  const [bankIdCounts, setBankIdCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const countIds: { [key: number]: number } = {};

    deposits?.forEach((item) => {
      countIds[item.bank_id] = countIds[item.bank_id] ? countIds[item.bank_id] + 1 : 1;
    });

    setBankIdCounts(countIds);
  }, [deposits]);

  const handleOpenChildren = (bankId: number) => {
    if (expandedBankIds.includes(bankId)) {
      setExpandedBankIds(expandedBankIds.filter((id) => id !== bankId));
    } else {
      setExpandedBankIds([...expandedBankIds, bankId]);
    }
  };

  const uniqueDeposits: DepositItemT[] = [];
  const addedBankIds: number[] = [];


  deposits?.forEach((item) => {
    if (!addedBankIds.includes(item.bank_id)) {
      uniqueDeposits.push(item);
      addedBankIds.push(item.bank_id);
    }
  });



  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{count ?? 0} вкладов {" "}</mark>
          подобрано
        </span>
        <CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} prop={'ordering'} />
      </div>
      <ul className={s.deposit_offers}>
        {
          getDepositsStatus === 'loading' ?
            <Loading />
            :
            uniqueDeposits?.map((item) => {
              const { deposit_id, bank_id } = item;
              const isExpanded = expandedBankIds.includes(bank_id);
              return (
                <>
                  <li key={item.deposit_id}>
                    <DepositOfferItem
                      item={item}
                      activeCurrency={filterData.currency}
                      openChildren={handleOpenChildren}
                      child={isExpanded}
                      count={bankIdCounts[bank_id] - 1}
                    />
                  </li>
                  {
                    isExpanded && (
                      <ExpandedDeposits
                        bankId={bank_id}
                        deposits={deposits}
                        primaryDepositId={deposit_id}
                        activeCurrency={filterData.currency}
                      />
                    )
                  }
                </>
              )
            })
        }
      </ul>
      {count && count > filterData.offset + filterData.limit
        ?
        <div className={s.btn_cont}>
          <BlueBtn text={'Показать еще'} width={235}
            onClick={() => handleChangeFilter('offset', filterData.offset + 10)}
          />
        </div>
        : null}

    </div>
  );
};

export default OffersBanks;
