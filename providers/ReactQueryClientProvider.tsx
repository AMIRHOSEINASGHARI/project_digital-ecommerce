"use client";

// react
import React from "react";
// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const q = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });

  return <QueryClientProvider client={q}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
