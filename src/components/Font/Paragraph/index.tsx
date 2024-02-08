import ParagraphProps from "./types";
import styles from "./index.module.scss";

import { clsx } from "clsx";

const Paragraph: React.FC<ParagraphProps> = ({ size, children }) => {
  const className = clsx(styles.paragraph, {
    [styles.lg]: size === "lg",
    [styles.md]: size === "md",
    [styles.sm]: size === "sm",
  });

  return <p className={className}>{children}</p>;
};

export default Paragraph;
