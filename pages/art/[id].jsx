import Image from "next/link";

import { Layout } from "../../components";

import styles from "../../styles/ArtDetails.module.scss";
import imageData from "../../data/images";

//TODO: Set up react-query when i start using data from firebase

const ArtDetails = ({
   // TODO: Replace these props and API calls with our image data whenever I fix up buckets
   picture: { artTitle, id, url },
}) => {
   return (
      // Concept is Card that takes up a lot of the screen, with the title underneath it and any purchase option for prints.
      // Time to begin thinking about theming soon

      <Layout>
         <div className={styles.details__container}>
            <div className={styles.details__image_container}>
               {/* <Image src="/logo.png" layout="fill" /> */}
               <img src={`/${url}`} className={styles.details__image} />
            </div>
            <div className={styles.details__text_container}>
               <span className={styles.details__title}>{id}</span>

               {/* Do some kind of state here, I'm thinking we use a very simple cart? */}
               <span className={styles.details__print}>Buy Print</span>
            </div>
         </div>
      </Layout>
   );
};

export const getStaticPaths = async () => {
   const response = imageData;
   // const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

   //  const data = await response.json();

   const paths = response.map((picture) => {
      return { params: { id: picture.id } };
      // return { params: { id: picture.id.toString() } };
   });
   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps = async (context) => {
   const artTitle = context.params.id;
   const response = imageData.find((element) => element.id === artTitle);
   //  const response = await fetch(
   //     `https://jsonplaceholder.typicode.com/users/${artTitle}`
   //  );

   console.log({ response });

   //  const data = await response.json();

   return {
      props: { picture: response },
   };
};

export default ArtDetails;
