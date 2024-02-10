import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <Link href="/" title="Return to homepage" className={styles.home}>
        Malan<span>dev</span>
      </Link>
    </header>
  );
};

export default Header;
