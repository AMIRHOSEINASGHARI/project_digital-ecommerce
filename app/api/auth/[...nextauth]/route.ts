// next auth
import NextAuth from "next-auth";
// lib
import authOptions from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
