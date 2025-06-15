
import styles from "./About.module.css";
import image1 from "../../../assets/about/pritam.jpg";
import image2 from "../../../assets/about/cursorIcon.png";
import image3 from "../../../assets/about/serverIcon.png";
import image4 from "../../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={image1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={image2} alt="Cursor icon representing frontend development" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={image3} alt="Server icon representing backend development" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={image4} alt="UI icon representing UI design" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
