// auth
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// utils
import connectDB from "./connectDB";
// models
import { CustomerModel } from "@/models";

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, credentials }) {
      if (!credentials) {
        await connectDB();

        const customer = await CustomerModel.findOne({ email: user?.email });
        if (!customer) {
          const data = {
            email: user?.email,
            displayName: user?.name,
            password: "",
            avatar: user?.image,
          };
          await CustomerModel.create(data);
        } else {
          if (!customer?.avatar) {
            customer.avatar = user.image;
            await customer.save();
          }
        }
      }
      return true;
    },
  },
};

export default authOptions;
