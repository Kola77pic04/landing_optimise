import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profitez d'une fibre et d'un forfait mobile à tarif réduit",
  description: "Profitez d'une fibre et d'un forfait mobile à tarif réduit. Demande rapide et sans engagement.",
  icons: {
    icon: "/comparer_fibre.png",
  },
   openGraph: {
    images: ["/comparer_fibre.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/comparer_fibre.png"],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-600 antialiased selection:bg-blue-100 selection:text-blue-900 relative pb-20 md:pb-0 overflow-x-hidden`}
      >
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
