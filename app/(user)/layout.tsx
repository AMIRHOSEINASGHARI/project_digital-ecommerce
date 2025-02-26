// react
import { ReactNode } from "react";
// next
import { redirect } from "next/navigation";
// auth
import { getServerSession } from "next-auth";
// lb
import authOptions from "@/lib/auth";
import connectDB from "@/lib/connectDB";
// cmp
import Navbar from "@/components/layout/Navbar";
import UserPagesSidebar from "@/components/pages/user/shared/UserPagesSidebar";

const CheckoutLayout = async ({ children }: { children: ReactNode }) => {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <>
      <Navbar />
      <div className="max-width page-padding xl:flex xl:gap-8">
        <UserPagesSidebar />
        <main className="w-full xl:w-3/4">{children}</main>
      </div>
    </>
  );
};

export default CheckoutLayout;
