// next
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/query/product.query.actions";
// cmp
import ImagesSection from "./ImagesSection";

const ProductMainDetails = async ({ id }: { id: string }) => {
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <section className="flex flex-col gap-8 xl:flex-row">
      <ImagesSection images={product.images} />
    </section>
  );
};

export default ProductMainDetails;
