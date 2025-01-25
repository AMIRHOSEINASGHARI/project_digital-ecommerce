// react
import { Suspense } from "react";
// cmp
import ProductMainDetails from "./ui/ProductMainDetails";

const ProductPage = ({ id }: { id: string }) => {
  return (
    <main>
      <Suspense fallback={"Loading..."}>
        <ProductMainDetails id={id} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
