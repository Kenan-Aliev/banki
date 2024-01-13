'use client';

import React, { useEffect, useState } from 'react';
import s from './CardsList.module.scss';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomSelect2 from '@/UI/CustomSelect2/CustomSelect2';
import { getCardsI } from '@/models/Services';
import { useAppSelector } from '@/hooks/redux';
import Loading from '@/app/loading';
import ExpandedItems from '@/components/Offers/ExpandedOffers';
import { selectCards, selectCardsStatus } from '@/core/store/cards/cards-selectors';
import { CardItemT } from '@/models/Cards/Cards';
import OffersItem from '../CardItem/CardItem';

interface CardsListProps {
  options?: {
    text: string
    value: string | number
  }[];
  filterData: getCardsI
  handleChangeFilter: (prop: string, value: any, selectOne?: boolean) => void
}

const CardsList = (props: CardsListProps) => {
  const { options, filterData, handleChangeFilter } = props;
  const { results: cards, count } = useAppSelector(selectCards)
  const getCardsStatus = useAppSelector(selectCardsStatus)

  console.log(cards)

  const [expandedBankIds, setExpandedBankIds] = useState<number[]>([]);
  const [bankIdCounts, setBankIdCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const countIds: { [key: number]: number } = {};

    cards?.forEach((item) => {
      countIds[item.issuing_bank] = countIds[item.issuing_bank] ? countIds[item.issuing_bank] + 1 : 1;
    });

    setBankIdCounts(countIds);
  }, [cards]);

  const handleOpenChildren = (bankId: number) => {
    if (expandedBankIds.includes(bankId)) {
      setExpandedBankIds(expandedBankIds.filter((id) => id !== bankId));
    } else {
      setExpandedBankIds([...expandedBankIds, bankId]);
    }
  };

  const uniqueCards: CardItemT[] = [];
  const addedBankIds: number[] = [];


  cards?.forEach((item) => {
    if (!addedBankIds.includes(item.issuing_bank)) {
      uniqueCards.push(item);
      addedBankIds.push(item.issuing_bank);
    }
  });


  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{count ?? 0} карт {" "}</mark>
          подобрано
        </span>
        <CustomSelect2 img={lines} options={options} handleChange={handleChangeFilter} prop={'ordering'} />
      </div>
      <ul className={s.deposit_offers}>
        {
          getCardsStatus === 'loading' ?
            <Loading />
            : uniqueCards?.map((item) => {
              const { id, issuing_bank } = item
              const isExpanded = expandedBankIds.includes(issuing_bank)
              const filteredCards = cards.filter((item) => item.issuing_bank === issuing_bank && item.id !== id);
              return (
                <>
                  <li key={id}>
                    <OffersItem
                      item={item}
                      child={isExpanded}
                      count={bankIdCounts[issuing_bank] - 1}
                      openChildren={handleOpenChildren}
                    />
                  </li>
                  {
                    isExpanded && (
                      <ExpandedItems
                        items={filteredCards}
                        activeCurrency={filterData.currency}
                        itemsName='Кредитные карты'
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

export default CardsList;
