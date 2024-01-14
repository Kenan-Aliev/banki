import { createSlice } from '@reduxjs/toolkit';
import { CardItemsResponseT, TopCardsResponseT } from '@/models/Cards/Cards';
import { RequestStatus } from '@/models/Services';
import { getCards, getMonthOffers, getTopCreditCards, getTopDebitCards } from './cards-actions';

interface stateT {
  cards: {
    status: RequestStatus
    data: CardItemsResponseT
  };
  monthOffers: {
    status: RequestStatus
    data: CardItemsResponseT
  },
  topCreditCards: {
    status: RequestStatus
    data: TopCardsResponseT
  },
  topDebitCards: {
    status: RequestStatus
    data: TopCardsResponseT
  }
}

const initialState: stateT = {
  cards: {
    status: 'initial',
    data: {} as CardItemsResponseT
  },
  monthOffers: {
    status: 'initial',
    data: {} as CardItemsResponseT
  },
  topCreditCards: {
    status: 'initial',
    data: {} as TopCardsResponseT
  },
  topDebitCards: {
    status: 'initial',
    data: {} as TopCardsResponseT
  }
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetCards: (state) => {
      state.cards = {
        status: 'initial',
        data: {} as CardItemsResponseT
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.cards.status = 'loading'
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = {
          status: 'success',
          data: {
            ...action.payload,
            results: [...state.cards.data.results ?? [], ...action.payload.results ?? []]
          }
        }
      })
      .addCase(getCards.rejected, (state) => {
        state.cards.status = 'error'
      }),
      builder
        .addCase(getMonthOffers.pending, (state) => {
          state.monthOffers.status = 'loading'
        })
        .addCase(getMonthOffers.fulfilled, (state, action) => {
          state.monthOffers = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getMonthOffers.rejected, (state) => {
          state.monthOffers.status = 'error'
        }),
      builder
        .addCase(getTopCreditCards.pending, (state) => {
          state.topCreditCards.status = 'loading'
        })
        .addCase(getTopCreditCards.fulfilled, (state, action) => {
          state.topCreditCards = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getTopCreditCards.rejected, (state) => {
          state.topCreditCards.status = 'error'
        }),
      builder
        .addCase(getTopDebitCards.pending, (state) => {
          state.topDebitCards.status = 'loading'
        })
        .addCase(getTopDebitCards.fulfilled, (state, action) => {
          state.topDebitCards = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getTopDebitCards.rejected, (state) => {
          state.topDebitCards.status = 'error'
        })
  }
});

export const { resetCards } = cardsSlice.actions

export default cardsSlice.reducer;
