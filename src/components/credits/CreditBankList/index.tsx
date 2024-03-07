'use client';

import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';
import { getCreditsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import { selectCredits, selectGetCreditsStatus } from '@/core/store/credits/credits-selectors';
import { CreditItemT } from '@/models/Credits/Credits';
import Loading from '@/app/loading';
import CreditBankItem from '../CreditBankItem';
import ExpandedItems from '@/components/Offers/ExpandedOffers';
import ShowMoreBtn from '@/UI/ShowMoreBtn';

interface CreditBankListProps {
  options?: {
    text: string
    value: string | number
  }[];
  filterData: getCreditsI
  handleChangeFilter: (prop: string, value: any) => void
  showPayment?: boolean
}

const CreditBankList = (props: CreditBankListProps) => {
  const { options, filterData, handleChangeFilter, showPayment } = props;
  const { results: credits, count } = useAppSelector(selectCredits)
  const getCreditsStatus = useAppSelector(selectGetCreditsStatus)

  const [expandedBankIds, setExpandedBankIds] = useState<number[]>([]);
  const [bankIdCounts, setBankIdCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const countIds: { [key: number]: number } = {};

    credits?.forEach((item) => {
      countIds[item.bank] = countIds[item.bank] ? countIds[item.bank] + 1 : 1;
    });

    setBankIdCounts(countIds);
  }, [credits]);

  const handleOpenChildren = (bankId: number) => {
    if (expandedBankIds.includes(bankId)) {
      setExpandedBankIds(expandedBankIds.filter((id) => id !== bankId));
    } else {
      setExpandedBankIds([...expandedBankIds, bankId]);
    }
  };

  const uniqueCredits: CreditItemT[] = [];
  const addedBankIds: number[] = [];


  credits?.forEach((item) => {
    if (!addedBankIds.includes(item.bank)) {
      uniqueCredits.push(item);
      addedBankIds.push(item.bank);
    }
  });


  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{count ?? 0} кредитов {" "}</mark>
          подобрано
        </span>
        <CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} prop={'ordering'} />
      </div>
      <ul className={s.deposit_offers}>
        {
          getCreditsStatus === 'loading' ?
            <Loading />
            : uniqueCredits?.map((item) => {
              const { id, bank } = item
              const isExpanded = expandedBankIds.includes(bank)
              const filteredCredits = credits.filter((item) => item.bank === bank && item.id !== id);
              return (
                <>
                  <li key={id}>
                    <CreditBankItem
                      item={item}
                      child={isExpanded}
                      count={bankIdCounts[bank] - 1}
                      openChildren={handleOpenChildren}
                      activeCurrency={filterData.currency}
                      showPayment={showPayment}
                    />
                  </li>
                  {
                    isExpanded && (
                      <ExpandedItems
                        items={filteredCredits}
                        activeCurrency={filterData.currency}
                        itemsName='Кредиты'
                        showPayment={showPayment}
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

export default CreditBankList;
