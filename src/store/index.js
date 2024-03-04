import { configureStore} from "@reduxjs/toolkit";
import productsReducer, {fetchProducts} from '../slices/productSlice';
import cartReducer , {getTotals} from '../slices/cartSlice';
import { productsApi } from "../slices/productApi";
 export const store = configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
    
 })
 store.dispatch(fetchProducts())
 store.dispatch(getTotals())