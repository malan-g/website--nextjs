import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeLink from "@/components/Navigation/HomeLink";
import { Heading, SubHeading } from "@/components/Font";
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
        <SubHeading size="lg">SubHeading A</SubHeading>
        <Heading size="md">Heading B</Heading>
        <SubHeading size="md">SubHeading B</SubHeading>
        <Heading size="sm">Heading C</Heading>
        <SubHeading size="sm">SubHeading C</SubHeading>
        {children}
      </body>
    </html>
  );
}
