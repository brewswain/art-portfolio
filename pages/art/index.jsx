import Image from "next/image";
import Link from "next/link";

import "react-aspect-ratio/aspect-ratio.css";

import { Layout } from "../../components";
import IMAGE_DATA from "../../data/images";

import styles from "../../styles/Art.module.scss";

const Art = () => {
   // Mock API Request

   return (
      <Layout>
         <div className={styles.art__grid}>
            {IMAGE_DATA.map((image) => {
               const { layout, url, id } = image;
               return (
                  <>
                     {/* TODO: Fix keys when we have titles */}
                     {layout === "portrait" ? (
                        <div key={url} className={styles.art__image}>
                           <div className={styles.art__overlay}>
                              <Image
                                 src={`/${url}`}
                                 width={1200}
                                 height={1600}
                                 sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
                              />
                              <Link href={`/art/${id}`}>
                                 <div key={url} className={styles.art__title}>
                                    hello
                                 </div>
                              </Link>
                           </div>
                        </div>
                     ) : (
                        <div key={url} className={styles.art__image}>
                           <div className={styles.art__overlay}>
                              <Image
                                 key={url}
                                 src={`/${url}`}
                                 width={1600}
                                 height={1200}
                                 sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
                              />
                           </div>
                           <Link href={`/art/${url}`}>
                              <div key={url} className={styles.art__title}>
                                 hello
                              </div>
                           </Link>
                        </div>
                     )}
                  </>
               );
            })}
         </div>
      </Layout>
   );
};
// Swap this to be server generated once I get some images to actually pull from said server
export default Art;
