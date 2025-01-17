// react
import { ReactNode } from "react";
// cmp
import Navbar from "@/components/layout/Navbar";
import connectDB from "@/lib/connectDB";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  await connectDB();

  return (
    <>
      <Navbar />
      <main className="max-width page-padding">{children}</main>
    </>
  );
};

export default MainLayout;
