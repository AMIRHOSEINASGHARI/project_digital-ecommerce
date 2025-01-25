// types
import { PageParams } from "@/types";
// cmp
import ProductPage from "@/components/pages/products/details/ProductPage";

const Product = ({ params: { id } }: PageParams) => {
  return <ProductPage id={id} />;
};

export default Product;
