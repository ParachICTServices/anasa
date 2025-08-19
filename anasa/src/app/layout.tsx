import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/shared/Header';
import Footer from "@/components/shared/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "The ANASA WORKSHOP",
  description: "Unique and inspiring Designs",
};

const aptos = localFont({
  src: [
    { path: "../../public/font/Aptos-Display.ttf", weight: "400", style: "normal" },
    { path: "../../public/font/Aptos-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={aptos.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
