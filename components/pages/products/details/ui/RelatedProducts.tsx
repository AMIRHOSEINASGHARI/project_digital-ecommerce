// actions
import { getRelatedProducts } from "@/actions/query/product.query.actions";
// constants
import { images as constantImages } from "@/constants";
// cmp
import ProductCard from "@/components/shared/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SolarRoundArrowLeftBoldDuotone,
  SolarRoundArrowRightBoldDuotone,
} from "@/components/svg";
import NumberBadge from "@/components/shared/NumberBadge";

const RelatedProducts = async ({ id }: { id: string }) => {
  const relatedProducts = await getRelatedProducts(id);

  if (relatedProducts?.length === 0) return;

  return (
    <section className="space-y-4 relative">
      <div className="relative w-fit">
        <h5 className="w-fit">Related Products</h5>
        <NumberBadge
          value={relatedProducts?.length}
          className="top-0 -right-2"
        />
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {relatedProducts.map((product) => (
            <CarouselItem
              key={product?._id}
              className="pl-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <div className="px-1 pb-5">
                <ProductCard
                  key={product?._id}
                  _id={product?._id}
                  brand={product?.brand}
                  image={product?.images[0] || constantImages.noImage}
                  category={product?.category}
                  discount={product?.discount}
                  price={product?.price}
                  stock={product?.stock}
                  title={product?.title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-9 right-0 flex items-center gap-1">
          <CarouselPrevious variant="icon" className="static">
            <SolarRoundArrowLeftBoldDuotone />
          </CarouselPrevious>
          <CarouselNext variant="icon" className="static">
            <SolarRoundArrowRightBoldDuotone />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};

export default RelatedProducts;
