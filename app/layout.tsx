import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/src/utils/providers/ReactQueryProvider";
import Navbar from "@/src/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <ReactQueryProvider>
          <Navbar />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}