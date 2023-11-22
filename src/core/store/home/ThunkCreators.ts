import {createAsyncThunk} from "@reduxjs/toolkit";
import BanksApi from "@/core/services/Banks";
import {getAllBanksT} from "@/models/Services";


// export const fetchBanksItems = createAsyncThunk(
//
//     'home/fetchBanks',
//     async ({page, limit, sort_type, sort}: getAllBanksT, thunkApi) => {
//         try {
//             //@ts-ignore
//             const response = await BanksApi.getBanks(page, limit, sort, sort_type)
//             return response.data.banks;
//         } catch (e) {
//             return thunkApi.rejectWithValue(e)
//         }
//     }
// )