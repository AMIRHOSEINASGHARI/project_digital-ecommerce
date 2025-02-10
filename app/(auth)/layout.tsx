// react
import { ReactNode } from "react";
// next
import { redirect } from "next/navigation";
// auth
import { getServerSession } from "next-auth";
// lib
import authOptions from "@/lib/auth";
import connectDB from "@/lib/connectDB";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (session) redirect("/profile");

  return children;
};

export default AuthLayout;
