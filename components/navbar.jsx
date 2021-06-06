import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/NavBar.module.scss";

const variants = {
  rotate: {
    rotate: [0, 180],
    transition: { duration: 0.5 },
  },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: {
    rotate: [180, 0],
    transition: { duration: 0.5 },
  },
};

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar__links}>
        <Link href="/">
          <a className={styles.navbar__link}>Blee</a>
        </Link>
        <Link href="https://twitter.com/wiggIybuff">
          <a target="_blank" rel="noreferrer">
            <Image height={30} width={30} src="/twitter.svg" />
          </a>
        </Link>
        <Link href="https://twitch.tv/wigglybuff">
          <a target="_blank" rel="noreferrer">
            <Image height={30} width={30} src="/twitch.svg" />
          </a>
        </Link>
        <AnimatePresence>
          <div style={{ paddingRight: "1rem" }}>
            <motion.div
              key={styles.navbar__logo}
              animate={isVisible ? "rotate" : "stop"}
              variants={variants}
            >
              <Image
                src="/logo.png"
                width={50}
                height={50}
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
                className={styles.navbar__logo}
              />
            </motion.div>
          </div>

          {isVisible && (
            <motion.div
              key={styles.navbar__modal}
              className={styles.navbar__modal}
              onClick={() => setIsVisible(false)}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
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
              <Link href="/commissions">
                <a className={styles.navbar__link}>
                  <li>Comm.</li>
                </a>
              </Link>
              <Link href="/contact">
                <a className={styles.navbar__link}>
                  <li>Contact</li>
                </a>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
};

export default NavBar;
