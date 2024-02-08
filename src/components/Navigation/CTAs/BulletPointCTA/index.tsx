import { BulletPointCTAProps } from "./types";
import styles from "./index.module.scss";

const BulletPointCTA: React.FC<BulletPointCTAProps> = ({
  label,
  title,
  link,
}) => {
  return (
    <div className={styles.cta}>
      •&nbsp;
      <a href={link} title={title}>
        {label}
      </a>
    </div>
  );
};

export default BulletPointCTA;
