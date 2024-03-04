import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = ()=>{
    return(
        <section>
            <header className="h-10 flex justify-between items-center px-2 bg-slate-200 border-b border-slate-400">
                <div><h1 className="font-bold">فروشگاه استیکر برنامه نویسی</h1></div>
                <div className="flex">
                    <div className="rounded-full bg-[yellow]">10</div>
                    <FontAwesomeIcon  className="text-regal-blue" icon={faCartShopping} />
                </div>
            </header>
        </section>
    )
}
export default Navbar;