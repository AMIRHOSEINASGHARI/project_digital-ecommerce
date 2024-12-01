import {
  SolarBagBoldDuotone,
  SolarGarageBoldDuotone,
  SolarHomeAngleBoldDuotone,
  SolarTextFieldFocusBoldDuotone,
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

export { images, navLinks };
