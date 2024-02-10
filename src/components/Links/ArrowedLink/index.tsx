import styles from "./index.module.scss";
import ArrowedLinkProps from "./types";

const ArrowedLink: React.FC<ArrowedLinkProps> = ({ children }) => {
  const className = styles.link;
  return (
    <span className={className}>
      {children}
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

export default ArrowedLink;
