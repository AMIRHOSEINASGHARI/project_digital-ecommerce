"use client";

// react
import { ReactNode } from "react";
// next auth
import { SessionProvider } from "next-auth/react";

const NextAuthSessionProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
