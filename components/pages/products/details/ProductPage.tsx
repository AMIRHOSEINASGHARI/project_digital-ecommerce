// react
import { Suspense } from "react";
// cmp
import ProductMainDetails from "./ui/ProductMainDetails";
import ProductMainDetailsSkeletons from "@/components/skeletons/ProductMainDetailsSkeletons";

const ProductPage = ({ id }: { id: string }) => {
  return (
    <main className="space-y-8">
      <Suspense fallback={<ProductMainDetailsSkeletons />}>
        <ProductMainDetails id={id} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
