import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from './price'
const ProductCard = ({ product }) => {
  return (
    <Link to={`products/${product.id}`}>
    <div className="flex flex-col rounded border border-1 border-gray-400">
      <div className="bg-gray-400 flex justify-center w-56 h-32 cursor-pointer">
        <img
          src={`http://localhost:9000/images/${product.sticker}`}
          alt={`${product.sticker}`}
          className="w-full h-full hover:scale-125 transition duration-500 rounded "
        />
      </div>
      <div className="bg-white flex justify-center mt-5">{product.title}</div>
      <div className="bg-white flex justify-center w-56 h-64 relative">
        <div className="bg-indigo-200 absolute bottom-2 right-0 h-10 rounded px-3 py-2">
          <CustomNumeralNumericFormat
          prefix={'قیمت: '}
          suffix={'تومان'}
          value={product.price}
          thousandSeparator=","
          />
           {/* {" "}
            {product.price}تومان */}
        </div>
       
      </div>
    </div>
    </Link>
  );
};
export default ProductCard;
