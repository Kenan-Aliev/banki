'use client';

import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';
import { getMortgages } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import Loading from '@/app/loading';
import { selectGetMortgagesStatus, selectMortgages } from '@/core/store/mortgages/mortgage-selectors';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';
import MortgageOfferItem from '../MortgageOfferItem';
import ExpandedItems from '@/components/Offers/ExpandedOffers';
import ShowMoreBtn from '@/UI/ShowMoreBtn';

interface MortgagesListProps {
  options?: {
    text: string
    value: string | number
  }[];
  filterData: getMortgages
  handleChangeFilter: (prop: string, value: any) => void
}

const MortgagesList = (props: MortgagesListProps) => {
  const { options, filterData, handleChangeFilter } = props;
  const { results: mortgages, count } = useAppSelector(selectMortgages)
  const getMortgagesStatus = useAppSelector(selectGetMortgagesStatus)

  const [expandedBankIds, setExpandedBankIds] = useState<number[]>([]);
  const [bankIdCounts, setBankIdCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const countIds: { [key: number]: number } = {};

    mortgages?.forEach((item) => {
      countIds[item.bank] = countIds[item.bank] ? countIds[item.bank] + 1 : 1;
    });

    setBankIdCounts(countIds);
  }, [mortgages]);

  const handleOpenChildren = (bankId: number) => {
    if (expandedBankIds.includes(bankId)) {
      setExpandedBankIds(expandedBankIds.filter((id) => id !== bankId));
    } else {
      setExpandedBankIds([...expandedBankIds, bankId]);
    }
  };

  const uniqueMortgages: MortgageItemT[] = [];
  const addedBankIds: number[] = [];


  mortgages?.forEach((item) => {
    if (!addedBankIds.includes(item.bank)) {
      uniqueMortgages.push(item);
      addedBankIds.push(item.bank);
    }
  });


  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{count ?? 0} ипотек {" "}</mark>
          подобрано
        </span>
        <CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} prop={'ordering'} />
      </div>
      <ul className={s.deposit_offers}>
        {
          getMortgagesStatus === 'loading' ?
            <Loading />
            : uniqueMortgages?.map((item) => {
              const { id, bank } = item
              const filteredMortgages = mortgages.filter((item) => item.bank === bank && item.id !== id);
              const isExpanded = expandedBankIds.includes(bank)
              return (
                <>
                  <li key={id}>
                    <MortgageOfferItem
                      item={item}
                      activeCurrency={filterData.currency}
                      child={isExpanded}
                      count={bankIdCounts[bank] - 1}
                      openChildren={handleOpenChildren}
                    />
                  </li>
                  {
                    isExpanded && (
                      <ExpandedItems
                        items={filteredMortgages}
                        activeCurrency={filterData.currency}
                        itemsName='Ипотека'
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
          <ShowMoreBtn
            onClick={() => handleChangeFilter('offset', filterData.offset + 10)}
          />
        </div>
        : null}
    </div>
  );
};

export default MortgagesList;
