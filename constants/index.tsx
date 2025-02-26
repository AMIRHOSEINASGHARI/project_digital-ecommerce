import {
  SolarBagBoldDuotone,
  SolarCartLarge4BoldDuotone,
  SolarChatRoundDotsBoldDuotone,
  SolarChatSquareCallBoldDuotone,
  SolarGamepadBoldDuotone,
  SolarGarageBoldDuotone,
  SolarGolfBoldDuotone,
  SolarHanger2BoldDuotone,
  SolarHeadphonesSquareSoundBoldDuotone,
  SolarHeartPulse2BoldDuotone,
  SolarHomeAngleBoldDuotone,
  SolarLaptopBoldDuotone,
  SolarPowerBoldDuotone,
  SolarPrinterMinimalisticBoldDuotone,
  SolarSmartphoneBoldDuotone,
  SolarSpeakerNinimalisticBoldDuotone,
  SolarTabletBoldDuotone,
  SolarTextFieldFocusBoldDuotone,
  SolarTvBoldDuotone,
  SolarUserRoundedBoldDuotone,
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

const grayBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAFklEQVR4nGN48uTJf2Iww6jCJ3RVCAC8T27cg6csygAAAABJRU5ErkJggg==";

const navbarProfileMenuLinks = [
  {
    title: "Orders",
    href: "/user/orders",
    icon: <SolarCartLarge4BoldDuotone />,
  },
  {
    title: "Addresses",
    href: "/user/addresses",
    icon: <SolarGolfBoldDuotone />,
  },
  {
    title: "Favourites",
    href: "/user/favourites",
    icon: <SolarHeartPulse2BoldDuotone />,
  },
  {
    title: "Comments",
    href: "/user/comments",
    icon: <SolarChatRoundDotsBoldDuotone />,
  },
  {
    title: "Log out",
    href: null,
    icon: <SolarPowerBoldDuotone />,
  },
];

const usersPage_dashboardLinks = [
  {
    title: "Orders",
    icon: <SolarBagBoldDuotone />,
    href: "/user/orders",
  },
  {
    title: "Favourits",
    icon: <SolarHeartPulse2BoldDuotone />,
    href: "/user/favourits",
  },
  {
    title: "Comments",
    icon: <SolarChatSquareCallBoldDuotone />,
    href: "/user/comments",
  },
];

const usersPage_accountLinks = [
  {
    title: "Profile Info",
    icon: <SolarUserRoundedBoldDuotone />,
    href: "/user/profile",
  },
  {
    title: "Addresses",
    icon: <SolarGolfBoldDuotone />,
    href: "/user/addresses",
  },
];

export {
  images,
  navLinks,
  productsListPage_sortList,
  grayBase64,
  navbarProfileMenuLinks,
  usersPage_dashboardLinks,
  usersPage_accountLinks,
};
