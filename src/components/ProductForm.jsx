import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
const ProductForm = ({product}) => {
    const[qty,setQty]=useState(0)
    const dispatch = useDispatch()
    const increaseQty = ()=>{
        setQty(qty+1)
    }
    const decreaseQty = ()=>{
        setQty(qty-1)
    }
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }
    return(
        <div className="flex gap-2 pb-5">
            <label htmlFor="productNumber">تعداد محصول:</label>
            <input type="number" className="border rounded" value={qty} onChange={increaseQty} step={1} min={1}/>
            <button className="bg-green-200 rounded px-3" onClick={increaseQty}>+</button>
            <button className="bg-indigo-400 rounded px-3" onClick={qty>0?decreaseQty : ''}>-</button>
            <button className="bg-rose-400 rounded p-2" onClick={()=>handleAddToCart({...product,cartQty:qty})}>اضافه به سبد خرید</button>
        </div>
       
    )
}
export default ProductForm;