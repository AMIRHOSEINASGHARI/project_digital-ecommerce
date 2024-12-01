// actions
import { getProducts } from "@/actions/product.actions";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductCard from "@/components/shared/ProductCard";

const ProductsList = async (props: {
  searchParams: Promise<ProductsListParams>;
}) => {
  const searchParams = await props.searchParams;

  const data = await getProducts(searchParams);

  return (
    <div className="list-grid-1">
      {data?.products?.map((product) => (
        <ProductCard key={product?._id} />
      ))}
    </div>
  );
};

export default ProductsList;
