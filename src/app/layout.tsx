export const dynamic = "force-dynamic";

import "@/app/globals.css";
import type { Metadata } from "next";
import { QueryProvider } from "@/app/queryProvider";
import { Footer } from "@/utils/ui/structure/Footer";
import { Header } from "@/utils/ui/structure/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="relative mx-auto flex min-h-screen w-auto max-w-2xl flex-col shadow-lg">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
