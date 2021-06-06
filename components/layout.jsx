import { NavBar } from "./";

import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => (
  <main className={styles.page__container}>
    <NavBar />
    <div className={styles.page__children}>{children}</div>
  </main>
);

export default Layout;
