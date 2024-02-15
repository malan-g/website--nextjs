"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./index.module.scss";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const routes = pathname.split("/").filter(Boolean);

  if (routes.length === 1) {
    return (
      <ul className={styles.breadcrumbs}>
        <li key="home">
          <Link className={styles.breadcrumb} href="/">
            Home
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumb} key="home">
        <Link href="/">Home</Link>
      </li>
      {routes.splice(0, routes.length - 1).map((route) => {
        return (
          <li className={styles.breadcrumb} key={route}>
            <Link href={`/${route}`}>
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
