import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Nunito } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import {
  SessionContextProvider,
  Session,
  SupabaseClient,
} from "@supabase/auth-helpers-react";
import { Database } from "../type/schema";
import type { AppProps } from "next/app";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  const [queryClient] = useState(function () {
    return new QueryClient();
  });
  return (
    <>
      <SessionContextProvider
        supabaseClient={
          supabaseClient as SupabaseClient<Database, "public", any>
        }
        initialSession={pageProps.initialSession}
      >
        <QueryClientProvider client={queryClient}>
          <main className={nunito.className}>
            <SiteLayout>
              <Component {...pageProps} />
            </SiteLayout>
          </main>
        </QueryClientProvider>
      </SessionContextProvider>
    </>
  );
}
