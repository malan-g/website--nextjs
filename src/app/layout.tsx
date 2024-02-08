import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeLink from "@/components/Navigation/HomeLink";
import { Heading, SubHeading, Paragraph } from "@/components/Font";
import { BulletPointCTA } from "@/components/Navigation/CTAs";
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
        <header>
          <HomeLink />
          mobile navbar goes here
        </header>
        <Spacer size="xl" />
        <main>
          <aside>
            <Heading size="lg">Heading A</Heading>
            <SubHeading size="lg">SubHeading A</SubHeading>
            <Paragraph size="lg">Paragraph A</Paragraph>
            <Heading size="md">Heading B</Heading>
            <SubHeading size="md">SubHeading B</SubHeading>
            <Paragraph size="md">Paragraph B</Paragraph>
            <Heading size="sm">Heading C</Heading>
            <SubHeading size="sm">SubHeading C</SubHeading>
            <Paragraph size="sm">Paragraph C</Paragraph>
            <div className="socials">
              {socials.map((social: SocialType) => (
                <BulletPointCTA
                  key={social.label}
                  link={social.link}
                  title={`Visit my ${social.title} page`}
                  label={social.label}
                />
              ))}
            </div>
          </aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
