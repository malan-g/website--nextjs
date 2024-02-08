import SubHeadingProps from "./types";
import styles from "./index.module.scss";

import { clsx } from "clsx";

const SubHeading: React.FC<SubHeadingProps> = ({ size, children }) => {
  const className = clsx(styles.subheading, {
    [styles.lg]: size === "lg",
    [styles.md]: size === "md",
    [styles.sm]: size === "sm",
  });

  return <h2 className={className}>{children}</h2>;
};

export default SubHeading;
