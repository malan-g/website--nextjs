import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeLink from "@/components/Navigation/HomeLink";
import Heading from "@/components/Font/Heading";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malandev",
  description: "Malan Gunaratne | Web developer - Auckland, New Zealand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeLink />
        <Heading size="lg">Heading A</Heading>
        <Heading size="md">Heading A</Heading>
        <Heading size="sm">Heading A</Heading>
        {children}
      </body>
    </html>
  );
}
