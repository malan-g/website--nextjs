import { Heading, SubHeading, Paragraph } from "@/components/Font";
import Spacer from "@/components/Layout/Spacer";
import { socials, SocialType } from "@/lib";
import { ArrowedExternalLink } from "@/components/Links";

import { homepage } from "@/lib/pages";

export default function Home() {
  return (
    <main>
      <Heading size="lg">{homepage.title}</Heading>
      <SubHeading size="sm">{homepage.subtitle}</SubHeading>
      <Spacer size="sm" />
      <Paragraph size="md">{homepage.body}</Paragraph>
      <Spacer size="lg" />
      <div className="socials">
        {socials.map((social: SocialType) => (
          <ArrowedExternalLink
            key={social.label}
            title={social.title}
            label={social.label}
            link={social.link}
          />
        ))}
      </div>
    </main>
  );
}
