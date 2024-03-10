import { useSelector ,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart, decreaseCart, getTotals, removeFromCart } from "../slices/cartSlice";
const CartTable= () =>{
    const dispatch=useDispatch();
   
    const {cartItems,cartTotalQty,cartTotalAmount}=useSelector(state=>state.cart)
    useEffect(()=>{
        dispatch(getTotals())
    },[cartItems,dispatch])
    const handleIncrement=(product)=>{
        dispatch(addToCart(product))
    }
    const handleDecrement=(product)=>{
        dispatch(decreaseCart(product))
    }
    const handleRemoveFromCart=(product)=>{
        dispatch(removeFromCart(product))
    }
    return(
        <div className="mx-5">
            <h1 className="font-bold">سبد خرید شما:</h1>
            {cartItems.length===0 ?(
                <div className="flex justify-center">محصولی در سبد خرید شما وجود ندارد</div>
            ):(
                <>
                <div className="flex justify-center">
                    <table className="w-full mx-56 rounded-lg text-sm border border-black text-left rtl:text-right text-black">
                        <tr className="bg-slate-400">
                            <td className="px-5 py-3 font-bold">نام محصول</td>
                            <td className="px-5 py-3 font-bold">قیمت</td>
                            <td className="px-5 py-3 font-bold">تعداد</td>
                            <td className="px-5 py-3 font-bold">حذف</td>
                        </tr>
                            {cartItems.map(item=>(
                                <>
                                <tr className="">
                                    <td className="px-5 py-3">{item.title}</td>
                                    <td className="px-5 py-3">{item.price * item.cartQty}</td>
                                    <td className="px-5 py-3">
                                        <button className="bg-green-200 rounded px-3" onClick={()=>handleIncrement(item)}>+</button>
                                        <input type="text" className="border rounded text-center w-10" value={item.cartQty} step={1} min={1}/>
                                        <button className="bg-indigo-400 rounded px-3" onClick={()=>handleDecrement(item)}>-</button>
                                    </td>
                                    <td><button type="button" onClick={()=>handleRemoveFromCart(item)}>&otimes;</button></td>
                                </tr>
                                </>
                            ))}
                    </table>
                    
                </div>
                <div className="flex mt-5 mb-5 items-center flex-col">
                    <div className="font-bold">تعداد کل:{cartTotalQty}</div>
                    <div className="font-bold">مجموع قیمت کل:{cartTotalAmount}</div>
                </div>
                
                </>
                
            )
            }
            <div className="flex flex-col items-center gap-2">
                <button type="submit" className="bg-green-200 p-2">تایید نهایی</button>
                <Link to={"/"} className="bg-indigo-200 rounded p-2">بازگشت به صفحه اصلی</Link>
            </div>
            
        </div>
    )
}
export default CartTable;