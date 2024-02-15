import { Heading, Paragraph } from "@/components/Font";
import Spacer from "@/components/Layout/Spacer";
import Breadcrumbs from "@/components/Links/Breadcrumbs";
import Link from "next/link";
const Page = () => {
  return (
    <main>
      <Breadcrumbs />
      <Heading size="lg">Projects</Heading>
      <Paragraph size="md">A collection of projects</Paragraph>
      <Spacer size="sm" />
      <ul>
        <li>
          <Link href="/projects/project-a">Project A</Link>
        </li>
        <li>
          <Link href="/projects/project-b">Project B</Link>
        </li>
        <li>
          <Link href="/projects/project-c">Project C</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
