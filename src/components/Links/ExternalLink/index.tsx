import ExternalLinkProps from "./types";
import styles from "./index.module.scss";

const ExternalLink: React.FC<ExternalLinkProps> = ({ label, title, link }) => {
  const className = styles.link;
  return (
    <a
      href={link}
      title={title}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default ExternalLink;
