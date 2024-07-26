import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Providers from './Providers'  // Import the Providers component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReviewTz",
  description: "Give Your Reviews For others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeModeScript />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}