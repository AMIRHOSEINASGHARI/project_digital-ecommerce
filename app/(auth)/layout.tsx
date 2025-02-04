// react
import { ReactNode } from "react";
// next
import { redirect } from "next/navigation";
// auth
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/profile");

  return children;
};

export default AuthLayout;
