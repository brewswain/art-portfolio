import Link from "next/link";

import styles from "../styles/NavBar.module.scss";

const NavBar = () => (
  <nav className={styles.navbar__container}>
    <ul className={styles.navbar__links}>
      <Link href="/">
        <a className={styles.navbar__link}>
          <li>Blee</li>
        </a>
      </Link>{" "}
    </ul>
    <ul className={styles.navbar__links}>
      <Link href="/art">
        <a className={styles.navbar__link}>
          <li>Art</li>
        </a>
      </Link>
      <Link href="/about">
        <a className={styles.navbar__link}>
          <li>About</li>
        </a>
      </Link>
      <Link href="/contact">
        <a className={styles.navbar__link}>
          <li>Contact</li>
        </a>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
