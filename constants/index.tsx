import {
  SolarBagBoldDuotone,
  SolarGamepadBoldDuotone,
  SolarGarageBoldDuotone,
  SolarHanger2BoldDuotone,
  SolarHeadphonesSquareSoundBoldDuotone,
  SolarHomeAngleBoldDuotone,
  SolarLaptopBoldDuotone,
  SolarPrinterMinimalisticBoldDuotone,
  SolarSmartphoneBoldDuotone,
  SolarSpeakerNinimalisticBoldDuotone,
  SolarTabletBoldDuotone,
  SolarTextFieldFocusBoldDuotone,
  SolarTvBoldDuotone,
  SolarVideocameraRecordBoldDuotone,
  SolarWatchSquareBoldDuotone,
} from "@/components/svg";

const images = {
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person: "/images/person.jpg",
  notFound: "/images/404.svg",
  notAllowed: "/images/not-allowed.png",
  error: "/images/sad.png",
  noImage: "/images/no-image.jpg",
  emptyFolder: "/images/folder-empty.svg",
};

const navLinks = [
  {
    title: "Home",
    icon: <SolarHomeAngleBoldDuotone />,
    href: "/",
  },
  {
    title: "Products",
    icon: <SolarBagBoldDuotone />,
    href: "/products",
  },
  {
    title: "Blogs",
    icon: <SolarTextFieldFocusBoldDuotone />,
    href: "/blogs",
  },
  {
    title: "About us",
    icon: <SolarGarageBoldDuotone />,
    href: "/about-us",
  },
];

export const productCategory = [
  {
    icon: <SolarVideocameraRecordBoldDuotone />,
    title: "Camera",
    value: "camera",
  },
  {
    icon: <SolarGamepadBoldDuotone />,
    title: "Gaming",
    value: "gaming",
  },
  {
    icon: <SolarHeadphonesSquareSoundBoldDuotone />,
    title: "Headphone",
    value: "headphone",
  },
  {
    icon: <SolarLaptopBoldDuotone />,
    title: "Laptop",
    value: "laptop",
  },
  {
    icon: <SolarSmartphoneBoldDuotone />,
    title: "Phone",
    value: "phone",
  },
  {
    icon: <SolarPrinterMinimalisticBoldDuotone />,
    title: "Printer",
    value: "printer",
  },
  {
    icon: <SolarSpeakerNinimalisticBoldDuotone />,
    title: "Speaker",
    value: "speaker",
  },
  {
    icon: <SolarTabletBoldDuotone />,
    title: "Tablet",
    value: "tablet",
  },
  {
    icon: <SolarTvBoldDuotone />,
    title: "TV",
    value: "tv",
  },
  {
    icon: <SolarWatchSquareBoldDuotone />,
    title: "Watch",
    value: "watch",
  },
  {
    icon: <SolarHanger2BoldDuotone />,
    title: "Clothes",
    value: "cloth",
  },
];

const productsListPage_sortList = [
  { title: "Popular", value: "popular" },
  { title: "Newest", value: "newest" },
  { title: "Oldest", value: "oldest" },
  { title: "Cheapest", value: "cheapest" },
  { title: "Expensive", value: "expensive" },
  { title: "Best seller", value: "best-seller" },
];

export { images, navLinks, productsListPage_sortList };
