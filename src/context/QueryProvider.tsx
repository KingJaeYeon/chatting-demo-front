import React, { useLayoutEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { parsePayload } from "../lib/util.ts";
import { useAuthContext } from "../store/authStore.ts";

const config = {
  defaultOptions: {
    mutations: {
      retry: (failureCount: number, error: any) => {
        // 최대 2번까지 재시도하며, 인증에러일경우에만 재시도
        return failureCount <= 2 && error?.cause?.status === 401;
      },
    },
  },
};

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient(config);
  const access = Cookies.get("access");
  const token = parsePayload(access);
  const { init } = useAuthContext();
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    return () => {
      if (token) {
        init(token);
      }
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
