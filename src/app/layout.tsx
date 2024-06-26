import { ReactNode } from "react";
import Provider from "@/Components/Provider";
import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swagger Next.JS APIs",
  description: "Swagger Next.JS APIs"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  )
};