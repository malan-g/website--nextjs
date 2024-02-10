import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Heading, SubHeading, Paragraph } from "@/components/Font";
import ExternalLink from "@/components/Links/ExternalLink";
import { socials, SocialType } from "@/lib";
import Spacer from "@/components/Layout/Spacer";
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
        <Header />
        <Spacer size="xl" />
        {children}
      </body>
    </html>
  );
}
