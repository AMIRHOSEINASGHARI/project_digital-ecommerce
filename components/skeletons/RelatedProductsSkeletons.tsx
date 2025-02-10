import ProductCardSkeleton from "./ProductCardSkeleton";

const RelatedProductsSkeletons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {[1, 2, 3, 4, 5].map((el) => (
        <ProductCardSkeleton key={el} />
      ))}
    </div>
  );
};

export default RelatedProductsSkeletons;
