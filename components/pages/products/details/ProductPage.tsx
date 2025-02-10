// react
import { Suspense } from "react";
// cmp
import ProductMainDetails from "./ui/ProductMainDetails";
import ProductMainDetailsSkeletons from "@/components/skeletons/ProductMainDetailsSkeletons";
import RelatedProducts from "./ui/RelatedProducts";

const ProductPage = ({ id }: { id: string }) => {
  return (
    <main className="space-y-16">
      <Suspense fallback={<ProductMainDetailsSkeletons />}>
        <ProductMainDetails id={id} />
      </Suspense>
      <Suspense fallback={"Loading ..."}>
        <RelatedProducts id={id} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
