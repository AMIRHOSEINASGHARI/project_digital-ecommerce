// actions
import { getProducts } from "@/actions/product.actions";
// constants
import { images as constantImages } from "@/constants";
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
    <div className="list-grid-1 w-full">
      {data?.products?.map(
        ({ _id, brand, category, discount, price, stock, images, title }) => (
          <ProductCard
            key={_id}
            _id={_id}
            brand={brand}
            image={images[0] || constantImages.noImage}
            category={category}
            discount={discount}
            price={price}
            stock={stock}
            title={title}
          />
        )
      )}
    </div>
  );
};

export default ProductsList;
