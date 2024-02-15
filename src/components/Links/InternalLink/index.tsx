import InternalLinkProps from "./types";
import Link from "next/link";
import styles from "./index.module.scss";

const InternalLink: React.FC<InternalLinkProps> = ({ label, link }) => {
  const className = styles.link;
  return (
    <Link href={link} className={className}>
      <span className={styles.arrow}>&#9654;</span>
      {label}
    </Link>
  );
};

export default InternalLink;
