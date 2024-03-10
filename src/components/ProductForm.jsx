import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const ProductForm = ({product}) => {
    const[qty,setQty]=useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
        navigate('/cart')
    }
    return(
        <div className="flex gap-2 pb-5 justify-center">
            <button className="bg-rose-400 rounded p-2" onClick={()=>handleAddToCart({...product,cartQty:1})}>اضافه به سبد خرید</button>
        </div>
       
    )
}
export default ProductForm;