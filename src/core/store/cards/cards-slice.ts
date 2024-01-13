import { createSlice } from '@reduxjs/toolkit';
import { CardItemsResponseT } from '@/models/Cards/Cards';
import { RequestStatus } from '@/models/Services';
import { getCards, getMonthOffers, getTopCreditCards } from './cards-actions';

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
    data: CardItemsResponseT
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
    data: {} as CardItemsResponseT
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
        })
  }
});

export const { resetCards } = cardsSlice.actions

export default cardsSlice.reducer;
