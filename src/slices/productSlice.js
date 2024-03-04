import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: null
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get("http://localhost:9000/stickers");
            return response.data;
        } catch (error) {
            // Rethrow the error to propagate it further
            throw error;
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "success";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "rejected";
                // You might want to handle error states here
            });
    }
});

export default productSlice.reducer;
