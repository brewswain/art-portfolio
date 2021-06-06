import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";

import styles from "../../styles/Commissions.module.scss";

const Commissions = () => (
   <Layout>
      <div className={styles.commissions__page}>
         <Image src="/bri_render.png" width={232} height={248} />
         <h1 className={styles.commissions__title}>
            WIGGLYBUFFS'S COMMISSIONS
         </h1>
         <span className={styles.commissions__link}>
            <Link href="/commissions/terms-of-service">
               <a>Terms & Conditions</a>
            </Link>
         </span>

         <div className={styles.commissions__form_container}>
            <p className={styles.commissions__subtitle}>
               Send a request here!{" "}
               <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.commissions__form}
               >
                  TypeForm Request
               </a>{" "}
            </p>
            <p className={styles.commissions__subtitle}>
               Once your request is completed, I'll get in contact within X
               business days, and once we iron out the details, I'll send a
               paypal invoice.
            </p>
            <p className={styles.commissions__subtitle}>
               Commission will begin once payment is received!
            </p>
         </div>
      </div>
   </Layout>
);

export default Commissions;
