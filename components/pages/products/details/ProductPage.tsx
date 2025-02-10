// react
import { Suspense } from "react";
// cmp
import ProductMainDetails from "./ui/ProductMainDetails";
import ProductMainDetailsSkeletons from "@/components/skeletons/ProductMainDetailsSkeletons";
import RelatedProducts from "./ui/RelatedProducts";
import RelatedProductsSkeletons from "@/components/skeletons/RelatedProductsSkeletons";

const ProductPage = ({ id }: { id: string }) => {
  return (
    <main className="space-y-16">
      <Suspense fallback={<ProductMainDetailsSkeletons />}>
        <ProductMainDetails id={id} />
      </Suspense>
      <Suspense fallback={<RelatedProductsSkeletons />}>
        <RelatedProducts id={id} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
