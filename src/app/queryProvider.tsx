"use client";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { QueryFunctionContext } from "@tanstack/react-query";

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext): Promise<unknown> => {
  if (typeof queryKey[0] !== "string") {
    throw new Error("queryKey is not string");
  }
  const url = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;
  if (!url) {
    throw new Error("fetch url is not found");
  }
  const protocol = url.startsWith("localhost") ? "http:" : "https:";

  return fetch(`${protocol}//${url}${queryKey[0]}`).then((res) => res.json());
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60 * 60 * 4,
      gcTime: Infinity,
      retry: 1,
    },
  },
});

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
