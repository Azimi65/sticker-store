import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from './price'
import ProductForm from './ProductForm'
import { Helmet } from "react-helmet";
const ProductDetails = () =>{
    const {productId}=useParams();
    const product = useSelector(state=>state.products.items.find(item=>item.id===productId)) 
    return(
        
            <div className="flex justify-center mt-10 items-center px-48">
                <Helmet>
                    <title>مشخصات محصول</title>
                </Helmet>
                {product?(
                    <>
                        <img
                    src={`http://localhost:9000/images/${product.sticker}`}
                    alt={`${product.sticker}`}
                    className="w-full h-full hover:scale-125 transition  duration-500 rounded"
                    />
                    <div className="w-full d-flex flex-col border borde-1 border-gray-200">
                    
                        
                            <div className="bg-indigo-200 flex justify-center py-3">{product.title}</div>
                            <div className="mx-2 mt-5"><div className="font-bold text-lg">مشخصات محصول:</div>{product.description}</div>
                            <div className="bg-white px-2 py-3 h-80 text-indigo-800">
                            <CustomNumeralNumericFormat
                                prefix={'قیمت: '}
                                suffix={'تومان'}
                                value={product.price}
                                thousandSeparator=","
                                />
                            </div>
                            <ProductForm product={product}/>
                            <div className="flex justify-center mb-5"><Link to={'/'} type="button" className="bg-rose-200 px-2 rounded py-2">برگشت به صفحه محصولات</Link></div>

                    </div>
                    </>
                ):(
                    <div>در حال بارگذاری</div>
                )}
                
        </div>
        
        
    )
}
export default ProductDetails;