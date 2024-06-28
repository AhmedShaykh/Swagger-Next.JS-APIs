import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swagger Next.JS APIs",
  description: "Swagger Next.JS Restful APIs"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <div className="flex justify-center items-center p-4">
          <Link
            href={"https://github.com/AhmedShaykh/Swagger-Next.JS-APIs"}
            target="_blank"
          >
            <h1 className="font-bold">
              CHECK MY REPO 🚀
            </h1>
          </Link>
        </div>
      </body>
    </html>
  )
};