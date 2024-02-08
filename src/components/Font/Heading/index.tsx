import HeadingProps from "./types";
import styles from "./index.module.scss";

import { clsx } from "clsx";

const Heading: React.FC<HeadingProps> = ({ size, children }) => {
  const className = clsx(styles.heading, {
    [styles.lg]: size === "lg",
    [styles.md]: size === "md",
    [styles.sm]: size === "sm",
  });

  return <h1 className={className}>{children}</h1>;
};

export default Heading;
