import React, { useMemo } from 'react';
import { DepositItemT } from '@/models/Deposit/Deposit';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';
import { Box, Stack } from '@mui/material';
import { CreditItemT } from '@/models/Credits/Credits';
import CreditBankItem from '@/components/credits/CreditBankItem';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';
import MortgageOfferItem from '@/components/mortgages/MortgageOfferItem';
import { CardItemT } from '@/models/Cards/Cards';
import CreditCardItem from '@/components/CreditCardItem/CreditCardItem';
import DebitCardItem from '@/components/DebitCardItem';

type ItemsTypes = 'Депозиты' | 'Кредиты' | 'Ипотека' | 'Кредитные карты' | 'Дебетовые карты';

const ExpandedItems = ({
  activeCurrency,
  items,
  itemsName,
  showPayment,
}: {
  items: any[];
  activeCurrency: string;
  itemsName: ItemsTypes;
  showPayment?: boolean;
}) => {
  const expandedItems = useMemo(() => {
    switch (itemsName) {
      case 'Депозиты':
        return (
          <Stack
            sx={{
              '& .expandedOffer': {
                borderBottom: '1px solid #d9dbdf',
              },
              '& .expandedOffer:last-of-type': {
                borderBottom: 'none',
              },
            }}
          >
            {items.map((item) => {
              const deposit = item as DepositItemT;
              return (
                <Box key={deposit.deposit_id} className='expandedOffer'>
                  <DepositOfferItem item={deposit} activeCurrency={activeCurrency} />
                </Box>
              );
            })}
          </Stack>
        );
      case 'Кредиты':
        return items.map((item) => {
          const credit = item as CreditItemT;
          return (
            <CreditBankItem
              item={credit}
              activeCurrency={activeCurrency}
              key={credit.id}
              showPayment={showPayment}
            />
          );
        });
      case 'Ипотека':
        return items.map((item) => {
          const mortgage = item as MortgageItemT;
          return <MortgageOfferItem item={mortgage} activeCurrency={activeCurrency} key={mortgage.id} />;
        });

      case 'Кредитные карты':
        return items.map((item) => {
          const card = item as CardItemT;
          return <CreditCardItem item={card} key={card.id} />;
        });

      case 'Дебетовые карты':
        return items.map((item) => {
          const card = item as CardItemT;
          return <DebitCardItem item={card} key={card.id} />;
        });

      default:
        return null;
    }
  }, [items]);
  return expandedItems;
};

export default ExpandedItems;
