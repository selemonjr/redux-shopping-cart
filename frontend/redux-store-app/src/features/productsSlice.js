import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// A slice is a logic containing reducers and actions
const initialState = {
    items:[],
    status:null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch", //1: first parameter => action type //
    async () => { // payload creator
       const response = await axios.get("http://localhost:5000/products");
       return response?.data
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {}, // will generate action creators
    extraReducers: { // will handle action types
        [productsFetch.pending]: (state,action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state,action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state,action) => {
            state.status = "rejected"
        },
    }
});
export default productsSlice.reducer