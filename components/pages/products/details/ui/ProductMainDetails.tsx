// next
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/query/product.query.actions";
// lib
import { applyDiscount, jsonParser, shorterText } from "@/lib/functions";
// cmp
import { StarFill, StarRegular } from "@/components/svg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ImagesSection from "./ImagesSection";
import AddWishList from "@/components/shared/AddWishList";
import ShareButtons from "@/components/shared/ShareButtons";
import AddToCartButton from "@/components/shared/cart/AddToCartButton";

const ProductMainDetails = async ({ id }: { id: string }) => {
  const product = await getProduct(id);

  if (!product) notFound();

  const {
    images,
    title,
    content,
    category,
    stock,
    discount,
    price,
    subDescription,
    _id,
  } = product;

  return (
    <>
      <section className="flex flex-col gap-8 xl:flex-row">
        <ImagesSection images={images} />
        <div className="space-y-4 w-full xl:w-1/2">
          <div className="space-y-1">
            <h5>{title}</h5>
            <span className="text-[var(--text-disabled)] capitalize text-sm">
              {category}
            </span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {new Array(4).fill([1, 2, 3, 4]).map((item) => (
                  <StarFill key={item} className="text-orange-500 text-lg" />
                ))}
                <StarRegular className="text-lg text-icon-light dark:text-icon-dark" />
              </div>
              <span className="text-[var(--text-disabled)] capitalize text-sm">
                2655 Reviews
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-disabled)] capitalize text-xs">
                Availability
              </span>
              <Badge
                variant={
                  stock > 10
                    ? "green"
                    : stock <= 10 && stock >= 1
                    ? "orange"
                    : "rose"
                }
              >
                {stock > 10
                  ? "In stock"
                  : stock <= 10 && stock >= 1
                  ? "Low stock"
                  : "Out of stock"}
              </Badge>
            </div>
          </div>
          {stock > 0 && (
            <div className="flex flex-col gap-1">
              {discount > 0 && (
                <span className="price-discount">${price.toFixed(2)}</span>
              )}
              <span className="text-primary-1 dark:text-primary-5 text-2xl font-semibold">
                ${applyDiscount(price, discount)}
              </span>
            </div>
          )}
          <p>{subDescription}</p>
          <div className="flex items-center gap-1 font-semibold">
            <span className="text-sm">ID:</span>
            <span className="text-[var(--text-disabled)] text-sm">
              {shorterText(jsonParser(_id), 12, false)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <AddToCartButton stock={stock} productId={jsonParser(_id)} />
            <AddWishList _id={jsonParser(_id)} />
          </div>
          <div className="flex max-xl:justify-center">
            <ShareButtons title={title} />
          </div>
        </div>
      </section>
      <section>
        <Card>
          <CardTitle>Addition Content</CardTitle>
          <CardContent
            dangerouslySetInnerHTML={{ __html: content }}
            className="tiptap"
          />
        </Card>
      </section>
    </>
  );
};

export default ProductMainDetails;
