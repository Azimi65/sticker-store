import { useGetAllProductsQuery } from "../slices/productApi";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Helmet } from "react-helmet";
const ProductList = () => {
  const { status, error } = useSelector((state) => state.products);
  const { data } = useGetAllProductsQuery();

  return (
    
    <div className="flex flex-wrap gap-20 justify-center w-full mt-10">
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>      
      </Helmet>
      {status === "success" && data ? 
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) : status === "pending" ? (
        <div>در حال بارگذاری</div>
      ) : (
        <div>مشکلی پیش آمده: {error}</div>
      )}
    </div>
  );
};

export default ProductList;

