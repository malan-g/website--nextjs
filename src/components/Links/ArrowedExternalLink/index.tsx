import styles from "./index.module.scss";
import { ExternalLink } from "../index";
import ArrowedExternalLinkProps from "./types";

const ArrowedExternalLink: React.FC<ArrowedExternalLinkProps> = ({
  label,
  title,
  link,
}) => {
  const className = styles.link;

  return (
    <span className={className}>
      <ExternalLink label={label} title={title} link={link} />
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1H9.5M9.5 1V9M9.5 1L1 9" stroke="black" />
      </svg>
    </span>
  );
};

export default ArrowedExternalLink;
