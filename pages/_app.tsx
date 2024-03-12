import SiteLayout from "@/components/SiteLayout";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={nunito.className}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </main>
    </>
  );
}
