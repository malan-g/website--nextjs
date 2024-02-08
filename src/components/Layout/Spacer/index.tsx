import SpacerProps from "./types";
import styles from "./index.module.scss";
import clsx from "clsx";

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  const className = clsx({
    [styles.xxl]: size === "xxl",
    [styles.xl]: size === "xl",
    [styles.lg]: size === "lg",
    [styles.md]: size === "md",
    [styles.sm]: size === "sm",
    [styles.xs]: size === "xs",
  });

  return <div className={className}></div>;
};

export default Spacer;
