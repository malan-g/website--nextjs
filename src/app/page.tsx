import { Heading, SubHeading, Paragraph } from "@/components/Font";
import Spacer from "@/components/Layout/Spacer";
import { socials, menu, SocialType } from "@/lib";
import { ArrowedExternalLink, InternalLink } from "@/components/Links";

import { homepage } from "@/lib/pages";

export default function Home() {
  return (
    <main>
      <Heading size="lg">{homepage.title}</Heading>
      <SubHeading size="sm">{homepage.subtitle}</SubHeading>
      <Spacer size="sm" />
      <Paragraph size="md">{homepage.body}</Paragraph>
      <Spacer size="sm" />
      <nav>
        <ul className="sitemap">
          {menu.map((item) => (
            <li key={item.label}>
              <InternalLink label={item.label} link={item.link} />
            </li>
          ))}
        </ul>
        <Spacer size="md" />
        <ul className="socials">
          {socials.map((social: SocialType) => (
            <li key={social.label}>
              <ArrowedExternalLink
                title={social.title}
                label={social.label}
                link={social.link}
              />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
