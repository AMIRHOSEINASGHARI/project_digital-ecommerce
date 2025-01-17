// actions
import { getProducts } from "@/actions/product.query.actions";
// constants
import { images as constantImages } from "@/constants";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductCard from "@/components/shared/ProductCard";
import NoData from "@/components/shared/NoData";

const ProductsList = async ({
  searchParams,
}: {
  searchParams: ProductsListParams;
}) => {
  const data = await getProducts(searchParams);

  if (data?.products?.length === 0)
    return (
      <NoData
        className="h-[50vh]"
        title="No products found!"
        subText="Looks like we have out of products for this query!😥"
      />
    );

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
