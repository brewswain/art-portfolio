import styles from "../styles/TermsOfServiceTitle.module.scss";

const TermsOfServiceTitle = ({ title }) => (
   <div className={styles.tos__container}>
      <div className={styles.tos__divider} />
      <h1 className={styles.tos__header}>{title}</h1>
      <div className={styles.tos__divider} />
   </div>
);

export default TermsOfServiceTitle;
