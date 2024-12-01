// react
import { ReactNode } from "react";
// cmp
import Navbar from "@/components/layout/Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-width page-padding-top">{children}</main>
    </>
  );
};

export default MainLayout;
