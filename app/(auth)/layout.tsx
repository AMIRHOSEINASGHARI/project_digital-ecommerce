// react
import { ReactNode } from "react";
// auth
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return children;
};

export default AuthLayout;
