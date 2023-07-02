import styles from "./styles.module.css";
import medicare from "../../assets/medical-care.svg";

const Hero = () => (
  <>
    <section id="hero">
      <div className={`container ${styles.hero}`}>
        {/* Heading */}
        <div className={styles.hero__heading}>
          <h1 className={`title`}>COVID ID</h1>
          <p className={`subtitle`}>Monitoring Perkembangan Covid</p>
          <p className={styles.hero__desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi tenetur tempore doloribus molestiae hic, sed assumenda culpa ipsam ut.</p>
          <button className={styles.hero__actionBtn}>Vaccine</button>
        </div>
        {/* Ilustration */}
        <div className={styles.hero__ilustration}>
          <img src={medicare} alt="Medical Care Ilustration" />
        </div>
      </div>
    </section>
  </>
);

export default Hero;
