import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Topline Media",
  description: "",
};

const unbounded = Unbounded({ subsets: ["cyrillic"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={unbounded.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
