import styles from "./styles.module.css"
import Navlinks from "../Navlinks"

const Footer = () => (
  <>
    <footer>
      <div className={`container ${styles.container}`}>
        <span>
          <h1 className={styles.footer__brand}>COVID ID</h1>
          <p className={styles.footer__author}>Developed by <span>Rakha Zahran Nurfirmansyah</span></p>
        </span>
        <Navlinks className={styles.footer__nav} highlight={false} />
      </div>
    </footer>
  </>
);

export default Footer;
