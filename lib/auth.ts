// auth
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// utils
import connectDB from "./connectDB";
import { verifyPassword } from "./functions";
// models
import { CustomerModel } from "@/models";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";

        try {
          await connectDB();
          const customer = await CustomerModel.findOne({ email });
          if (!customer) throw new Error("Email or Password is not correct");
          if (!customer?.password)
            throw new Error("Password has not been set yet");

          const isValidPassword = await verifyPassword(
            password,
            customer?.password
          );
          if (!isValidPassword) throw new Error("Email or password is wrong");

          const data = {
            id: customer?._id,
            name: customer?.displayName,
            email: customer?.email,
            image: customer?.avatar,
          };
          return data;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    }),
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
