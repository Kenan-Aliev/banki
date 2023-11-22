import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BankT} from "@/models/Banks/banks";
import {getAllBanksT} from "@/models/Services";
import BanksApi from "@/core/services/Banks";

type serviceCompanysT = {
    text: string;
    link: string;
};

interface InitialStateI {
    serviceItems: serviceCompanysT[];
    error: string,
    banksItems: BankT[]
    promotions: any[]
}


const initialState: InitialStateI = {
    serviceItems: [
        {text: 'Вклады', link: '/deposits'},
        {text: 'Микрозаймы', link: '/credits/microloans'},
        {text: 'Накопительные счета', link: '/deposits/saving-accounts'},
        {text: 'Потребительские кредиты', link: '/credits/consumer-credits'},
        {text: 'Кредитные карты', link: '/cards/credit-cards'},
        {text: 'Карты рассрочки', link: '/cards/installment'},
        {text: 'Дебетовые карты', link: '/cards/debit-cards'},
        {text: 'Ипотечное страхование', link: '/insurance'},
        {text: 'ОСАГО', link: '/insurance/osago'},
        {text: 'КАСКО', link: '/insurance/kasco'},
        {text: 'Путешествие', link: '/insurance/travel'},
        {text: 'Жизнь и здоровье', link: '/insurance/health'},
        {text: 'ДМС', link: '/insurance/dms'},
        {text: 'Акции', link: '/investment/stocks'},
        {text: 'Подбор брокера', link: '/investment/select-broker'},
        {text: 'Криптовалюта', link: '/investment/crypto'},
        {text: 'Фонды', link: '/investment/fonds'},
        {text: 'Облигации', link: '/investment/obligations'},
        {text: 'Аналитика', link: '/investment/analytics'},
        {text: 'Расчётно-кассовое обслуживание', link: '/business/service'},
        {text: 'Бизнес-карты', link: '/business/slips'},
        {text: 'Кредиты для ИП', link: '/business/payments'},
        {text: 'Страхование бизнеса', link: '/business/assurance'},
    ],
    error: '',
    banksItems: [],
    promotions: []
};


export const getBanksThunk = createAsyncThunk(
    'getBanks',
    async ({page = 1, limit = 100, sort_type = 1, sort = 'id'}: getAllBanksT) => {
        const response = await BanksApi.getBanks(page, limit, sort_type, sort)
        return response.data.banks;
    }
)

export const getPromotionsThunk = createAsyncThunk(
    'getPromotions',
    async () => {
        const response = await BanksApi.getPromotions()
        const cards = response.data.cards.slice(0, 4);
        return cards;
    }
)

export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: builder => {

        builder
            .addCase(getBanksThunk.fulfilled, (state, action: PayloadAction<BankT[]>) => {
                state.banksItems = [...action.payload];
            })

            .addCase(getBanksThunk.rejected, (state, action) => {
                state.error = action.payload as string;
            })

            .addCase(getPromotionsThunk.fulfilled, (state, action) => {
                state.promotions = [...action.payload];
            })
    }
});


export default HomeSlice.reducer;
