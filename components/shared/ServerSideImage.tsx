// next
import Image from "next/image";
// types
import { ServerSideImageProps } from "@/types";
// lib
import { getLocaleImage, getRemoteImage } from "@/lib/imagePlaceholder";

const ServerSideImage = async ({
  src,
  width,
  height,
  alt,
  className = "",
  blurType,
}: ServerSideImageProps) => {
  const { base64 } =
    blurType === "locale"
      ? await getLocaleImage(src)
      : await getRemoteImage(src);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      className={className}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default ServerSideImage;
