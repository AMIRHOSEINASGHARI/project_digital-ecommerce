import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsListSkeleton = () => {
  return (
    <div className="list-grid-1 w-full">
      {new Array(12)
        .fill([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        .map((item) => (
          <ProductCardSkeleton key={item} />
        ))}
    </div>
  );
};

export default ProductsListSkeleton;
