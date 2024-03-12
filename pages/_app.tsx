import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Nunito } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(function () {
    return new QueryClient();
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className={nunito.className}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </main>
      </QueryClientProvider>
    </>
  );
}
