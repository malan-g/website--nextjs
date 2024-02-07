import Link from "next/link";
import styles from "./index.module.scss";

const HomeLink = () => {
  return (
    <Link href="/" title="return to homepage" className={styles.link}>
      Malan<span>dev</span>
    </Link>
  );
};

export default HomeLink;
