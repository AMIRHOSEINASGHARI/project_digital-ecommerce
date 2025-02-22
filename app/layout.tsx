// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// lib
import { cn } from "@/lib/utils";
// providers
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
// cmp
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | OnlineShop",
    default: "Home | OnlineShop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <ReactQueryClientProvider>
        <ThemeProvider>
          <NextAuthSessionProvider>
            <body
              className={cn(
                "min-h-screen bg-background antialiased dark:bg-dark1 dark:text-white"
              )}
            >
              {children}
              <Toaster
                toastOptions={{
                  className: "dark:bg-dark3 dark:text-light2",
                }}
              />
            </body>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </ReactQueryClientProvider>
    </html>
  );
}
