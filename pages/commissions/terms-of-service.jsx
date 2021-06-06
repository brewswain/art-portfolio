import { CustomButton, Layout } from "../../components";
import styles from "../../styles/TOS.module.scss";

const TOS = () => (
  <Layout>
    <div className={styles.terms__page}>
      <div className={styles.terms__container}>
        <h1 className={styles.terms__header}>Commission Terms & Services</h1>
        <div className={styles.terms__commission}>
          <div className={styles.terms__dialogue}>
            I am human, please don’t rush me. asking for updates is ok!
          </div>
          <div className={styles.terms__dialogue}>
            If anything, please remind me if i haven’t finished your commission
            within 2 weeks, this is because i tend to get easily distracted and
            may have forgotten.
          </div>
          <div className={styles.terms__dialogue}>
            I take payment before I begin the commission, this helps me feel
            more motivated & avoid being scammed. if I know/trust you, you’ll be
            allowed to pay afterwards.
          </div>
          <div className={styles.terms__dialogue}>
            If you don’t like my prices, don’t buy. simple as that.
          </div>
          <div className={styles.terms__dialogue}>
            Payment must be made via usd, I use paypal.
          </div>
          <div className={styles.terms__dialogue}>
            Please provide a reference!!! describing your oc isn’t a reference!
          </div>
          <div className={styles.terms__dialogue}>
            If you are the commissioner, feel free to use the finished
            commission on other websites as long as credit back to me is placed.
            Do not claim it as your own work.
          </div>
          <div className={styles.terms__dialogue}>
            Any commission that requires me to edit (banner, icon, desktop bg)
            will cost more than the listed price, this is bc I usually try my
            best to make the edit top notch. :d
          </div>
        </div>
        <h1 className={styles.terms__header}>Refund Services</h1>
        <div className={styles.terms__dialogue}>
          If more than a month has passed and I have not started your
          commission, you are free to receive a full refund, just inform me and
          it will be done.
        </div>
        <div className={styles.terms__dialogue}>
          If you ask for a refund after I am more than halfway done with your
          artwork (at least lineart done), I will give you half the money given
          and what I had done at the time
        </div>
        <h1 className={styles.terms__header}>Can draw</h1>
        <ul className={styles.terms__list}>
          <li className={styles.terms__list__item}>Anthro/Furries </li>
          <li className={styles.terms__list__item}>
            Humans, humanlike creatures, preferably feminine*
          </li>
          <li className={styles.terms__list__item}>
            vanilla nsfw (uncensored boobs, etc.)
          </li>
          <li className={styles.terms__list__item}>
            slight gore (bruises, injuries, etc.)
          </li>
        </ul>
        <h1 className={styles.terms__header}>Can't draw</h1>
        <ul className={styles.terms__list}>
          <li className={styles.terms__list__item}>Elderly people</li>
          <li className={styles.terms__list__item}>
            Mecha/intense Armor (Like pharah from ovw)
          </li>
          <li className={styles.terms__list__item}>
            full on nsfw (sex positions, etc.)
          </li>
          <li className={styles.terms__list__item}> extreme gore</li>
          <li className={styles.terms__list__item}>fetish art</li>
        </ul>

        <div className={styles.terms__button_container}>
          <a href="https://google.tt" target="_blank" rel="noreferrer">
            <CustomButton large>Make Commission</CustomButton>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default TOS;
