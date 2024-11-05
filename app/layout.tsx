import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Providers } from "./providers";
import { FooterSection } from "@/components/layout/footer-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fozato - AI-Powered YouTube Growth Platform",
  description:
    "Unlock your YouTube growth with AI-driven optimization. Get more views, subscribers, and revenue automatically.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
            <FooterSection />
          </main>
        </Providers>
      </body>
    </html>
  );
}
