import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* About Column */}
        <div className={styles.footerCol}>
          <h3>Pritam Koyari</h3>
          <p>
            Passionate software developer focused on creating efficient,
            scalable, and user-friendly applications with modern technologies.
            Always eager to learn and take on new challenges.
          </p>
          <div className={styles.socialIcons}>
             <a  href="mailto:pritamkoyari@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Pritam," title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/pritam-koyari-b2a016214/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/pritamkoyari" target="_blank">
              <FaGithub />
              </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills & Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className={styles.footerCol}>
          <h3>Contact Info</h3>
          <ul className={styles.contactInfo}>
            <li><FaMapMarkerAlt /> Kolkata, India</li>
            <li><FaEnvelope /> pritamkoyari@gmail.com</li>
            <li><FaPhone /> +91 9749083388</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Pritam Koyari. All rights reserved.</p>
      </div>
    </footer>
  );
};
