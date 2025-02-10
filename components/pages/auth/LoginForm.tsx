"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// auth
import { signIn } from "next-auth/react";
// constants
import { grayBase64 } from "@/constants";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// lib
import { LoginFormSchema } from "@/lib/zodValidations";
// cmp
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LogoRegular } from "@/components/svg";
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const backUrl = params?.get("backUrl");

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/user/profile",
      redirect: false,
    });
    setIsLoading(false);

    if (res?.error) {
      toast.error(res?.error);
    } else {
      replace(backUrl ?? "/user/profile");
    }
  };

  return (
    <main className="flex justify-between h-screen">
      <section className="w-1/2 max-lg:hidden relative">
        <div className="absolute z-20 top-4 left-4">
          <Link href="/" className="text-white text-5xl">
            <LogoRegular />
          </Link>
        </div>
        <div className="text-white absolute z-10 inset-0 w-full h-full bg-gradient-to-t from-black/70 to-black/5 flex flex-col items-center justify-center text-center p-10">
          <h1 className="font-semibold">
            Everything you need, all in one place!
          </h1>
          <p className="max-w-[500px]">
            Join thousands of satisfied customers who trust us for their digital
            needs. Your journey to innovation starts here!
          </p>
        </div>
        <Image
          src="/images/auth-image.webp"
          width={1500}
          height={1000}
          alt="Auth"
          priority
          placeholder="blur"
          blurDataURL={grayBase64}
          className="w-full h-full object-cover"
        />
      </section>
      <section className="w-full lg:w-1/2 flex items-center justify-center flex-col gap-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[300px] md:w-[330px] flex flex-col gap-3 items-center"
          >
            <div className="flex flex-col items-center">
              <h5 className="text-[23px] md:text-[27px] font-semibold">
                Welcome to OnlineShop
              </h5>
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm">Don&apos;t have any account?</p>
                <Button asChild variant="link">
                  <Link
                    href="/register"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    Sign up
                  </Link>
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded-full py-4"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className="relative w-[300px] md:w-[330px] h-[1px] bg-slate-200 dark:bg-slate-700 my-5 flex items-center justify-center">
          <span className="text-sm bg-white dark:bg-dark1 absolute z-20 px-4">
            Or
          </span>
        </div>
        <GoogleLogin disabled={isLoading} backUrl={backUrl} />
        <GithubLogin disabled={isLoading} backUrl={backUrl} />
        <DarkModeToggle />
      </section>
    </main>
  );
};

export default LoginForm;
