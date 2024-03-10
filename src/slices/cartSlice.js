import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState={
    cartItems: localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')):
    [],
    
    cartTotalQty:0,
    cartTotalAmount:0,
}
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart(state,action){
            let existingIndex = state.cartItems.findIndex(
                item=>item.id ===action.payload.id
            )
            if(existingIndex>=0){
                state.cartItems[existingIndex]={
                    ...state.cartItems[existingIndex],
                    cartQty:state.cartItems[existingIndex].cartQty+1
                }
                toast('تعداد افزایش یافت',{position:'top-right'})
            }else{
                let tempProductItem = {
                    ...action.payload,
                    cartQty:action.payload.cartQty
                }
                state.cartItems.push(tempProductItem)
                toast('🦄 محصول به سبد خرید اضافه شد!', {
                    position: "top-right",
                    autoClose: 5000,
                    });
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        getTotals(state,action){
            let {total,qty} = state.cartItems.reduce(
                (cartTotal,cartItem)=>{
                    const {price,cartQty}=cartItem;
                    console.log(cartQty)
                    const itemTotal = price * cartQty;
                    cartTotal.total += itemTotal;
                    cartTotal.qty += Number(cartQty)
                    return cartTotal;
                },
                {
                    total:0,
                    qty:0
                }
            )
            total=parseFloat(total.toFixed(2))
            state.cartTotalQty=qty,
            state.cartTotalAmount=total
        },
        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id===action.payload.id)
            if(state.cartItems[itemIndex].cartQty>1){
                state.cartItems[itemIndex].cartQty-=1
                toast('🦄 تعداد محصول کاهش یافت !', {
                    position: "top-right",
                    autoClose: 5000,
                    });
            }
            else if(state.cartItems[itemIndex].cartQty===1){
                const nextCartItems=state.cartItems.filter(item=>item.id!==action.payload.id)
                state.cartItems=nextCartItems;
                toast('🦄 محصول از سبد خرید حذف شد !', {
                    position: "top-right",
                    autoClose: 5000,
                    });
            }
           localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
        
            const newCartItems=state.cartItems.filter(item=>item.id!==action.payload.id)
            state.cartItems=newCartItems;
            toast.error('🦄 محصول از سبد خرید حذف شد !', {
                position: "top-right",
                autoClose: 5000,
                });
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        }
    }
})
export const{addToCart,getTotals,decreaseCart,removeFromCart}= cartSlice.actions;
export default cartSlice.reducer;