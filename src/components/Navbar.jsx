import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CustomNumeralNumericFormat from './price'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotals } from "../slices/cartSlice";
const Navbar = ()=>{
    const dispatch=useDispatch()
    const {cartTotalQty}=useSelector(state=>state.cart)
    useEffect(()=>{
        dispatch(getTotals())
    },[cartTotalQty,dispatch])
    return(
        <section>
            <header className="h-10 flex justify-between items-center px-2 bg-slate-200 border-b border-slate-400">
                <div><h1 className="font-bold">فروشگاه استیکر برنامه نویسی</h1></div>
                <Link to={'/cart'}>
                    <div className="flex">
                        <div className="rounded-full bg-[yellow]">
                        <CustomNumeralNumericFormat
                            value={cartTotalQty}
                            />
                        </div>
                        <FontAwesomeIcon  className="text-regal-blue" icon={faCartShopping} />
                    </div>
                </Link>
            </header>
        </section>
    )
}
export default Navbar;